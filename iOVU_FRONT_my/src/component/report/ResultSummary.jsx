import { Paper, Box, Typography } from "@mui/material";
import CommonSubtitle from "../common/CommonSubtitle";

const ResultSummary = () => {
  return (
    <Paper
      elevation={1}
      sx={{ p: 2, minWidth: "468px", minHeight: "654px", bgcolor: "#f5f5f5" }}
    >
      <CommonSubtitle>Search Result for ChatGPT(최대 참고)</CommonSubtitle>
      <Box id="summary"></Box>
    </Paper>
  );
};
export default ResultSummary;
