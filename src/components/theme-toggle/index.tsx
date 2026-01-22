import { useTheme } from '@context/theme';
import { themeMap, themes } from '@models/ui/theme';
import clsx from '@utils/clsx';
import Wrapper, { ThemeIcon, ThemeName, ThemeOption } from './style';

export default function ThemeToggle() {
  const { current, change } = useTheme();

  return (
    <Wrapper>
      {themes.map(theme => {
        const _theme = themeMap[theme];
        return (
          <ThemeOption
            key={_theme.title}
            onClick={() => change(theme)}
            title={`${_theme.title} theme`}
            className={clsx(current === theme && 'selected')}
          >
            <ThemeName>{_theme.title}</ThemeName>
            <ThemeIcon>{_theme.icon}</ThemeIcon>
          </ThemeOption>
        );
      })}
    </Wrapper>
  );
}
