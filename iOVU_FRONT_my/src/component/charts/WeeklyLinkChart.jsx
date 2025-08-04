// src/component/charts/WeeklyLinkChart.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Box, Typography, Container } from "@mui/material";

// Chart.js에 필요한 구성 요소 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// --- 데이터 및 가공 함수들을 이 파일 내부에 정의 (테스트 목적) ---
const rawLinkData = [
  {
    id: 1,
    domain: "000닷컴",
    link: "opumo.com/magazine/best-jeans/~",
    category: "쇼핑몰",
    collectedDate: "2025-04-28",
  },
  {
    id: 2,
    domain: "0000닷컴",
    link: "opumo.com/magazine/best-jeans/~",
    category: "블로그",
    collectedDate: "2025-04-29",
  },
  {
    id: 3,
    domain: "00000닷컴",
    link: "opumo.com/magazine/best-jeans/~",
    category: "뉴스",
    collectedDate: "2025-05-01",
  },
  {
    id: 4,
    domain: "00닷컴",
    link: "opumo.com/magazine/best-jeans/~",
    category: "블로그",
    collectedDate: "2025-05-05",
  }, // 블로그 19주차
  {
    id: 5,
    domain: "예시도메인닷컴",
    link: "example.com/another-page",
    category: "커뮤니티",
    collectedDate: "2025-05-06",
  },
  {
    id: 6,
    domain: "블로그포스트",
    link: "example.com/blog-post",
    category: "블로그",
    collectedDate: "2025-05-07",
  }, // 블로그 19주차
  {
    id: 7,
    domain: "뉴스사이트",
    link: "example.com/news-site",
    category: "뉴스",
    collectedDate: "2025-04-30",
  },
  {
    id: 8,
    domain: "포털A",
    link: "example.com/portal-a",
    category: "포털 사이트",
    collectedDate: "2025-05-12",
  },
  {
    id: 9,
    domain: "쇼핑몰B",
    link: "example.com/shop-b",
    category: "쇼핑몰",
    collectedDate: "2025-05-13",
  },
  {
    id: 10,
    domain: "뉴스C",
    link: "example.com/news-c",
    category: "뉴스",
    collectedDate: "2025-05-14",
  },
  {
    id: 11,
    domain: "블로그D",
    link: "example.com/blog-d",
    category: "블로그",
    collectedDate: "2025-05-12",
  }, // 블로그 20주차
  {
    id: 12,
    domain: "쇼핑몰C",
    link: "example.com/shop-c",
    category: "쇼핑몰",
    collectedDate: "2025-05-05",
  }, // 쇼핑몰 19주차
];

// 날짜로부터 주차를 계산하는 함수 (ISO 8601 기준 간이 구현)
const getWeekNumber = (dateString) => {
  const date = new Date(dateString);
  const target = new Date(date.valueOf());
  const dayNr = (date.getDay() + 6) % 7;
  target.setDate(target.getDate() - dayNr + 3);
  const firstThursday = target.valueOf();
  target.setMonth(0, 1);
  if (target.getDay() !== 4) {
    target.setMonth(0, 1 + ((4 - target.getDay() + 7) % 7));
  }
  return 1 + Math.ceil((firstThursday - target) / 604800000);
};

// 데이터를 주차별, 분류별로 집계하는 함수
const processDataForChart = (data) => {
  const weeklyData = {};
  data.forEach((item) => {
    if (!item.collectedDate || !item.category) return;
    const weekNumber = getWeekNumber(item.collectedDate);
    const weekLabel = `${weekNumber}주차`;
    if (!weeklyData[weekLabel]) {
      weeklyData[weekLabel] = {};
    }
    if (!weeklyData[weekLabel][item.category]) {
      weeklyData[weekLabel][item.category] = 0;
    }
    weeklyData[weekLabel][item.category]++;
  });

  const labels = Object.keys(weeklyData).sort((a, b) => {
    const weekA = parseInt(a.replace("주차", ""));
    const weekB = parseInt(b.replace("주차", ""));
    return weekA - weekB;
  });

  const categories = [
    ...new Set(
      data.filter((item) => item.category).map((item) => item.category)
    ),
  ].sort();

  const datasets = categories.map((category) => {
    const counts = labels.map((label) => weeklyData[label][category] || 0);
    const categoryIndex = categories.indexOf(category);
    const hue = (categoryIndex * (360 / categories.length)) % 360;

    // Multi-axis 예시: '블로그' 데이터만 y1 축을 사용하도록 설정
    const yAxisIDToUse = category === "블로그" ? "y1" : "y";
    // 만약 모든 데이터를 동일한 y축에 표시하고 싶다면 항상 'y'를 사용:
    // const yAxisIDToUse = 'y';

    return {
      label: category,
      data: counts,
      borderColor: `hsl(${hue}, 70%, 50%)`,
      backgroundColor: `hsla(${hue}, 70%, 50%, 0.2)`,
      yAxisID: yAxisIDToUse, // 각 데이터셋이 사용할 Y축 ID 지정
      tension: 0.1,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6,
    };
  });
  return { labels, datasets };
};
// --- 데이터 및 가공 함수 정의 끝 ---

