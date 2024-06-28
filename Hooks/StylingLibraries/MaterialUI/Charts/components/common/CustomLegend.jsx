import { Box, Tooltip, Typography } from '@mui/material';

const CustomLegend = ({ labels, colors }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: '2px',
      }}
    >
      {labels.map((label, index) => (
        <Box
          key={index}
          display='flex'
          alignItems='center'
          sx={{ marginBlock: 0.2 }}
        >
          <Box
            width='20px'
            height='20px'
            bgcolor={colors[index]}
            mr={1}
            sx={{ flex: '0 0 20px' }}
          />
          <Typography
            variant='body2'
            sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            <Tooltip title={label} placement='top-start'>
              <span>{label}</span>
            </Tooltip>
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CustomLegend;
