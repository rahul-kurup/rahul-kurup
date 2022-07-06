enum Theme {
  auto = 'theme-auto',
  dark = 'theme-dark',
  light = 'theme-light'
}

export const themeMap = {
  [Theme.auto]: { icon: '🌓︎', title: 'Auto' },
  [Theme.dark]: { icon: '🌑︎', title: 'Dark' },
  [Theme.light]: { icon: '🌕︎', title: 'Light' }
};

export const themes = Object.values(Theme);

export default Theme;
