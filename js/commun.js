/* commun.js : fonctions partagées par les trois pages.
   Elles lisent les données fictives de donnees.js (window.DONNEES)
   et les exposent dans un objet unique : window.Vertigo. */
(function () {
  const D = window.DONNEES;
  const SEUIL = D.meta.seuil_stock_faible;

  // Index pour retrouver rapidement une catégorie, un magasin ou les stocks d'un article
  const categories = new Map(D.categories.map(function (c) { return [c.id, c]; }));
  const magasins = new Map(D.magasins.map(function (m) { return [m.id, m]; }));
  const stocksParArticle = new Map();
  D.stocks.forEach(function (s) {
    if (!stocksParArticle.has(s.article_id)) stocksParArticle.set(s.article_id, []);
    stocksParArticle.get(s.article_id).push(s);
  });

  function formatPrix(n) {
    return n.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
  }

  // "2026-11-03T18:45:00" -> "18h45"
  function formatHeure(iso) {
    const d = new Date(iso);
    return String(d.getHours()).padStart(2, '0') + 'h' + String(d.getMinutes()).padStart(2, '0');
  }

  // Passe en minuscules et retire les accents (pour que "velocite" trouve "Vélocité")
  function sansAccent(texte) {
    return texte.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  }

  // Transforme une quantité en statut : rupture, stock faible ou en stock
  function statut(qte) {
    if (qte <= 0) return { code: 'rupture', libelle: 'Rupture de stock' };
    if (qte <= SEUIL) return { code: 'faible', libelle: 'Stock faible (' + qte + ' restant' + (qte > 1 ? 's' : '') + ')' };
    return { code: 'ok', libelle: 'En stock (' + qte + ')' };
  }

  // Crée un élément HTML sans jamais injecter de texte brut (protection contre les failles XSS)
  function h(tag, props) {
    const el = document.createElement(tag);
    Object.keys(props || {}).forEach(function (k) {
      const v = props[k];
      if (v === null || v === undefined || v === false) return;
      if (k === 'class') el.className = v;
      else el.setAttribute(k, v === true ? '' : v);
    });
    Array.prototype.slice.call(arguments, 2).flat().forEach(function (enfant) {
      if (enfant !== null && enfant !== undefined && enfant !== false) el.append(enfant);
    });
    return el;
  }

  // Mémorise le magasin choisi (le navigateur peut refuser : on ignore l'erreur)
  function lireMagasin() {
    try { return localStorage.getItem('vertigo-magasin') || ''; } catch (e) { return ''; }
  }
  function ecrireMagasin(valeur) {
    try { localStorage.setItem('vertigo-magasin', valeur); } catch (e) { /* sans effet */ }
  }

  // Résumé d'un article : pour un magasin précis, ou pour l'ensemble des magasins
  function resume(articleId, magasinId) {
    const stocks = stocksParArticle.get(articleId) || [];
    if (magasinId) {
      const s = stocks.find(function (x) { return x.magasin_id === magasinId; });
      const qte = s ? s.quantite : 0;
      return { mode: 'magasin', stocks: stocks, qte: qte, prix: s ? s.prix : null, statut: statut(qte), maj: s ? s.maj_le : null };
    }
    const dispo = stocks.filter(function (s) { return s.quantite > 0; });
    const prix = (dispo.length ? dispo : stocks).map(function (s) { return s.prix; });
    return {
      mode: 'tous', stocks: stocks, nbDispo: dispo.length, nbMagasins: stocks.length,
      qte: stocks.reduce(function (t, s) { return t + s.quantite; }, 0),
      prixMin: Math.min.apply(null, prix), prixMax: Math.max.apply(null, prix)
    };
  }

  // Heure de la dernière synchronisation (pour un magasin, ou la plus récente de tous)
  function derniereMaj(magasinId) {
    const liste = D.stocks.filter(function (s) { return !magasinId || s.magasin_id === magasinId; });
    return liste.map(function (s) { return s.maj_le; }).sort().pop();
  }

  // Remplit une liste déroulante avec les 6 magasins (la première option sert de valeur par défaut)
  function remplirMagasins(select, libelleTous) {
    select.append(h('option', { value: '' }, libelleTous));
    D.magasins.forEach(function (m) { select.append(h('option', { value: String(m.id) }, m.ville)); });
  }

  window.Vertigo = {
    D: D, categories: categories, magasins: magasins, stocksParArticle: stocksParArticle,
    formatPrix: formatPrix, formatHeure: formatHeure, sansAccent: sansAccent, statut: statut,
    h: h, lireMagasin: lireMagasin, ecrireMagasin: ecrireMagasin, resume: resume,
    derniereMaj: derniereMaj, remplirMagasins: remplirMagasins
  };
})();
