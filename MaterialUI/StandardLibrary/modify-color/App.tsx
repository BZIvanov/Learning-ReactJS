import { Box, Typography, lighten, darken } from "@mui/material"; // 7.1.0

const App = () => {
  // with lighten and darken method we can provide some color and then percantage with which to modify the color
  return (
    <Box>
      <Typography
        sx={{
          backgroundColor: (theme) => lighten(theme.palette.primary.main, 0.5),
        }}
      >
        Text
      </Typography>
      <Typography
        sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
      >
        Text
      </Typography>
      <Typography
        sx={{
          backgroundColor: (theme) => darken(theme.palette.primary.main, 0.3),
        }}
      >
        Text
      </Typography>
    </Box>
  );
};

export default App;
