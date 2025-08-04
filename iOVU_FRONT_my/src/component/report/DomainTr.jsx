import { Paper, Box, Typography } from "@mui/material";
import CommonSubtitle from "../common/CommonSubtitle";
import WeeklyLinkChart from "../charts/WeeklyLinkChart";

const DomainTr = () => {
  return (
    <Paper
      elevation={1}
      sx={{ p: 2, minWidth: "468px", minHeight: "500px", bgcolor: "#f5f5f5" }}
    >
      <CommonSubtitle>주간 도메인 점유율 트렌드</CommonSubtitle>
      <Box sx={{ height: "70px", mt: 2 }}>
        {/* 선 그래프 */}
        <WeeklyLinkChart />
        {/* <svg
          width="100%"
          height="100%"
          viewBox="0 0 200 70"
          preserveAspectRatio="none"
        >
          <polyline
            points="0,20 100,60"
            fill="none"
            stroke="#0088ff"
            strokeWidth="2"
          />
          <circle cx={0} cy={20} r="4" fill="#0088ff" />
          <circle cx={100} cy={60} r="4" fill="#0088ff" />
        </svg> */}
      </Box>
    </Paper>
  );
};
export default DomainTr;
