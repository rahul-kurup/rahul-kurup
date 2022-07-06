export type DeviceSize = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

interface MediaSize {
  min: DeviceSize;
  max: DeviceSize;
}

export const rawSize = {
  sm_min: '576px',
  md_min: '768px',
  lg_min: '992px',
  xl_min: '1200px',
  sm_max: '575.98px',
  md_max: '767.98px',
  lg_max: '991.98px',
  xl_max: '1199.98px'
} as const;

export type KeyRawSize = keyof typeof rawSize;

export type KeyDeviceSize = keyof DeviceSize;

type MediaQuery = MediaSize & { prefers: { dark: string; light: string } };

export const media: MediaQuery = Object.keys(rawSize).reduce(
  (acc, cur) => {
    const key = cur as KeyRawSize;
    if (key.endsWith('_min')) {
      acc.min[key.replace('_min', '')] = `@media (min-width: ${rawSize[key]})`;
    } else {
      acc.max[key.replace('_max', '')] = `@media (max-width: ${rawSize[key]})`;
    }
    return acc;
  },
  {
    min: {} as any,
    max: {} as any,
    prefers: {
      light: '@media (prefers-color-scheme: light)',
      dark: '@media (prefers-color-scheme: dark)'
    }
  }
);

export default media;
