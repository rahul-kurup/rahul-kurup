import { createServerFn } from '@tanstack/react-start';
import { getCookie } from '@tanstack/react-start/server';
import StorageKey from '@utils/storage/keys';
import { getProperThemeValue } from '@utils/theme';

export const getServerTheme = createServerFn().handler(() => {
  return getProperThemeValue(getCookie(StorageKey.theme));
});