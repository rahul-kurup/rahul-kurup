export const minFontSize = 16;

export function px(size: number) {
  const rem = size / minFontSize;
  return rem ? `${rem}rem` : 0;
}

function cssVar(def: string) {
  return { def: `--${def}`, use: `var(--${def})` };
}

export const colors = {
  grey: cssVar('grey'),
  black: cssVar('black'),
  white: cssVar('white'),
  yellow: cssVar('yellow'),
  transparent: cssVar('transparent'),
  table: {
    head: {
      rowBg: cssVar('tbl-hd-rw-bg')
    },
    row: { even: cssVar('tbl-rw-even-bg') }
  }
};
