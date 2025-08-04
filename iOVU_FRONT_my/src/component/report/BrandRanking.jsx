import React, { useEffect, useState } from "react";
import { Paper, Box, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import CommonSubtitle from "../common/CommonSubtitle";

//차트에 필요한 요소 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BrandRanking = () => {
  // 1. 원본 데이터 (정렬 전)
  const rawData = [
    { label: "Carhartt", value: 90, color: "#FF6384" },
    { label: "Wrangler", value: 120, color: "#36A2EB" },
    { label: "orSlow", value: 160, color: "#FFCE56" },
    { label: "Levi's", value: 50, color: "#4BC0C0" },
    { label: "Lee", value: 180, color: "#9966FF" },
  ];

  // 2. 값 기준으로 내림차순 정렬
  const sorted = rawData.sort((a, b) => b.value - a.value);

  // 3. Chart.js용 데이터 재구성
  const data = {
    labels: sorted.map((item) => item.label),
    datasets: [
      {
        label: "",
        data: sorted.map((item) => item.value),
        backgroundColor: sorted.map((item) => item.color),
        barThickness: 20,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Paper elevation={1} sx={{ p: 2, minHeight: "240px", bgcolor: "#f5f5f5" }}>
      <CommonSubtitle>Brand Ranking</CommonSubtitle>
      <Box id="brand_r" sx={{ height: "200px", mt: 2 }}>
        {/* 막대 그래프 자리 */}
        <Box
          sx={{
            display: "flex",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Bar data={data} options={options} style={{ width: "100%" }} />
        </Box>
      </Box>
    </Paper>
  );
};
export default BrandRanking;
