/* mentions.js : exemple de formulaire de création de compte (démonstration RGPD).
   Rien n'est envoyé : on affiche seulement un message de confirmation. */
(function () {
  const form = document.getElementById('form-compte');
  const message = document.getElementById('form-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Le consentement au traitement des données est obligatoire (case non précochée)
    if (!document.getElementById('c-consentement').checked) {
      message.hidden = false;
      message.className = 'message';
      message.style.background = 'var(--bad-bg)';
      message.style.color = 'var(--bad-ink)';
      message.textContent = 'Pour créer un compte, vous devez accepter le traitement de vos données personnelles.';
      return;
    }
    message.hidden = false;
    message.className = 'message';
    message.style.background = '';
    message.style.color = '';
    message.textContent = 'Maquette : aucune donnée n\'a été envoyée ni enregistrée.';
  });
})();
