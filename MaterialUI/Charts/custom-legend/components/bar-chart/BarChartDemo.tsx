import { useMemo } from "react";
import { Box } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart"; // 8.3.1
import { mangoFusionPalette } from "@mui/x-charts/colorPalettes";

import CustomLegend from "../common/CustomLegend";
import { useContainerSize } from "../../hooks/useContainerSize";
import { generateData, generateExtendedPalette } from "./generateData";

const BARS_COUNT = 6;
const GROUPS_COUNT = 18;

const BarChartDemo = () => {
  const [{ width }, widthRef] = useContainerSize();

  const { barKeys, barGroupsKeys, barData } = useMemo(() => {
    return generateData(BARS_COUNT, GROUPS_COUNT);
  }, []);

  const colors =
    barGroupsKeys.length > 10
      ? generateExtendedPalette({
          palette: mangoFusionPalette("light"),
          totalColors: barGroupsKeys.length,
        })
      : mangoFusionPalette("light");

  return (
    <Box ref={widthRef} sx={{ backgroundColor: "#eeeeee", padding: 2 }}>
      <BarChart
        series={barData}
        width={width}
        height={500}
        colors={colors}
        xAxis={[
          {
            scaleType: "band",
            data: barKeys,
          },
        ]}
        hideLegend={true}
        margin={{ top: 20, bottom: 120, left: 90, right: 20 }}
      />

      <CustomLegend labels={barGroupsKeys} colors={colors} />
    </Box>
  );
};

export default BarChartDemo;