const WeeklyLinkChart = () => {
  const chartData = processDataForChart(rawLinkData);

  // 사용자가 제공한 options 객체를 기반으로 수정 및 통합
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      // 사용자와의 상호작용 설정
      mode: "index", // 동일한 인덱스의 모든 항목을 툴팁에 표시
      intersect: false, // 마우스가 정확히 포인트에 없어도 근처면 툴팁 표시
      axis: "x", // X축 기준으로 상호작용 (이전 코드에서 가져옴)
    },
    // stacked: false, // Line 차트에서는 stacked가 직접적인 의미는 없으나, 명시해도 무방.
    plugins: {
      legend: {
        position: "top",
        labels: {
          // padding: 20,
          font: { size: 12 },
        },
      },
      // title: {
      //   // Chart.js 자체 제목 기능
      //   display: true, // 차트 내부에 제목 표시 여부
      //   text: "주간 링크 분류별 트래킹", // 차트 제목
      //   font: { size: 16, weight: "bold" },
      //   padding: { top: 10, bottom: 20 },
      // },
      tooltip: {
        mode: "index",
        intersect: false,
        // 툴팁 내용 커스터마이징 (선택 사항)
        // callbacks: {
        //   label: function(context) {
        //     let label = context.dataset.label || '';
        //     if (label) { label += ': '; }
        //     if (context.parsed.y !== null) { label += context.parsed.y + ' 개'; }
        //     return label;
        //   }
        // }
      },
    },
    scales: {
      x: {
        // X축 설정
        title: {
          display: true,
          text: "주차",
          font: { size: 14, weight: "bold" },
          // padding: { top: 10, bottom: 0 },
        },
        ticks: { font: { size: 12 } },
      },
      y: {
        // 왼쪽 Y축 (기본)
        type: "linear",
        display: true,
        position: "left",
        title: {
          display: true,
          text: "링크 수 (개)", // Y축 제목
          font: { size: 14, weight: "bold" },
        },
        beginAtZero: true,
        ticks: {
          stepSize: 1, // 눈금 간격
          font: { size: 12 },
        },
      },
      y1: {
        // 오른쪽 Y축 (보조)
        type: "linear",
        display: true, // 이 축을 사용하려면 true. (하나의 dataset이라도 yAxisID: 'y1'을 사용해야 의미 있음)
        position: "right",
        title: {
          display: true,
          text: "블로그 링크 수 (개)", // 보조 Y축 제목 (예시)
          font: { size: 14, weight: "bold" },
        },
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          font: { size: 12 },
        },
        // Y축 그리드 라인이 왼쪽 Y축과 겹치지 않도록 설정
        grid: {
          drawOnChartArea: false, // true로 하면 왼쪽 y축 grid와 겹침
        },
      },
    },
  };

  if (
    !rawLinkData ||
    rawLinkData.length === 0 ||
    !chartData ||
    chartData.datasets.length === 0
  ) {
    return (
      <Container sx={{ py: 3, textAlign: "center" }}>
        <Typography>
          차트 데이터를 불러오는 중이거나 데이터가 없습니다.
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 2 }}>
      <Box
        sx={{
          p: { xs: 1, sm: 2, md: 3 },
          // border: "1px solid #e0e0e0",
          borderRadius: "8px",
          // backgroundColor: "#ffffff",
          // boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        {/* 차트 제목은 Chart.js options에서 표시하므로 외부 Typography는 제거하거나 다른 용도로 사용 */}
        {/*
        <Typography variant="h6" component="div" sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold' }}>
          주간 링크 분석 트래킹
        </Typography>
        */}
        <Box sx={{ height: { xs: "280px", sm: "320px", md: "380px" } }}>
          <Line options={options} data={chartData} />
        </Box>
      </Box>
    </Container>
  );
};

export default WeeklyLinkChart;
