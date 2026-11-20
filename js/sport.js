/* sport.js : ambiance sportive de la maquette (scènes animées, rayons, compteurs).
   Tout est dessiné en SVG intégré : aucune image externe n'est nécessaire.
   Pour utiliser de vraies photos : voir LISEZMOI.txt (dossier img/). */
(function () {
  const reduit = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const NS = 'http://www.w3.org/2000/svg';

  /* ---------- Bibliothèque d'icônes de sport (viewBox 48x48) ---------- */
  const ICONES = {
    1: '<path d="M6 32c8 0 10-6 14-6l6 5c4 3 14 1 16 6H6z"/><path d="M20 26l-2-8M26 31l-2-9M12 30l-1-6"/>',                       // Running : chaussure
    2: '<path d="M4 20v8M9 15v18M39 15v18M44 20v8M9 24h30"/>',                                                                           // Fitness : haltère
    3: '<circle cx="24" cy="24" r="17"/><path d="M7 24h34M24 7v34M11 12c8 6 8 18 0 24M37 12c-8 6-8 18 0 24"/>',                          // Sports collectifs : ballon
    4: '<path d="M3 40 18 14l7 12 5-7 15 21z"/><path d="M14 22l4 5 3-4"/>'                                                               // Outdoor : montagne
  };
  const svgIcone = (id) => '<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONES[id] || ICONES[3]) + '</svg>';

  const ICONE_SCENE = [1, 4, 3, 2]; // Running, Outdoor, Collectifs, Fitness

  /* ---------- Les 4 scènes du héros ---------- */
  const SCENES = [
    { sport: 'Running', titre: 'Chaque kilomètre commence ici', svg:
      '<defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1b2a6b"/><stop offset=".55" stop-color="#c2417a"/><stop offset="1" stop-color="#ff8a3d"/></linearGradient></defs>' +
      '<rect width="1200" height="500" fill="url(#g1)"/>' +
      '<circle cx="980" cy="260" r="95" fill="#ffd27a" opacity=".95"><animate attributeName="r" values="95;103;95" dur="4s" repeatCount="indefinite"/></circle>' +
      '<path class="derive-l" d="M0 330c150-60 260-40 400 0s260 30 420-20 260-10 380 20v170H0z" fill="#3a1f5c" opacity=".8"/>' +
      '<path d="M0 380c200-50 380-20 560 10s420 20 640-30v140H0z" fill="#1d1537"/>' +
      '<path d="M0 430h1200v70H0z" fill="#16102b"/><path d="M0 440h1200" stroke="#ff8a3d" stroke-width="3" stroke-dasharray="60 40" class="piste"/>' +
      '<g stroke="#fff" stroke-opacity=".55" stroke-width="3" stroke-linecap="round"><path d="M560 300h-90" class="trait"/><path d="M580 340h-130" class="trait t2"/><path d="M570 380h-70" class="trait t3"/></g>' +
      coureur(920, 150) },
    { sport: 'Outdoor', titre: 'Louez le matériel, partez à l\'aventure', svg:
      '<defs><linearGradient id="g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0a1a3c"/><stop offset=".6" stop-color="#2d6a8f"/><stop offset="1" stop-color="#f3b27a"/></linearGradient></defs>' +
      '<rect width="1200" height="500" fill="url(#g2)"/>' +
      etoiles() +
      '<g class="nuage" fill="#fff" opacity=".25"><ellipse cx="300" cy="110" rx="110" ry="22"/><ellipse cx="370" cy="95" rx="70" ry="18"/></g>' +
      '<g class="nuage n2" fill="#fff" opacity=".2"><ellipse cx="800" cy="170" rx="130" ry="24"/></g>' +
      '<path d="M380 400 640 140l130 150 110-90 280 200z" fill="#1e3355"/><path d="M640 140l-48 50 30-14 22 24 24-26 28 18z" fill="#fff" opacity=".9"/>' +
      '<path d="M0 420c200-90 360-70 520-10s420 40 680-50v140H0z" fill="#12233f"/>' +
      '<g fill="#0b1830"><path d="M120 460l30-110 30 110zM165 460l24-86 24 86zM1010 470l30-120 30 120z"/></g>' +
      '<g transform="translate(900 330)"><path d="M-70 60 0-40l70 100z" fill="#ff5a1f"/><path d="M0-40 18 60H-18z" fill="#7a2208"/><circle cx="0" cy="58" r="70" fill="#ffc46b" opacity=".25"><animate attributeName="opacity" values=".15;.4;.15" dur="2.4s" repeatCount="indefinite"/></circle></g>' },
    { sport: 'Sports collectifs', titre: 'Foot, basket, hand : équipez toute l\'équipe', svg:
      '<defs><linearGradient id="g3" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0e2a55"/><stop offset="1" stop-color="#0a6b53"/></linearGradient></defs>' +
      '<rect width="1200" height="500" fill="url(#g3)"/>' +
      '<g stroke="#fff" stroke-opacity=".3" stroke-width="4" fill="none"><circle cx="760" cy="520" r="150"/><path d="M0 420h1200M760 370v130"/></g>' +
      '<g transform="translate(1040 40)"><rect x="-6" y="0" width="12" height="260" fill="#cfd8e6"/><rect x="-90" y="-4" width="100" height="70" rx="4" fill="#fff" opacity=".9"/><rect x="-60" y="20" width="40" height="30" fill="none" stroke="#ff5a1f" stroke-width="4"/><path d="M-84 66h60l-8 40h-44z" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="4 5"/></g>' +
      '<ellipse cx="930" cy="350" rx="60" ry="10" fill="#000" opacity=".35"><animate attributeName="rx" values="60;30;60" dur="1.1s" repeatCount="indefinite"/></ellipse>' +
      '<g><circle cx="930" cy="0" r="52" fill="#ff7a2f" stroke="#7a2208" stroke-width="4"/><path d="M878 0h104M930-52v104M896-36c24 22 24 52 0 72M964-36c-24 22-24 52 0 72" stroke="#7a2208" stroke-width="4" fill="none"/>' +
      '<animateTransform attributeName="transform" type="translate" values="0 300;0 120;0 300" keyTimes="0;.5;1" calcMode="spline" keySplines=".25 .6 .4 1;.6 0 .75 .4" dur="1.1s" repeatCount="indefinite"/></g>' },
    { sport: 'Fitness', titre: 'Reprenez le sport, à votre rythme', svg:
      '<defs><linearGradient id="g4" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#150f33"/><stop offset="1" stop-color="#6a1b6b"/></linearGradient></defs>' +
      '<rect width="1200" height="500" fill="url(#g4)"/>' +
      '<g fill="none" stroke="#ff5a1f" stroke-opacity=".5" stroke-width="3"><circle cx="910" cy="250" r="120" class="onde"/><circle cx="910" cy="250" r="120" class="onde o2"/></g>' +
      '<g><rect x="600" y="248" width="360" height="12" rx="6" fill="#d7dde8"/><g fill="#2a3350" stroke="#fff" stroke-opacity=".6" stroke-width="3"><rect x="620" y="200" width="26" height="108" rx="6"/><rect x="654" y="218" width="18" height="72" rx="5"/><rect x="914" y="200" width="26" height="108" rx="6"/><rect x="888" y="218" width="18" height="72" rx="5"/></g>' +
      '<animateTransform attributeName="transform" type="translate" values="40 10;40 -60;40 10" dur="2.2s" calcMode="spline" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1" repeatCount="indefinite"/></g>' +
      '<polyline class="ecg" points="0,430 300,430 340,430 360,380 390,470 420,400 440,430 760,430 800,430 820,370 850,480 880,410 900,430 1200,430" fill="none" stroke="#ff5a1f" stroke-width="5" stroke-linejoin="round"/>' }
  ];

  function etoiles() {
    let s = '<g fill="#fff">';
    for (let i = 0; i < 26; i++) {
      const x = (i * 197) % 1200, y = (i * 83) % 230 + 10;
      s += '<circle cx="' + x + '" cy="' + y + '" r="' + (1 + (i % 3) * .7) + '"><animate attributeName="opacity" values=".2;1;.2" dur="' + (2 + (i % 5) * .6) + 's" begin="-' + (i % 4) + 's" repeatCount="indefinite"/></circle>';
    }
    return s + '</g>';
  }
  // Coureur stylisé : membres animés en SMIL (rotation autour de l'épaule / de la hanche)
  function coureur(x, y) {
    const rot = (cx, cy, a, d, delay) => '<animateTransform attributeName="transform" type="rotate" values="' + a + ' ' + cx + ' ' + cy + ';' + (-a) + ' ' + cx + ' ' + cy + ';' + a + ' ' + cx + ' ' + cy + '" dur="' + d + 's" begin="' + delay + 's" repeatCount="indefinite"/>';
    const ln = 'stroke="#0a0f1e" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" fill="none"';
    return '<g transform="translate(' + x + ' ' + y + ')"><g>' +
      '<animateTransform attributeName="transform" type="translate" values="0 0;0 -8;0 0" dur=".7s" repeatCount="indefinite"/>' +
      '<circle cx="14" cy="-62" r="17" fill="#0a0f1e"/>' +
      '<path d="M8-40 -4 22" ' + ln + '/>' +
      '<path d="M-4 22l6 55 -4 55" ' + ln + '>' + rot(-4, 22, 38, .7, 0) + '</path>' +
      '<path d="M-4 22l-6 55 10 50" ' + ln + '>' + rot(-4, 22, 38, .7, -.35) + '</path>' +
      '<path d="M8-34l-22 34 18 22" ' + ln + '>' + rot(8, -34, 40, .7, -.35) + '</path>' +
      '<path d="M8-34l24 30-8 30" ' + ln + '>' + rot(8, -34, 40, .7, 0) + '</path></g></g>';
  }

  /* ---------- Héros : carrousel de scènes ---------- */
  function initHero() {
    const zone = document.querySelector('.hero-scenes');
    if (!zone) return;
    const dots = document.createElement('div'); dots.className = 'hero-points';
    const chip = document.getElementById('hero-chip');
    const slides = SCENES.map(function (s, i) {
      const d = document.createElement('div');
      d.className = 'scene' + (i === 0 ? ' actif' : '');
      d.innerHTML = '<svg viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration : ' + s.sport + '">' + s.svg + '</svg>';
      zone.append(d);
      const b = document.createElement('button');
      b.type = 'button'; b.setAttribute('aria-label', s.sport); b.addEventListener('click', function () { aller(i, true); });
      dots.append(b);
      return d;
    });
    zone.after(dots);
    let cur = 0, timer;
    function aller(i, manuel) {
      slides[cur].classList.remove('actif'); dots.children[cur].classList.remove('on');
      cur = (i + slides.length) % slides.length;
      slides[cur].classList.add('actif'); dots.children[cur].classList.add('on');
      if (chip) chip.innerHTML = svgIcone(ICONE_SCENE[cur]) + '<span>' + SCENES[cur].sport + '</span><em>' + SCENES[cur].titre + '</em>';
      if (manuel) { clearInterval(timer); depart(); }
    }
    function depart() { if (!reduit) timer = setInterval(function () { aller(cur + 1); }, 5500); }
    aller(0); depart();
    if (reduit) zone.querySelectorAll('svg').forEach(function (s) { if (s.pauseAnimations) s.pauseAnimations(); });
  }

  /* ---------- Rayons (cartes sport) et bandeau défilant ---------- */
  function initRayons() {
    const V = window.Vertigo; if (!V) return;
    const grille = document.getElementById('rayons');
    const COUL = { 1: '#ff5a1f', 2: '#c026d3', 3: '#0ea5a4', 4: '#2563eb' };
    const DESC = { 1: 'Chaussures, textile, montres', 2: 'Haltères, tapis, accessoires', 3: 'Ballons, protections, tenues', 4: 'Tentes, randonnée, location' };
    if (grille) V.D.categories.forEach(function (c) {
      const a = document.createElement('a');
      a.className = 'rayon reveal'; a.href = 'catalogue.html?categorie=' + c.id;
      a.style.setProperty('--c', COUL[c.id] || '#ff5a1f');
      const nb = V.D.articles.filter(function (x) { return x.actif && x.categorie_id === c.id; }).length;
      a.innerHTML = '<span class="rayon-ico">' + svgIcone(c.id) + '</span><strong>' + c.nom + '</strong><span>' + (DESC[c.id] || '') + '</span><small>' + nb + ' articles</small>';
      grille.append(a);
    });
    const ticker = document.getElementById('ticker');
    if (ticker) {
      const mots = ['Running', 'Fitness', 'Sports collectifs', 'Outdoor', 'Location', 'Trail', 'Football', 'Basket', 'Randonnée', 'Musculation'];
      const ligne = mots.map(function (m) { return '<span>' + m + '</span>'; }).join('');
      ticker.innerHTML = '<div class="ticker-piste">' + ligne + ligne + '</div>';
    }
  }

  /* ---------- Chiffres clés animés ---------- */
  function initChiffres() {
    const V = window.Vertigo;
    const els = document.querySelectorAll('[data-compte]'); if (!els.length || !V) return;
    const val = { magasins: V.D.magasins.length, articles: V.D.articles.filter(function (a) { return a.actif; }).length, minutes: V.D.meta.frequence_synchronisation_minutes, rayons: V.D.categories.length };
    const io = new IntersectionObserver(function (ents) {
      ents.forEach(function (e) {
        if (!e.isIntersecting) return; io.unobserve(e.target);
        const cible = val[e.target.dataset.compte] || 0, t0 = performance.now();
        (function pas(t) {
          const k = reduit ? 1 : Math.min((t - t0) / 1200, 1);
          e.target.textContent = Math.round(cible * (1 - Math.pow(1 - k, 3)));
          if (k < 1) requestAnimationFrame(pas);
        })(t0);
      });
    }, { threshold: .4 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- Apparition au défilement ---------- */
  function initReveal() {
    const cibles = document.querySelectorAll('.section-tete, .rayon, .stat, .blog-carte');
    cibles.forEach(function (e) { e.classList.add('reveal'); });
    if (reduit || !('IntersectionObserver' in window)) { cibles.forEach(function (e) { e.classList.add('vu'); }); return; }
    const io = new IntersectionObserver(function (ents) {
      ents.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('vu'); io.unobserve(e.target); } });
    }, { threshold: .15 });
    document.querySelectorAll('.reveal').forEach(function (e) { io.observe(e); });
    // Cartes ajoutées après coup (articles du catalogue, magasins)
    new MutationObserver(function (m) {
      m.forEach(function (r) { r.addedNodes.forEach(function (n) { if (n.classList && n.classList.contains('fiche')) { n.classList.add('reveal'); io.observe(n); } }); });
    }).observe(document.getElementById('contenu'), { childList: true, subtree: true });
  }

  /* ---------- Bandeau sportif des pages Catalogue et Mentions ---------- */
  function initBandeau() {
    const b = document.querySelector('.bandeau-sport'); if (!b) return;
    b.innerHTML = '<div class="bs-piste"><i></i><i></i><i></i></div><div class="bs-icones">' + [1, 3, 2, 4].map(svgIcone).join('') + '</div>';
  }

  function init() { initHero(); initRayons(); initChiffres(); initReveal(); initBandeau(); }
  // accueil.js / catalogue.js s'exécutent avant : window.Vertigo est prêt
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
