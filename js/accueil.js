/* accueil.js : remplit les blocs dynamiques de la page d'accueil. */
(function () {
  const V = window.Vertigo;
  const h = V.h;

  // Liste déroulante du formulaire de recherche (magasin mémorisé présélectionné)
  const select = document.getElementById('hero-magasin');
  V.remplirMagasins(select, 'Tous les magasins');
  select.value = V.lireMagasin();

  // Ligne d'information sous le formulaire
  const nbArticles = V.D.articles.filter(function (a) { return a.actif; }).length;
  document.getElementById('hero-info').textContent =
    V.D.magasins.length + ' magasins, ' + nbArticles + ' articles de démonstration. Stocks mis à jour à ' +
    V.formatHeure(V.derniereMaj()) + ' (synchronisation toutes les ' + V.D.meta.frequence_synchronisation_minutes + ' minutes).';

  // Texte de disponibilité d'un article sur l'ensemble des magasins
  function badgeDispo(r) {
    if (r.nbDispo === 0) return h('span', { class: 'badge badge-rupture' }, 'Indisponible dans les ' + r.nbMagasins + ' magasins');
    const code = r.nbDispo <= 2 ? 'faible' : 'ok';
    return h('span', { class: 'badge badge-' + code }, 'Disponible dans ' + r.nbDispo + ' magasin' + (r.nbDispo > 1 ? 's' : '') + ' sur ' + r.nbMagasins);
  }
  function prixDes(r) {
    return r.prixMin === r.prixMax ? V.formatPrix(r.prixMin) : [h('span', { class: 'des' }, 'dès'), V.formatPrix(r.prixMin)];
  }

  // Disponibilités du moment : 4 articles mis en avant
  const alaUne = document.getElementById('a-la-une');
  [1, 2, 7, 12].forEach(function (id) {
    const a = V.D.articles.find(function (x) { return x.id === id; });
    const r = V.resume(id, 0);
    alaUne.append(
      h('article', { class: 'fiche' },
        h('p', { class: 'petit' }, V.categories.get(a.categorie_id).nom),
        h('h3', {}, a.nom),
        h('p', { class: 'carte-prix' }, prixDes(r)),
        h('p', {}, badgeDispo(r)),
        h('p', { class: 'bas' }, h('a', { href: 'catalogue.html?q=' + encodeURIComponent(a.nom) }, 'Voir la disponibilité par magasin'))
      )
    );
  });

  // Nos magasins
  const liste = document.getElementById('liste-magasins');
  V.D.magasins.forEach(function (m) {
    liste.append(
      h('article', { class: 'fiche' },
        h('h3', {}, m.ville),
        h('address', {}, m.adresse, h('br'), m.code_postal + ' ' + m.ville),
        h('p', { class: 'petit' }, m.horaires),
        h('p', { class: 'petit' }, 'Tél. ' + m.telephone),
        h('p', { class: 'bas' }, h('a', { href: 'catalogue.html?magasin=' + m.id }, 'Voir le stock de ce magasin'))
      )
    );
  });

  // Matériel à louer (articles marqués "louables")
  const location = document.getElementById('liste-location');
  V.D.articles.filter(function (a) { return a.est_louable; }).forEach(function (a) {
    const r = V.resume(a.id, 0);
    location.append(
      h('article', { class: 'fiche' },
        h('span', { class: 'badge badge-info' }, 'Louable'),
        h('h3', {}, a.nom),
        h('p', { class: 'petit' }, a.description),
        h('p', {}, badgeDispo(r))
      )
    );
  });
})();
