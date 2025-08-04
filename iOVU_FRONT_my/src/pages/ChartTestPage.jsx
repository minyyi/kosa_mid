// src/pages/ChartTestPage.jsx
import React from "react";
import WeeklyLinkChart from "../component/charts/WeeklyLinkChart"; // WeeklyLinkChart 경로 확인
import { Container, Typography } from "@mui/material"; // MUI 컴포넌트 사용

const ChartTestPage = () => {
  return (
    <Container sx={{ py: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        차트 테스트 페이지
      </Typography>
      <Typography variant="body1" paragraph>
        이 페이지는 WeeklyLinkChart 컴포넌트를 테스트하기 위한 임시
        페이지입니다.
      </Typography>

      {/* WeeklyLinkChart 컴포넌트를 여기에 포함시킵니다. */}
      {/* WeeklyLinkChart 내부에서 데이터를 직접 가지고 있으므로 props 전달은 필요 없습니다 (옵션 1 기준) */}
      <WeeklyLinkChart />

      {/* 필요하다면 다른 테스트용 UI 요소들을 추가할 수 있습니다. */}
    </Container>
  );
};

export default ChartTestPage;
