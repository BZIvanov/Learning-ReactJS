import chroma from "chroma-js"; // 3.1.2

interface BarSeries {
  data: number[];
  label: string;
  stack: string;
}

interface GenerateDataResult {
  barKeys: string[];
  barGroupsKeys: string[];
  barData: BarSeries[];
}

export const generateData = (
  BARS_COUNT: number,
  GROUPS_COUNT: number
): GenerateDataResult => {
  const barKeys = Array.from(
    { length: BARS_COUNT },
    (_, i) => `Chart Bar ${i + 1}`
  );
  const barGroupsKeys = Array.from(
    { length: GROUPS_COUNT },
    (_, i) => `Bar Group ${i + 1}`
  );

  const barData: BarSeries[] = barGroupsKeys.map((group) => {
    const data = Array.from({ length: BARS_COUNT }, () =>
      Math.round(Math.random() * 100)
    );
    return { data, label: group, stack: "A" };
  });

  return { barKeys, barGroupsKeys, barData };
};

export const generateExtendedPalette = ({
  palette,
  totalColors,
  mode = "lch",
}: {
  palette: string[];
  totalColors: number;
  mode?: "rgb" | "hsl" | "lab" | "lch";
}): string[] => {
  return chroma.scale(palette).mode(mode).colors(totalColors);
};
