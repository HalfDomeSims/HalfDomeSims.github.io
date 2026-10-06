---
permalink: /data/
title: "Data"
#excerpt: "Minimal Mistakes is a flexible two-column Jekyll theme."
classes: wide
layouts_gallery:
  - url: /assets/images/mm-layout-splash.png
    image_path: /assets/images/mm-layout-splash.png
    alt: "splash layout example"
  - url: /assets/images/mm-layout-single-meta.png
    image_path: /assets/images/mm-layout-single-meta.png
    alt: "single layout with comments and related posts"
  - url: /assets/images/mm-layout-archive.png
    image_path: /assets/images/mm-layout-archive.png
    alt: "archive layout example"
last_modified_at: 2026-10-06
toc: false
---


<link rel="stylesheet" href="/assets/css/map-slideshow.css">
<div class="hd-map-showcase" data-map-showcase role="region" aria-label="Animated HalfDome maps">
  <div class="hd-map-showcase__title" data-map-title>Lensed CMB</div>
  <div class="hd-map-stage">
    <img data-map-base src="/assets/images/maps/lensed_cmb-sky.webp" alt="Lensed CMB full-sky map" width="1024" height="568" fetchpriority="high">
    <img data-map-incoming class="hd-map-stage__incoming" src="/assets/images/maps/lensed_cmb-sky.webp" alt="" aria-hidden="true" width="1024" height="568">
  </div>
  <div class="hd-map-controls" data-map-controls hidden>
    <button type="button" data-map-previous aria-label="Previous map">&#8592;</button>
    <button type="button" data-map-toggle aria-label="Pause map animation">Pause</button>
    <span class="hd-map-controls__position" data-map-position>1 / 7</span>
    <button type="button" data-map-next aria-label="Next map">&#8594;</button>
  </div>
</div>
<div class="hd-map-grid" data-map-gallery aria-label="HalfDome map previews">
  <a href="/assets/images/maps/lensed_cmb-sky.webp">
    <span>Lensed CMB</span>
    <img src="/assets/images/maps/lensed_cmb-sky.webp" alt="Lensed CMB" width="1024" height="568" loading="lazy">
  </a>
  <a href="/assets/images/maps/tsz-sky.webp">
    <span>tSZ</span>
    <img src="/assets/images/maps/tsz-sky.webp" alt="tSZ" width="1024" height="568" loading="lazy">
  </a>
  <a href="/assets/images/maps/cib_143-sky.webp">
    <span>CIB</span>
    <img src="/assets/images/maps/cib_143-sky.webp" alt="CIB" width="1024" height="568" loading="lazy">
  </a>
  <a href="/assets/images/maps/source_plane_kappa_1-sky.webp">
    <span>Lensing</span>
    <img src="/assets/images/maps/source_plane_kappa_1-sky.webp" alt="Lensing" width="1024" height="568" loading="lazy">
  </a>
  <a href="/assets/images/maps/ksz_halo-sky.webp">
    <span>kSZ (halo)</span>
    <img src="/assets/images/maps/ksz_halo-sky.webp" alt="kSZ (halo)" width="1024" height="568" loading="lazy">
  </a>
  <a href="/assets/images/maps/ksz_field-sky.webp">
    <span>kSZ (field)</span>
    <img src="/assets/images/maps/ksz_field-sky.webp" alt="kSZ (field)" width="1024" height="568" loading="lazy">
  </a>
  <a href="/assets/images/maps/tau-sky.webp">
    <span>Optical depth</span>
    <img src="/assets/images/maps/tau-sky.webp" alt="Optical depth" width="1024" height="568" loading="lazy">
  </a>
</div>
<script src="/assets/js/map-slideshow.js" defer></script>

<img src="/assets/images/tab2.png"  style="width: 800px;">

The data is publicly available on globus [here](https://app.globus.org/file-manager?origin_id=53b2a147-ae9d-4bbf-9d18-3b46d133d4bb&origin_path=%2Fhalfdome%2F), and can also be found on the [NERSC](https://nersc.gov/) community file storage (CFS) system in the CMB project directory at the following path `/global/cfs/cdirs/cmb/gsharing/halfdome/`.

For a description of the data see the enclosed `README.txt`.

For an example of reading the data see the enclosed notebook `Halfdome_analysis.ipynb`.

Further examples, notebooks, and data will be added soon!
