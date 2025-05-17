import chroma from "chroma-js";

interface PieDatum {
  id: number;
  label: string;
  value: number;
}

interface GeneratePieResult {
  pieLabels: string[];
  pieData: PieDatum[];
}

export const generateData = (PIES_COUNT: number): GeneratePieResult => {
  const pieData: PieDatum[] = Array.from({ length: PIES_COUNT }, (_, i) => ({
    id: i + 1,
    label: `Label ${i + 1}`,
    value: Math.round(Math.random() * 100),
  }));

  const pieLabels = pieData.map((d) => d.label);

  return { pieLabels, pieData };
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
