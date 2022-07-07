import Theme from '@models/ui/theme';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

export const ThemeCtx = createContext({
  current: Theme.auto,
  change: (_theme: Theme) => {}
});

export function ThemeProvider({ children }: PropsWithChildren<{}>) {
  const [theme, setTheme] = useState(Theme.auto);

  return (
    <ThemeCtx.Provider value={{ current: theme, change: setTheme }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export const useTheme = () => useContext(ThemeCtx);
