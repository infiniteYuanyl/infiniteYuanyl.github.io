(() => {
  const button = document.querySelector('.home-theme');
  let preference;
  try { preference = localStorage.getItem('theme'); } catch (_) { /* Storage may be disabled. */ }
  const apply = (dark) => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    button.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
    button.setAttribute('aria-pressed', String(dark));
  };
  // Default to dark unless the visitor has explicitly chosen light.
  apply(preference !== 'light');
  button.hidden = false;
  button.addEventListener('click', () => {
    const dark = document.documentElement.dataset.theme !== 'dark';
    preference = dark ? 'dark' : 'light';
    try { localStorage.setItem('theme', preference); } catch (_) { /* Keep the in-memory choice. */ }
    apply(dark);
  });
})();
