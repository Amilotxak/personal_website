document.getElementById('themeToggle').addEventListener('click', function () {
  const currentTheme = document.body.className;
  if (currentTheme === 'dark-theme') {
    document.body.className = 'light-theme';
  } else {
    document.body.className = 'dark-theme';
  }
});
