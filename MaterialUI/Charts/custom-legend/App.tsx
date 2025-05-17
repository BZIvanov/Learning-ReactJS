import { useState, type SyntheticEvent } from "react";
import Tabs from "@mui/material/Tabs"; // 7.1.0
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import BarChartDemo from "./components/bar-chart/BarChartDemo";
import PieChartDemo from "./components/pie-chart/PieChartDemo";

const App = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Bar chart" value={0} />
          <Tab label="Pie chart" value={1} />
        </Tabs>
      </Box>

      <Box>{value === 0 && <BarChartDemo />}</Box>
      <Box>{value === 1 && <PieChartDemo />}</Box>
    </Box>
  );
};

export default App;
