
export const minFontSize = 16;

export function px(size: number) {
  const rem = size / minFontSize;
  return rem ? `${rem}rem` : 0;
}

export const borderRadius = {
  common: px(5)
};

export const padding = `${px(6)} ${px(10)}`;

export const classNames = {
  noGlobalStyles: 'no-global-styles'
};

export const colors = {
  brand: {
    purple: '#5C3EBD',
    purpleFade: '#5c3ebd42',
    yellow: '#FFD00C'
  },
  transparent: 'rgba(255, 255, 255, 0)'
};

export const zIndex = {
  header: 1000
};

export const maxWidth = {
  page: px(1200)
};

type BoxShadow = {
  x?: number;
  y?: number;
  xy?: number;
  blur?: number;
  spread?: number;
  color: string;
};

function getBxDim(args: BoxShadow) {
  return {
    x: args.xy || args.x || 0,
    y: args.xy || args.y || 0,
    blur: args.blur || 0,
    spread: args.spread || 0,
    color: args.color || 'grey'
  };
}

export const boxShadow = (e: BoxShadow) => {
  const { x: _x, y: _y, blur: _blur, spread: _spread, color } = getBxDim(e);
  const x = px(_x);
  const y = px(_y);
  const blur = px(_blur);
  const spread = px(_spread);

  return {
    allSides: `${x} ${y} ${blur} ${spread} ${color}`,

    plus: `0 -${y} ${blur} ${spread} ${color},
          ${x} 0 ${blur} ${spread} ${color},
          0 ${y} ${blur} ${spread} ${color},
          -${x} 0 ${blur} ${spread} ${color}`,

    topOnly: `0 -${y} ${blur} ${spread} ${color},
              0 0 0 0 transparent,
              0 0 0 0 transparent,
              0 0 0 0 transparent`,

    rightOnly: `0 0 0 0 transparent,
              ${x} 0 ${blur} ${spread} ${color},
              0 0 0 0 transparent,
              0 0 0 0 transparent`,

    bottomOnly: `0 0 0 0 transparent,
                0 0 0 0 transparent,
                0 ${y} ${blur} ${spread} ${color},
                0 0 0 0 transparent`,

    leftOnly: `0 0 0 0 transparent,
              0 0 0 0 transparent,
              0 0 0 0 transparent,
              -${x} 0 ${blur} ${spread} ${color}`,

    vertical: `0 -${y} ${blur} ${spread} ${color},
              0 0 0 0 transparent,
              0 ${y} ${blur} ${spread} ${color},
              0 0 0 0 transparent`,

    verticalLeft: `0 -${y} ${blur} ${spread} ${color},
                0 0 0 0 transparent,
                0 ${y} ${blur} ${spread} ${color},
                -${x} 0 ${blur} ${spread} ${color}`,

    verticalRight: `0 -${y} ${blur} ${spread} ${color},
                ${x} 0 ${blur} ${spread} ${color},
                0 ${y} ${blur} ${spread} ${color},
                0 0 0 0 transparent`,

    horizontal: `0 0 0 0 transparent,
                ${x} 0 ${blur} ${spread} ${color},
                0 0 0 0 transparent,
                -${x} 0 ${blur} ${spread} ${color}`,

    horizontalTop: `0 -${y} ${blur} ${spread} ${color},
                  ${x} 0 ${blur} ${spread} ${color},
                  0 0 0 0 transparent,
                  -${x} 0 ${blur} ${spread} ${color}`,

    horizontalBottom: `0 0 0 0 transparent,
                    ${x} 0 ${blur} ${spread} ${color},
                    0 ${y} ${blur} ${spread} ${color},
                    -${x} 0 ${blur} ${spread} ${color}`
  };
};
 
