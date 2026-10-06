(() => {
  'use strict';
  const showcase = document.querySelector('[data-map-showcase]');
  const gallery = document.querySelector('[data-map-gallery]');
  if (!showcase || !gallery) return;
  const slides = Array.from(gallery.querySelectorAll('a')).map(link => ({
    src: link.getAttribute('href'), label: link.querySelector('span').textContent.trim()
  }));
  const base = showcase.querySelector('[data-map-base]');
  const incoming = showcase.querySelector('[data-map-incoming]');
  const title = showcase.querySelector('[data-map-title]');
  const toggle = showcase.querySelector('[data-map-toggle]');
  const previous = showcase.querySelector('[data-map-previous]');
  const next = showcase.querySelector('[data-map-next]');
  const position = showcase.querySelector('[data-map-position]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let playing = !reducedMotion.matches;
  let inView = true;
  let busy = false;
  let timer = null;
  const pause = () => { playing = false; schedule(); };

  function schedule() {
    window.clearTimeout(timer);
    toggle.textContent = playing ? 'Pause' : 'Play';
    toggle.setAttribute('aria-label', playing ? 'Pause map animation' : 'Play map animation');
    if (playing && inView && !document.hidden && !busy) timer = window.setTimeout(() => show(current + 1), 4500);
  }

  async function show(index) {
    if (busy) return;
    busy = true;
    window.clearTimeout(timer);
    previous.disabled = next.disabled = true;
    const target = (index + slides.length) % slides.length;
    const slide = slides[target];
    try {
      incoming.src = slide.src;
      await incoming.decode();
      // Keep the old opaque frame beneath the new one throughout the fade.
      // This avoids fading both maps to the white page between frames.
      incoming.style.opacity = '0';
      await new Promise(resolve => window.requestAnimationFrame(() => window.requestAnimationFrame(resolve)));
      incoming.style.opacity = '1';
      title.textContent = slide.label;
      await new Promise(resolve => window.setTimeout(resolve, reducedMotion.matches ? 0 : 1450));
      base.src = slide.src;
      base.alt = slide.label + ' full-sky map';
      await base.decode();
      incoming.style.transition = 'none';
      incoming.style.opacity = '0';
      incoming.getBoundingClientRect();
      incoming.style.transition = '';
      current = target;
      position.textContent = (current + 1) + ' / ' + slides.length;
      showcase.dataset.currentMap = slide.label;
    } catch (error) {
      incoming.style.opacity = '0';
      title.textContent = slides[current].label;
      playing = false;
      console.error('Could not load a map preview.', error);
    } finally {
      busy = false;
      previous.disabled = next.disabled = false;
      schedule();
    }
  }

  toggle.addEventListener('click', () => { playing = !playing; schedule(); });
  previous.addEventListener('click', () => { pause(); show(current - 1); });
  next.addEventListener('click', () => { pause(); show(current + 1); });
  showcase.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault(); pause(); show(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  document.addEventListener('visibilitychange', schedule);
  reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) pause(); });
  if ('IntersectionObserver' in window) new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting; schedule();
  }).observe(showcase);
  position.textContent = '1 / ' + slides.length;
  showcase.dataset.currentMap = slides[0].label;
  showcase.querySelector('[data-map-controls]').hidden = false;
  schedule();
})();
