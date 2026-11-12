/* catalogue.js : filtres, tri et affichage dynamique des articles.
   À chaque changement d'un filtre, la liste des cartes est reconstruite
   à partir des données (donnees.js). */
(function () {
  const V = window.Vertigo;
  const h = V.h;

  const champ = {
    q: document.getElementById('f-recherche'),
    magasin: document.getElementById('f-magasin'),
    categorie: document.getElementById('f-categorie'),
    louable: document.getElementById('f-louable'),
    dispo: document.getElementById('f-dispo'),
    tri: document.getElementById('f-tri')
  };
  const zoneCartes = document.getElementById('resultats');
  const compteur = document.getElementById('compteur');
  const infoSync = document.getElementById('sync-info');

  // Remplissage des listes déroulantes
  V.remplirMagasins(champ.magasin, 'Tous les magasins');
  champ.categorie.append(h('option', { value: '' }, 'Toutes les catégories'));
  V.D.categories.forEach(function (c) { champ.categorie.append(h('option', { value: String(c.id) }, c.nom)); });

  // Valeurs de départ : paramètres de l'adresse (?q=...&magasin=2) ou magasin mémorisé
  const params = new URLSearchParams(location.search);
  champ.q.value = params.get('q') || '';
  champ.magasin.value = params.get('magasin') || V.lireMagasin();
  champ.categorie.value = params.get('categorie') || '';
  champ.louable.checked = params.get('louable') === '1';

  function lireEtat() {
    return {
      q: V.sansAccent(champ.q.value.trim()),
      magasin: Number(champ.magasin.value) || 0,
      categorie: Number(champ.categorie.value) || 0,
      louable: champ.louable.checked,
      dispo: champ.dispo.checked,
      tri: champ.tri.value
    };
  }

  // Valeurs utilisées pour le prix, le tri et le filtre de disponibilité
  function prixAffiche(r) { return r.mode === 'magasin' ? (r.prix === null ? Infinity : r.prix) : r.prixMin; }
  function estDispo(r) { return r.mode === 'magasin' ? r.qte > 0 : r.nbDispo > 0; }
  function poidsDispo(r) { return r.mode === 'magasin' ? r.qte : r.nbDispo * 1000 + r.qte; }

  function badgeStatut(r) {
    if (r.mode === 'magasin') return h('span', { class: 'badge badge-' + r.statut.code }, r.statut.libelle);
    if (r.nbDispo === 0) return h('span', { class: 'badge badge-rupture' }, 'Indisponible dans les ' + r.nbMagasins + ' magasins');
    const code = r.nbDispo <= 2 ? 'faible' : 'ok';
    return h('span', { class: 'badge badge-' + code }, 'Disponible dans ' + r.nbDispo + ' magasin' + (r.nbDispo > 1 ? 's' : '') + ' sur ' + r.nbMagasins);
  }

  function textePrix(r) {
    if (r.mode === 'magasin') return r.prix === null ? '-' : V.formatPrix(r.prix);
    return r.prixMin === r.prixMax ? V.formatPrix(r.prixMin) : [h('span', { class: 'des' }, 'dès'), V.formatPrix(r.prixMin)];
  }

  // Tableau "disponibilité par magasin" (replié dans la carte)
  function tableauMagasins(r, magasinChoisi) {
    const lignes = r.stocks.slice().sort(function (a, b) { return a.magasin_id - b.magasin_id; }).map(function (s) {
      const st = V.statut(s.quantite);
      return h('tr', { class: s.magasin_id === magasinChoisi ? 'choisi' : null },
        h('td', {}, V.magasins.get(s.magasin_id).ville),
        h('td', {}, V.formatPrix(s.prix)),
        h('td', {}, h('span', { class: 'badge badge-' + st.code }, st.libelle)),
        h('td', {}, V.formatHeure(s.maj_le))
      );
    });
    return h('div', { class: 'tableau-defile' },
      h('table', {},
        h('caption', { class: 'sr-only' }, 'Prix et stock de l\'article dans chaque magasin'),
        h('thead', {}, h('tr', {}, h('th', { scope: 'col' }, 'Magasin'), h('th', { scope: 'col' }, 'Prix'), h('th', { scope: 'col' }, 'Stock'), h('th', { scope: 'col' }, 'Mis à jour'))),
        h('tbody', {}, lignes)
      )
    );
  }

  function carte(a, r, magasinChoisi) {
    return h('article', { class: 'carte' },
      h('div', { class: 'carte-visuel', 'aria-hidden': 'true' }, h('span', { class: 'carte-marque' }, a.marque)),
      h('div', { class: 'carte-corps' },
        h('p', { class: 'carte-meta' }, V.categories.get(a.categorie_id).nom + (a.est_louable ? ' · Louable' : '')),
        h('h3', {}, a.nom),
        h('p', { class: 'carte-desc' }, a.description),
        h('p', { class: 'carte-prix' }, textePrix(r)),
        h('p', {}, badgeStatut(r)),
        h('details', { class: 'dispo' }, h('summary', {}, 'Disponibilité par magasin'), tableauMagasins(r, magasinChoisi)),
        h('p', { class: 'carte-ref' }, 'Réf. GESTOCK ' + a.reference_gestock)
      )
    );
  }

  function afficher() {
    const etat = lireEtat();

    // 1. On associe chaque article à son résumé de stock, puis on filtre
    let lignes = V.D.articles
      .filter(function (a) { return a.actif; })
      .map(function (a) { return { a: a, r: V.resume(a.id, etat.magasin) }; })
      .filter(function (l) {
        const texte = V.sansAccent(l.a.nom + ' ' + l.a.marque + ' ' + l.a.description);
        if (etat.q && texte.indexOf(etat.q) === -1) return false;
        if (etat.categorie && l.a.categorie_id !== etat.categorie) return false;
        if (etat.louable && !l.a.est_louable) return false;
        if (etat.dispo && !estDispo(l.r)) return false;
        return true;
      });

    // 2. Tri
    lignes.sort(function (x, y) {
      if (etat.tri === 'prix-asc') return prixAffiche(x.r) - prixAffiche(y.r);
      if (etat.tri === 'prix-desc') return prixAffiche(y.r) - prixAffiche(x.r);
      if (etat.tri === 'dispo') return poidsDispo(y.r) - poidsDispo(x.r);
      return x.a.nom.localeCompare(y.a.nom, 'fr');
    });

    // 3. Affichage
    zoneCartes.replaceChildren();
    if (lignes.length === 0) {
      const bouton = h('button', { type: 'button', class: 'bouton bouton-discret' }, 'Réinitialiser les filtres');
      bouton.addEventListener('click', reinitialiser);
      zoneCartes.append(h('div', { class: 'vide' }, h('p', {}, 'Aucun article ne correspond à votre recherche.'), bouton));
    } else {
      lignes.forEach(function (l) { zoneCartes.append(carte(l.a, l.r, etat.magasin)); });
    }
    compteur.textContent = lignes.length + ' article' + (lignes.length > 1 ? 's' : '');

    // 4. Heure de dernière mise à jour des stocks
    const heure = V.formatHeure(V.derniereMaj(etat.magasin));
    infoSync.textContent = etat.magasin
      ? 'Stocks de Vertigo Sport ' + V.magasins.get(etat.magasin).ville + ', mis à jour à ' + heure + '.'
      : 'Stocks des 6 magasins, dernière mise à jour à ' + heure + '.';
  }

  function reinitialiser() {
    champ.q.value = '';
    champ.magasin.value = '';
    champ.categorie.value = '';
    champ.louable.checked = false;
    champ.dispo.checked = false;
    champ.tri.value = 'nom';
    V.ecrireMagasin('');
    afficher();
  }

  // Le formulaire ne s'envoie pas : tout se fait dans la page
  const form = document.getElementById('filtres');
  form.addEventListener('submit', function (e) { e.preventDefault(); });
  // "input" se déclenche à chaque frappe et à chaque changement de liste ou de case
  form.addEventListener('input', afficher);
  // "change" sert seulement à mémoriser le magasin choisi (sans reconstruire la liste)
  form.addEventListener('change', function (e) {
    if (e.target === champ.magasin) V.ecrireMagasin(champ.magasin.value);
  });
  document.getElementById('f-reset').addEventListener('click', reinitialiser);

  afficher();
})();
