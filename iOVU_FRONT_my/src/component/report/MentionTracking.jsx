import { useEffect, useState } from "react";
import { Paper, Box, Typography } from "@mui/material";
import Chart from "react-apexcharts";
import CommonSubtitle from "../common/CommonSubtitle";

const MentionTracking = () => {
  const [series, setSeries] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    // 더미 데이터
    const dummyDates = ["05-06", "05-07", "05-08", "05-09", "05-10"];
    const dummyData = {
      스타벅스: [12, 8, 15, 6, 10],
      이디야: [7, 11, 9, 14, 5],
      탐엔탐스: [7, 0, 9, 1, 5],
      컴포즈: [0, 1, 9, 3, 5],
      할리스: [4, 6, 3, 8, 7],
    };

    setDates(dummyDates);
    setSeries(convertToSeries(dummyData, dummyDates));
  }, []);

  const convertToSeries = (data, dates) => {
    return Object.entries(data).map(([brand, counts]) => ({
      name: brand,
      data: dates.map((date, i) => ({
        x: date,
        y: counts[i] ?? 0,
      })),
    }));
  };

  const options = {
    chart: { type: "heatmap", toolbar: { show: false } },
    dataLabels: { enabled: false },
    xaxis: {
      type: "category",
      categories: dates,
      labels: { rotate: -45, style: { fontSize: "10px" } },
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        colorScale: {
          ranges: [
            { from: 0, to: 5, color: "#e0f7fa" },
            { from: 6, to: 10, color: "#4dd0e1" },
            { from: 11, to: 20, color: "#00acc1" },
          ],
        },
      },
    },
    yaxis: {
      labels: { style: { fontSize: "10px", lineHeight: "24px" } },
    },
  };

  return (
    <Paper
      elevation={1}
      sx={{ p: 2, minWidth: "468px", height: "280px", bgcolor: "#f5f5f5" }}
    >
      <CommonSubtitle>Weekly Mention Tracking</CommonSubtitle>
      <Box sx={{ height: "200px", mt: 1 }}>
        {series.length > 0 ? (
          <Chart
            options={options}
            series={series}
            type="heatmap"
            height="100%"
          />
        ) : (
          <Typography variant="body2" color="textSecondary">
            데이터 없음
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

export default MentionTracking;
