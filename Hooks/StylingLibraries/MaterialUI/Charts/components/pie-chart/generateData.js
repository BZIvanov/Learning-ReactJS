import chroma from 'chroma-js';

export const generateData = (PIES_COUNT) => {
  const rawData = Array.from({ length: PIES_COUNT }, (_, i) => i + 1).map(
    (_, index) => {
      const rawPieData = {
        id: index + 1,
        label: `Label ${index + 1}`,
        value: Math.round(Math.random() * 100, 0),
      };

      return rawPieData;
    }
  );

  const pieLabels = rawData.map((rd) => rd.label);

  return { pieLabels, pieData: rawData };
};

export const generateExtendedPalette = ({
  palette,
  totalColors,
  mode = 'lch',
}) => {
  return chroma.scale(palette).mode(mode).colors(totalColors);
};
