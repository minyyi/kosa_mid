import { Paper, Box, Typography } from "@mui/material";
import CommonButton from "../common/CommonButton";
import CommonSubtitle from "../common/CommonSubtitle";

const LinkTracking = () => {
  return (
    <Paper
      elevation={1}
      sx={{ p: 2, minWidth: "468px", minHeight: "220px", bgcolor: "#f5f5f5" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CommonSubtitle>Link Tracking</CommonSubtitle>
        <CommonButton
          size="small"
          color="fourth"
          sx={{
            // bgcolor: "#0088ff",
            // color: "white",
            // px: 1,
            // py: 0.5,
            // borderRadius: 1,
            fontSize: "12px",
          }}
        >
          자세히 보기
        </CommonButton>
      </Box>
      <Box sx={{ mt: 2 }}>
        {/* 링크 목록 */}
        {Array.from({ length: 10 }).map((_, idx) => (
          <Box
            key={idx}
            sx={{ display: "flex", justifyContent: "space-between", py: 0.8 }}
          >
            <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
              {idx + 1} 링크 타이틀
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
              도메인
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};
export default LinkTracking;
