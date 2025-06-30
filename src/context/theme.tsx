import Theme from '@models/ui/theme';
import StorageKey from '@utils/storage/keys';
import nookies from 'nookies';
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from 'react';

export const ThemeCtx = createContext({
  current: Theme.auto,
  change: (_theme: Theme) => {}
});

export function ThemeProvider({
  initialTheme = Theme.auto,
  children
}: PropsWithChildren<{ initialTheme?: Theme }>) {
  const [theme, setTheme] = useState(initialTheme);

  function handleThemeChange(theme: Theme) {
    const html = document.documentElement;
    html.classList.remove(Theme.auto, Theme.dark, Theme.light);
    html.classList.add(theme);
  }

  useEffect(() => {
    handleThemeChange(theme);

    nookies.set(undefined, StorageKey.theme, theme, {
      maxAge: 30 * 24 * 60 * 60
    });
  }, [theme]);

  return (
    <ThemeCtx.Provider value={{ current: theme, change: setTheme }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export const useTheme = () => useContext(ThemeCtx);
