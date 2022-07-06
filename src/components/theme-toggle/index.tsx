import Theme, { themeMap, themes } from '@models/ui/theme';
import clsx from 'clsx';
import { useState } from 'react';
import Wrapper, { ThemeIcon, ThemeName, ThemeOption } from './style';

export default function ThemeToggle() {
  const [state, setState] = useState(Theme.auto);

  function onToggle(theme: Theme) {
    return () => {
      const html = document.documentElement;
      html.classList.remove(Theme.auto, Theme.dark, Theme.light);
      if (theme !== Theme.auto) {
        html.classList.add(theme);
        setState(theme);
      } else {
        setState(Theme.auto);
      }
    };
  }

  return (
    <Wrapper>
      {themes.map(m => {
        const _theme = themeMap[m];
        return (
          <ThemeOption
            key={_theme.title}
            onClick={onToggle(m)}
            title={`${_theme.title} theme`}
            className={clsx(state === m && 'selected')}
          >
            <ThemeName>{_theme.title}</ThemeName>
            <ThemeIcon>{_theme.icon}</ThemeIcon>
          </ThemeOption>
        );
      })}
    </Wrapper>
  );
}
