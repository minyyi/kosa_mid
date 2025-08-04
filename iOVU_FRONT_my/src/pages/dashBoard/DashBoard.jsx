import BrandColumn from "./BrandColumn";
import CommonButton from "../../component/common/CommonButton";
import { Box, Container } from "@mui/material";
import CommonTitle from "../../component/common/CommonTitle";
import BrandTracking from "../BrandTracking";

const DashBoard = () => {
  const stats1 = [
    { label: "요약 결과", value: "1" },
    { label: "브랜드 가시성", value: "10% (10)" },
    { label: "브랜드 평균 순위", value: "#3" },
    { label: "도메인 인용 비율", value: "10% (10)" },
    { label: "브랜드 언급 수", value: "23" },
  ];
  const stats2 = [
    { label: "요약 결과", value: "2" },
    { label: "브랜드 가시성", value: "10% (10)" },
    { label: "브랜드 평균 순위", value: "#3" },
    { label: "도메인 인용 비율", value: "10% (10)" },
    { label: "브랜드 언급 수", value: "23" },
  ];
  const stats3 = [
    { label: "요약 결과", value: "3" },
    { label: "브랜드 가시성", value: "10% (10)" },
    { label: "브랜드 평균 순위", value: "#3" },
    { label: "도메인 인용 비율", value: "10% (10)" },
    { label: "브랜드 언급 수", value: "23" },
  ];
  return (
    <Container
      sx={{
        width: "1000px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginBottom: "20px",
      }}
    >
      <CommonTitle>Dash Board</CommonTitle>
      <Box
        sx={{ display: "flex", flexDirection: "column", p: 2, width: "100%" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "20px",
          }}
        >
          <CommonButton>내보내기 📩</CommonButton>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <BrandColumn brandName="ChatGPT" stats={stats1} />
          <BrandColumn brandName="Gemini" stats={stats2} />
          <BrandColumn brandName="Cloud" stats={stats3} />
        </div>
      </Box>
      <BrandTracking />
    </Container>
  );
};

export default DashBoard;
