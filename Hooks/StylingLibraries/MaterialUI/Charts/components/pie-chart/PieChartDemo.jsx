import { useMemo } from 'react';
import { Box } from '@mui/material';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { mangoFusionPalette } from '@mui/x-charts/colorPalettes';

import CustomLegend from '../common/CustomLegend';
import useContainerSize from '../../hooks/useContainerSize';
import { generateData, generateExtendedPalette } from './generateData';

const PIES_COUNT = 2;

const PieChartDemo = () => {
  const [{ width }, widthRef] = useContainerSize();

  const { pieLabels, pieData } = useMemo(() => {
    return generateData(PIES_COUNT);
  }, []);

  const colors =
    pieLabels.length > 10
      ? generateExtendedPalette({
          palette: mangoFusionPalette('light'),
          totalColors: pieLabels.length,
        })
      : mangoFusionPalette('light');

  return (
    <Box ref={widthRef} sx={{ backgroundColor: '#eeeeee', padding: 2 }}>
      <PieChart
        series={[
          {
            data: pieData,
            innerRadius: 8,
            outerRadius: 100,
            paddingAngle: 0,
            cornerRadius: 4,
            startAngle: 0,
            endAngle: 360,
            arcLabel: (params) => {
              return `${params.formattedValue}` ?? '';
            },
            arcLabelMinAngle: 45,
          },
        ]}
        width={width}
        height={250}
        slotProps={{
          legend: {
            hidden: true,
          },
        }}
        colors={colors}
        margin={{ left: 80 }}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: 'white',
          },
        }}
      />

      <CustomLegend labels={pieLabels} colors={colors} />
    </Box>
  );
};

export default PieChartDemo;
