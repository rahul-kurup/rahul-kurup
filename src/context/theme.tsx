import Theme from '@models/ui/theme';
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from 'react';
import { getProperThemeValue, setThemeCookie } from '@utils/theme';

export const ThemeCtx = createContext({
  current: Theme.auto,
  change: (_theme: Theme) => {}
});

export function ThemeProvider({
  initialTheme = Theme.auto,
  children
}: PropsWithChildren<{ initialTheme?: Theme }>) {
  const [theme, setTheme] = useState(getProperThemeValue(initialTheme));

  function handleThemeChange(theme: Theme) {
    const html = document.documentElement;
    html.classList.remove(Theme.auto, Theme.dark, Theme.light);
    html.classList.add(theme);
  }

  useEffect(() => {
    const _theme = getProperThemeValue(theme);
    handleThemeChange(_theme);
    setThemeCookie(_theme);
  }, [theme]);

  return (
    <ThemeCtx.Provider value={{ current: theme, change: setTheme }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export const useTheme = () => useContext(ThemeCtx);