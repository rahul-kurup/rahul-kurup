
export const minFontSize = 16;

export function px(size: number) {
  const rem = size / minFontSize;
  return rem ? `${rem}rem` : 0;
}
