import { Box, Container } from "@mui/material";
import CommonTitle from "../../component/common/CommonTitle";
import CommonButton from "../../component/common/CommonButton";
import ReportsList from "../../component/list/ReportsList";

const Reports = () => {
  return (
    <>
      <Container
        sx={{
          width: "1000px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <CommonTitle>검색 프롬프트트 모니터링</CommonTitle>
        <Container sx={{ py: 2 }} style={{ paddingTop: "0px" }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <CommonButton style={{ marginRight: "0px" }}>
              보고서 이름 검색
            </CommonButton>
          </Box>
          <ReportsList />
        </Container>
      </Container>
    </>
  );
};

export default Reports;
