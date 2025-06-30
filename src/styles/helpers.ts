export const minFontSize = 16;

export function px(size: number) {
  const rem = size / minFontSize;
  return rem ? `${rem}rem` : 0;
}

const genCssVar = (def: string, dark: string, light: string) => ({
  _def: `--${def}`,
  use: `var(--${def})`,
  value: { dark, light }
});

export const cssVar = {
  logo: {
    black: genCssVar('rk-logo-black', `white`, 'black'),
    red: genCssVar('rk-logo-red', `tomato`, '#c20000')
  },
  link: genCssVar('rk-link', '#3391ff', 'blue'),
  grey: genCssVar('rk-grey', '#6c6c6c', 'grey'),
  black: genCssVar('rk-black', '#dddddd', '#222'),
  white: genCssVar('rk-white', '#222', 'white'),
  yellow: genCssVar('rk-yellow', 'yellow', 'grey'),
  transparent: genCssVar('rk-transparent', '#ffffff00', '#ffffff00'),
  table: {
    head: {
      rowBg: genCssVar('rk-tbl-hd-rw-bg', '#323232', '#ddd')
    },
    row: { even: genCssVar('rk-tbl-rw-even-bg', '#2a2a2a', '#ededed') }
  }
};

type CssVar = ReturnType<typeof genCssVar>;

export function genThemedCssVars(cssVarMap: any) {
  const dark: string[] = [];
  const light: string[] = [];
  Object.keys(cssVarMap).forEach(mapKey => {
    const key = mapKey as keyof CssVar;
    if (key === '_def') {
      const map = cssVarMap as CssVar;
      dark.push(`${map._def}: ${map.value.dark}`);
      light.push(`${map._def}: ${map.value.light}`);
    } else {
      const nestedMap = cssVarMap[key];
      if (nestedMap && typeof nestedMap === 'object') {
        const recursed = genThemedCssVars(nestedMap);
        dark.push(...recursed.dark);
        light.push(...recursed.light);
      }
    }
  });
  return { dark, light };
}
