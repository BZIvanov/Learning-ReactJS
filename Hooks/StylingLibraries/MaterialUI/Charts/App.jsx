import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import BarChartDemo from './components/bar-chart/BarChartDemo';
import PieChartDemo from './components/pie-chart/PieChartDemo';

const App = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label='Bar chart' value={0} />
          <Tab label='Pie chart' value={1} />
        </Tabs>
      </Box>

      <Box>{value === 0 && <BarChartDemo />}</Box>
      <Box>{value === 1 && <PieChartDemo />}</Box>
    </Box>
  );
};

export default App;
