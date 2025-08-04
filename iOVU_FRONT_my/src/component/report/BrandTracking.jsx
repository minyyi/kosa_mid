import { Paper, Box, Typography } from "@mui/material";
import BrandTrackingChart from "../charts/BrandTrackingChart";
import CommonSubtitle from "../common/CommonSubtitle";

const BrandTracking = () => {
  return (
    <Paper
      elevation={1}
      sx={{ p: 2, minWidth: "600px", height: "500px", bgcolor: "#f5f5f5" }}
    >
      <CommonSubtitle>Weekly Brand Tracking</CommonSubtitle>
      <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
        <BrandTrackingChart />
      </Box>
    </Paper>
  );
};
export default BrandTracking;
