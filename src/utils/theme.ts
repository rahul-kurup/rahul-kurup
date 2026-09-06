import Theme from '@models/ui/theme';
import StorageKey from '@utils/storage/keys';

export const getProperThemeValue = (theme?: Theme | string) =>
  (!theme || (theme as string) === 'null' ? Theme.auto : theme) as Theme;

export function getThemeFromCookie(cookieString?: string): Theme {
  const prefix = `${StorageKey.theme}=`;
  const match = cookieString
    ?.split(';')
    .map(c => c.trim())
    .find(c => c.startsWith(prefix));
  const value = match?.slice(prefix.length);
  return getProperThemeValue(value);
}

export function setThemeCookie(theme: Theme) {
  document.cookie = `${StorageKey.theme}=${theme}; path=/; max-age=${
    30 * 24 * 60 * 60
  }; SameSite=Lax`;
}