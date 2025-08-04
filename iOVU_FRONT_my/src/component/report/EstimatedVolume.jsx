import { Paper, Box, Typography } from "@mui/material";
import CommonSubtitle from "../common/CommonSubtitle";

const EstimatedVolume = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        m: 0,
        minWidth: "468px",
        minHeight: "160px",
        bgcolor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CommonSubtitle>Estimated Intent Volume</CommonSubtitle>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          134 %
        </Typography>
        <Typography variant="body2" color="text.secondary" ml={1}>
          +0.3%
        </Typography>
      </Box>
    </Paper>
  );
};
export default EstimatedVolume;
