(() => {
  const button = document.querySelector('.home-theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let preference;
  try { preference = localStorage.getItem('theme'); } catch (_) { /* Storage may be disabled. */ }
  const apply = (dark) => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    button.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
    button.setAttribute('aria-pressed', String(dark));
  };
  apply(preference === 'dark' || (preference !== 'light' && systemTheme.matches));
  button.hidden = false;
  button.addEventListener('click', () => {
    const dark = document.documentElement.dataset.theme !== 'dark';
    preference = dark ? 'dark' : 'light';
    try { localStorage.setItem('theme', preference); } catch (_) { /* Keep the in-memory choice. */ }
    apply(dark);
  });
  systemTheme.addEventListener('change', (event) => {
    if (preference !== 'dark' && preference !== 'light') apply(event.matches);
  });
})();
