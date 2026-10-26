// Journey globe — Three.js + GSAP. Light textured globe, city dots, floating tags, polaroid on click.
import * as THREE from 'three';
import { OrbitControls } from './OrbitControls.js';
import LAND_B64 from './land.b64.js';   // ~19k land sample points, Int16 (lat*100, lon*100), 0.75° equal-area spacing

const stage = document.getElementById('isoStage');
if (stage) init(stage);

function init(stage) {
  const gsap = window.gsap;
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const tip = document.getElementById('isoTip');
  const card = document.getElementById('isoPanel');          // polaroid card
  const cardImg = card.querySelector('.pol-img');
  const cardCap = card.querySelector('.pol-cap');
  const cardSub = card.querySelector('.pol-sub');
  const cardClose = card.querySelector('.iso-panel-close');
  const btnReplay = document.getElementById('isoReplay');
  const steps = [].slice.call(document.querySelectorAll('.jmap .jstep'));
  const PHOTO_DIR = 'assets/journey/';                          // <id>.jpg per chapter

  // ---------- chapters (chronological; step = index in timeline) ----------
  // ox/oy: tag offset from the pin in sprite units (right/up positive)
  const DATA = [
    { id: 'neu',     city: 'Boston',      org: 'Northeastern University', short: 'Northeastern', role: 'BFA, Graphic Design',           years: '2017 – 21', lat: 42.36, lon: -71.06,  step: 0, ox:  0.16, oy:  0.14 },
    { id: 'usyd',    city: 'Sydney',      org: 'University of Sydney', short: 'USYD', role: 'Exchange Program',              years: '2017 – 18', lat: -33.87, lon: 151.21, step: 1, ox:  0.14, oy: -0.06 },
    { id: 'wayfair', city: 'Boston',      org: 'Wayfair',                      role: 'Product Designer Co-op',        years: '2020',      lat: 42.36, lon: -70.60,  step: 2, ox:  0.16, oy: -0.08 },
    { id: 'tn',      city: 'Shanghai',    org: 'Tang Ning Medical Technology', short: 'Tang Ning', role: 'Product Designer',              years: '2021 – 22', lat: 31.23, lon: 121.47,  step: 3, ox:  0.14, oy:  0.06 },
    { id: 'umich',   city: 'Michigan',    org: 'University of Michigan', short: 'UMich', role: 'MS, Information Science (HCI)', years: '2022 – 24', lat: 42.28, lon: -83.74,  step: 4, ox:  0.00, oy:  0.15 },
    { id: 'speedy',  city: 'Chicago',     org: 'SpeedyJob',                    role: 'UX Designer',                   years: '2023 – 24', lat: 41.88, lon: -87.63,  step: 5, ox: -0.14, oy: -0.08 },
    { id: 'moms',    city: 'Los Angeles', org: 'MomsinLA',                     role: 'UX Designer',                   years: '2024 – 25', lat: 34.05, lon: -118.24, step: 6, ox: -0.14, oy: -0.08 },
    { id: 'vizard',  city: 'Palo Alto',   org: 'Vizard',                       role: 'UX Designer',                   years: '2025 — now',lat: 37.44, lon: -122.14, step: 7, ox: -0.16, oy:  0.10, now: true },
  ];
  const ACCENT = 0x8f9bff, INK = 0x1a1a1a;
  const R = 1;

  // ---------- renderer ----------
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.domElement.className = 'iso-canvas';
  renderer.domElement.setAttribute('role', 'img');
  renderer.domElement.setAttribute('aria-label', '3D globe of my career journey. Drag to rotate, scroll to zoom, click a city for a photo.');
  stage.insertBefore(renderer.domElement, stage.firstChild);
  const scene = new THREE.Scene();

  // ---------- camera / controls ----------
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 50);
  const HOME = latLon(30, -92, 4.4);
  camera.position.copy(HOME);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; controls.dampingFactor = 0.07;
  controls.enablePan = false;
  controls.minDistance = 2.6; controls.maxDistance = 6.5;
  controls.rotateSpeed = 0.55; controls.zoomSpeed = 0.5;
  controls.autoRotate = !reduce; controls.autoRotateSpeed = 0.4;
  controls.update();

  // ---------- lights ----------
  scene.add(new THREE.AmbientLight(0xffffff, 1.9));
  const key = new THREE.DirectionalLight(0xffffff, 1.1); key.position.set(-3, 4, 5); scene.add(key);
  const fill = new THREE.DirectionalLight(0xffffff, 0.5); fill.position.set(4, -2, -3); scene.add(fill);

  // ---------- globe: bare occluder + instanced land pixels ----------
  const isDark = () => document.documentElement.getAttribute('data-theme') === 'dark';
  const BG = { light: 0xfafaf8, dark: 0x262626 }, PX = { light: 0x1a1a1a, dark: 0xf2f2ee };
  const globe = new THREE.Mesh(new THREE.SphereGeometry(R * 0.995, 96, 96), new THREE.MeshBasicMaterial({ color: isDark() ? BG.dark : BG.light }));
  scene.add(globe);
  // faint rim so the sphere reads against the stage in light mode
  const rim = new THREE.Mesh(new THREE.SphereGeometry(R * 0.996, 96, 96), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { c: { value: new THREE.Color(0xbdbdb8) }, k: { value: isDark() ? 0.0 : 0.22 } },
    vertexShader: 'varying vec3 vN; varying vec3 vV; void main(){ vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position,1.0); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }',
    fragmentShader: 'uniform vec3 c; uniform float k; varying vec3 vN; varying vec3 vV; void main(){ float f = 1.0 - max(dot(vN, vV), 0.0); float a = smoothstep(0.55, 1.0, f) * k; gl_FragColor = vec4(c, a); }',
  }));
  scene.add(rim);

  // decode land points
  const bin = atob(LAND_B64); const buf = new Int16Array(bin.length / 2);
  for (let i = 0; i < buf.length; i++) buf[i] = (bin.charCodeAt(i * 2) | (bin.charCodeAt(i * 2 + 1) << 8)) << 16 >> 16;
  const N = buf.length / 2;
  const SPACING = THREE.MathUtils.degToRad(0.75) * R;          // world distance between samples
  const PXS = SPACING * 0.52;                                   // pixel edge ≈ 52% of spacing → crisp, uniform gaps
  const pxGeo = new THREE.PlaneGeometry(PXS, PXS);
  const pxMat = new THREE.MeshBasicMaterial({ color: isDark() ? PX.dark : PX.light, side: THREE.DoubleSide });
  const pixels = new THREE.InstancedMesh(pxGeo, pxMat, N);
  {
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), zAxis = new THREE.Vector3(0, 0, 1), nrm = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1), up = new THREE.Vector3(0, 1, 0), east = new THREE.Vector3(), north = new THREE.Vector3(), basis = new THREE.Matrix4();
    for (let i = 0; i < N; i++) {
      const v = latLon(buf[i * 2] / 100, buf[i * 2 + 1] / 100, R * 1.0005);
      nrm.copy(v).normalize();
      // orient the quad so its edges follow lat/lon lines (rows and columns stay aligned like the reference)
      east.crossVectors(up, nrm).normalize(); north.crossVectors(nrm, east).normalize();
      basis.makeBasis(east, north, nrm); q.setFromRotationMatrix(basis);
      m4.compose(v, q, one); pixels.setMatrixAt(i, m4);
    }
    pixels.instanceMatrix.needsUpdate = true;
  }
  pixels.frustumCulled = false;
  scene.add(pixels);

  // ---------- city markers (≈6px) + HTML labels ----------
  const pinGroup = new THREE.Group(); scene.add(pinGroup);
  const dotGeo = new THREE.CircleGeometry(0.0135, 24);
  const ringGeo = new THREE.RingGeometry(0.0135, 0.0165, 24);
  const pickables = [];
  const labelLayer = document.createElement('div'); labelLayer.className = 'glabels'; stage.appendChild(labelLayer);
  const pins = DATA.map((d) => {
    const g = new THREE.Group();
    const pos = latLon(d.lat, d.lon, R);
    g.position.copy(pos);
    const n = pos.clone().normalize();
    g.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), n);
    const mat = new THREE.MeshBasicMaterial({ color: d.now ? ACCENT : (isDark() ? 0xffffff : 0x1a1a1a) });
    const dot = new THREE.Mesh(dotGeo, mat); dot.position.z = 0.004;
    const out = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: isDark() ? 0x262626 : 0xfafaf8 })); out.position.z = 0.0035;
    const hit = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), new THREE.MeshBasicMaterial({ visible: false }));
    dot.userData.d = d; hit.userData.d = d;
    g.add(out, dot, hit);
    pinGroup.add(g);
    pickables.push(hit);
    const tag = document.createElement('span'); tag.className = 'gtag'; tag.textContent = d.short || d.org; labelLayer.appendChild(tag);
    Object.assign(d, { group: g, dot, out, mat, tag, pos, n, t: 0 });
    return d;
  });

  // ---------- dashed arcs between chapters ----------
  const arcs = [];
  for (let i = 0; i < DATA.length - 1; i++) {
    const a = DATA[i].pos, b = DATA[i + 1].pos;
    const ang = a.angleTo(b);
    const mid = a.clone().add(b).normalize().multiplyScalar(R * (1 + 0.06 + ang * 0.18));
    const curve = new THREE.QuadraticBezierCurve3(a.clone().multiplyScalar(1.006), mid, b.clone().multiplyScalar(1.006));
    const pts = curve.getPoints(80);
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    const line = new THREE.Line(geo, new THREE.LineDashedMaterial({ color: isDark() ? 0xffffff : INK, dashSize: 0.022, gapSize: 0.016, transparent: true, opacity: 0.55 }));
    line.computeLineDistances();
    line.geometry.setDrawRange(0, 0);
    scene.add(line); arcs.push(line);
  }

  // ---------- intro / replay ----------
  let tl = null;
  function setFinal() {
    pins.forEach((d) => { d.group.scale.set(1, 1, 1); d.t = 1; });
    arcs.forEach((l) => l.geometry.setDrawRange(0, 81));
    requestRender();
  }
  function play() {
    if (tl) tl.kill();
    if (reduce) { setFinal(); return; }
    pins.forEach((d) => { d.group.scale.set(0.001, 0.001, 0.001); d.t = 0; });
    arcs.forEach((l) => l.geometry.setDrawRange(0, 0));
    tl = gsap.timeline({ onUpdate: requestRender });
    let t = 0.3;
    pins.forEach((d, i) => {
      tl.to(d.group.scale, { x: 1, y: 1, z: 1, duration: 0.45, ease: 'back.out(2)' }, t);
      tl.to(d, { t: 1, duration: 0.3 }, t + 0.15);
      if (i < arcs.length) { const o = { n: 0 }; tl.to(o, { n: 81, duration: 0.5, ease: 'power2.inOut', onUpdate: () => arcs[i].geometry.setDrawRange(0, Math.round(o.n)) }, t + 0.2); }
      t += 0.45;
    });
  }

  // ---------- hover / click ----------
  const ray = new THREE.Raycaster(); const ndc = new THREE.Vector2();
  let hovered = null, selected = null, down = null, dragging = false, idleTimer = 0;
  const tmp = new THREE.Vector3();
  function toNDC(e) { const r = renderer.domElement.getBoundingClientRect(); ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1); }
  function pick(e) {
    toNDC(e); ray.setFromCamera(ndc, camera);
    const hits = ray.intersectObjects(pickables.concat([globe]), false);
    const first = hits[0];
    return first && first.object !== globe ? first.object.userData.d : null;
  }
  const acc = new THREE.Color(ACCENT);
  function light(d) { d.tag.classList.add('on'); gsap.to(d.dot.scale, { x: 1.7, y: 1.7, z: 1.7, duration: 0.25, ease: 'power3.out', onUpdate: requestRender }); gsap.to(d.out.scale, { x: 1.7, y: 1.7, z: 1.7, duration: 0.25, onUpdate: requestRender }); if (!d.now) gsap.to(d.mat.color, { r: acc.r, g: acc.g, b: acc.b, duration: 0.25, onUpdate: requestRender }); }
  function unlight(d) { d.tag.classList.remove('on'); const c = new THREE.Color(isDark() ? 0xffffff : 0x1a1a1a); gsap.to(d.dot.scale, { x: 1, y: 1, z: 1, duration: 0.3, ease: 'power3.out', onUpdate: requestRender }); gsap.to(d.out.scale, { x: 1, y: 1, z: 1, duration: 0.3, onUpdate: requestRender }); if (!d.now) gsap.to(d.mat.color, { r: c.r, g: c.g, b: c.b, duration: 0.3, onUpdate: requestRender }); }
  function setHover(d) {
    if (d === hovered) return;
    if (hovered && hovered !== selected) unlight(hovered);
    hovered = d;
    renderer.domElement.style.cursor = d ? 'pointer' : 'grab';
    steps.forEach((s, i) => s.classList.toggle('hot', !!d && i === d.step));
    if (d) { light(d); showTip(d); } else hideTip();
    requestRender();
  }
  function showTip(d) { tip.innerHTML = '<b>' + esc(d.city) + '</b><span>' + esc(d.role) + ' · ' + esc(d.years) + '</span>'; stage.classList.add('tipon'); placeTip(d); }
  function placeTip(d) {
    tmp.copy(d.pos).multiplyScalar(1.03).project(camera);
    const r = renderer.domElement.getBoundingClientRect();
    tip.style.left = ((tmp.x + 1) / 2 * r.width) + 'px'; tip.style.top = ((1 - tmp.y) / 2 * r.height) + 'px';
  }
  function hideTip() { stage.classList.remove('tipon'); }
  function esc(s) { return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

  const el = renderer.domElement; el.style.cursor = 'grab';
  function userActive() { controls.autoRotate = false; clearTimeout(idleTimer); idleTimer = setTimeout(() => { if (!selected && !reduce) controls.autoRotate = true; }, 7000); }
  el.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY }; dragging = false; userActive(); });
  el.addEventListener('pointermove', (e) => {
    if (down && Math.hypot(e.clientX - down.x, e.clientY - down.y) > 5) dragging = true;
    if (dragging) { if (hovered) setHover(null); return; }
    if (e.pointerType === 'mouse') setHover(pick(e));
  });
  el.addEventListener('pointerup', (e) => { const was = dragging; down = null; dragging = false; if (was) return; const d = pick(e); if (d) select(d); else if (selected) deselect(); });
  el.addEventListener('pointerleave', () => { if (!dragging) setHover(null); });
  el.addEventListener('wheel', userActive, { passive: true });

  // ---------- selection: turn globe + show polaroid ----------
  function select(d) {
    if (selected && selected !== d) unlight(selected);
    selected = d; light(d); hideTip();
    controls.autoRotate = false;
    const dist = Math.min(Math.max(camera.position.length(), 3.6), 4.0);
    const target = d.n.clone();
    const wide = stage.clientWidth > 480;
    if (wide) { const right = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), target).normalize(); target.add(right.multiplyScalar(0.3)).normalize(); }
    flyTo(target.multiplyScalar(dist), 0.9);
    openCard(d);
  }
  function deselect() { if (selected) unlight(selected); selected = null; closeCard(); userActive(); }
  function flyTo(pos, dur) {
    controls.enabled = false;
    gsap.to(camera.position, { x: pos.x, y: pos.y, z: pos.z, duration: reduce ? 0 : dur, ease: 'power3.inOut', onUpdate: () => { controls.update(); requestRender(); }, onComplete: () => { controls.enabled = true; } });
  }
  function openCard(d) {
    cardCap.textContent = d.org;
    cardSub.textContent = d.role + ' · ' + d.years + ' · ' + d.city;
    card.classList.remove('noimg');
    cardImg.onerror = () => { card.classList.add('noimg'); cardImg.removeAttribute('src'); };
    cardImg.alt = d.org + ', ' + d.city;
    cardImg.src = PHOTO_DIR + d.id + '.jpg';
    card.querySelector('.pol-ph').dataset.initial = d.city.charAt(0);
    card.hidden = false;
    card.style.setProperty('--tilt', ((Math.random() * 6) - 3).toFixed(1) + 'deg');
    requestAnimationFrame(() => { card.classList.add('open'); cardClose.focus({ preventScroll: true }); });
  }
  function closeCard() { card.classList.remove('open'); setTimeout(() => { if (!card.classList.contains('open')) card.hidden = true; }, 280); }
  cardClose.addEventListener('click', deselect);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && selected) deselect(); });
  btnReplay.addEventListener('click', () => { deselect(); flyTo(HOME, 0.8); play(); });

  // ---------- labels: screen-space placement with overlap avoidance ----------
  const camDir = new THREE.Vector3(), pv = new THREE.Vector3();
  const OFFS = [[1, -1], [-1, -1], [1, 1], [-1, 1], [0, -1], [0, 1]];   // candidate anchors: right-up, left-up, right-down, left-down, up, down
  function updateTags() {
    const r = renderer.domElement.getBoundingClientRect(); const W = r.width, H = r.height;
    camDir.copy(camera.position).normalize();
    const items = pins.map((d) => {
      const f = d.n.dot(camDir);
      const vis = THREE.MathUtils.clamp((f - 0.12) / 0.2, 0, 1) * d.t;
      pv.copy(d.pos).multiplyScalar(1.01).project(camera);
      return { d, vis, x: (pv.x + 1) / 2 * W, y: (1 - pv.y) / 2 * H, w: d.tag.offsetWidth || 60, h: d.tag.offsetHeight || 22 };
    });
    // priority: hovered/selected first, then nearest to camera
    items.sort((a, b) => ((b.d === hovered || b.d === selected) - (a.d === hovered || a.d === selected)) || (b.vis - a.vis));
    const placed = [];
    const GAP = 10;
    for (const it of items) {
      const el = it.d.tag;
      if (it.vis <= 0.02) { el.style.opacity = 0; el.style.visibility = 'hidden'; continue; }
      let box = null;
      const pref = it.d.ox < 0 ? (it.d.oy > 0 ? 1 : 3) : (it.d.oy > 0 ? 0 : 2);    // keep the data's preferred side first
      const order = [OFFS[pref]].concat(OFFS.filter((_, i) => i !== pref));
      for (const [sx, sy] of order) {
        const cx = it.x + sx * (it.w / 2 + GAP) + (sx === 0 ? 0 : 0);
        const cy = it.y + sy * (it.h / 2 + GAP);
        const b = { l: cx - it.w / 2, t: cy - it.h / 2, r: cx + it.w / 2, b: cy + it.h / 2 };
        if (b.l < 4 || b.t < 4 || b.r > W - 4 || b.b > H - 4) continue;
        if (!placed.some((p) => !(b.r < p.l || b.l > p.r || b.b < p.t || b.t > p.b))) { box = b; break; }
      }
      if (!box) { el.style.opacity = 0; el.style.visibility = 'hidden'; continue; }   // no free slot → hide rather than overlap
      placed.push(box);
      el.style.transform = 'translate(' + box.l.toFixed(1) + 'px,' + box.t.toFixed(1) + 'px)';
      el.style.opacity = it.vis.toFixed(2); el.style.visibility = 'visible';
    }
  }

  // ---------- theme switch (day / night) ----------
  function applyTheme() {
    const dark = isDark();
    globe.material.color.set(dark ? BG.dark : BG.light);
    pxMat.color.set(dark ? PX.dark : PX.light);
    rim.material.uniforms.k.value = dark ? 0.0 : 0.22;
    arcs.forEach((l) => l.material.color.set(dark ? 0xffffff : INK));
    pins.forEach((d) => { d.out.material.color.set(dark ? 0x262626 : 0xfafaf8); if (!d.now && d !== hovered && d !== selected) d.mat.color.set(dark ? 0xffffff : 0x1a1a1a); });
    requestRender();
  }
  new MutationObserver(applyTheme).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  // ---------- resize / loop ----------
  function resize() { const w = stage.clientWidth, h = stage.clientHeight; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); requestRender(); }
  let needs = true, visible = false;
  function requestRender() { needs = true; }
  function render() { updateTags(); renderer.render(scene, camera); if (hovered) placeTip(hovered); }
  function loop() { requestAnimationFrame(loop); if (!visible) return; const moved = controls.update(); if (moved || needs || controls.autoRotate) { render(); needs = false; } }
  controls.addEventListener('change', requestRender);
  new ResizeObserver(resize).observe(stage); resize();
  const io = new IntersectionObserver((es) => es.forEach((e) => { visible = e.isIntersecting; if (visible && !stage.dataset.played) { stage.dataset.played = '1'; play(); } if (visible) requestRender(); }), { threshold: 0.2 });
  io.observe(stage);
  loop();
  stage.__pinScreen = (id) => { const d = pins.find((p) => p.id === id); if (!d) return null; const v = d.pos.clone().multiplyScalar(1.02).project(camera); const r = renderer.domElement.getBoundingClientRect(); return [r.left + (v.x + 1) / 2 * r.width, r.top + (1 - v.y) / 2 * r.height]; };

  function latLon(lat, lon, r) {
    const phi = THREE.MathUtils.degToRad(90 - lat), theta = THREE.MathUtils.degToRad(lon + 180);
    return new THREE.Vector3(-r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta));
  }
}
