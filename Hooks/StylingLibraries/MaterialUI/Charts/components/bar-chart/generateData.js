import chroma from 'chroma-js'; // 2.4.2

export const generateData = (BARS_COUNT, GROUPS_COUNT) => {
  const rawData = Array.from({ length: BARS_COUNT }, (_, i) => i + 1).map(
    (_, index) => {
      const rawBarData = {
        barName: `Chart Bar ${index + 1}`,
        xLabel: 'Vertical label',
        yLabel: 'Horizontal label',
      };

      for (let i = 1; i <= GROUPS_COUNT; i++) {
        rawBarData[`Bar Group ${i}`] = Math.round(Math.random() * 100, 0);
      }

      return rawBarData;
    }
  );

  const barKeys = rawData.map((rd) => rd.barName);

  const barGroupsKeys = Object.keys(rawData[0]).filter(
    (key) => key !== 'barName' && key !== 'xLabel' && key !== 'yLabel'
  );

  const barData = barGroupsKeys.map((barGroupKey) => {
    const dataValues = rawData.map((_) => Math.round(Math.random() * 100, 0));

    return { data: dataValues, label: barGroupKey, stack: 'A' };
  });

  return { barKeys, barGroupsKeys, barData };
};

export const generateExtendedPalette = ({
  palette,
  totalColors,
  mode = 'lch',
}) => {
  return chroma.scale(palette).mode(mode).colors(totalColors);
};
