// src/pages/ReportLinkDomainPage/ReportLinkDomainPage.jsx
import React from "react";
import CommonTitle from "../component/common/CommonTitle";
import {
  Container,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";

// 예시 데이터에 'category' 필드 추가
const sampleData = [
  {
    id: 1,
    domain: "000닷컴",
    link: "opumo.com/magazine/best-jeans/~",
    percentage: "9%",
    total: 3,
    google: 2,
    chatgpt: 1,
    category: "쇼핑몰", // 'unknown' 대신 'category'로 변경하고 값 할당
  },
  {
    id: 2,
    domain: "0000닷컴",
    link: "opumo.com/magazine/best-jeans/~",
    percentage: "5%",
    total: 2,
    google: 0,
    chatgpt: 2,
    category: "블로그",
  },
  {
    id: 3,
    domain: "00000닷컴",
    link: "opumo.com/magazine/best-jeans/~",
    percentage: "4%",
    total: 2,
    google: 0,
    chatgpt: 0,
    category: "뉴스",
  },
  {
    id: 4,
    domain: "00닷컴",
    link: "opumo.com/magazine/best-jeans/~",
    percentage: "2%",
    total: 1,
    google: 1,
    chatgpt: 0,
    category: "포털 사이트",
  },
  // 필요하다면 더 많은 예시 데이터 추가
  {
    id: 5,
    domain: "예시도메인닷컴",
    link: "example.com/another-page",
    percentage: "1%",
    total: 1,
    google: 0,
    chatgpt: 1,
    category: "커뮤니티",
  },
];

const ReportLinkDomainPage = () => {
  const handleDownloadLinks = () => {
    console.log("링크 다운로드 요청");
    // 실제 다운로드 로직 구현
  };

  const handleDownloadDomains = () => {
    console.log("도메인 다운로드 요청");
    // 실제 다운로드 로직 구현
  };

  const handleLogout = () => {
    console.log("로그아웃 요청");
    // 실제 로그아웃 로직 구현
  };

  return (
    <Container sx={{ py: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <CommonTitle sx={{ py: 0, px: 0 }}>링크 및 도메인 분석</CommonTitle>
        <Box>
          <Button variant="contained" onClick={handleDownloadLinks}>
            링크 다운로드
          </Button>
          <Button
            variant="contained"
            onClick={handleDownloadDomains}
            sx={{ ml: 2 }}
          >
            도메인 다운로드
          </Button>
        </Box>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="링크 및 도메인 분석 테이블">
          <TableHead>
            <TableRow sx={{ backgroundColor: "action.hover" }}>
              <TableCell
                sx={{
                  width: "auto",
                  minWidth: "50px",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
              >
                번호
              </TableCell>
              <TableCell>도메인</TableCell>
              <TableCell>링크</TableCell>
              <TableCell align="right">전체에서%</TableCell>
              <TableCell align="right">총</TableCell>
              <TableCell align="right">구글</TableCell>
              <TableCell align="right">챗 gpt</TableCell>
              {/* "???"를 "분류"로 변경 */}
              <TableCell align="left">분류</TableCell>{" "}
              {/* 분류는 보통 왼쪽 정렬 */}
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleData.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": { backgroundColor: "action.selected" },
                }}
              >
                <TableCell sx={{ textAlign: "center" }}>{index + 1}</TableCell>
                <TableCell component="th" scope="row">
                  {row.domain}
                </TableCell>
                <TableCell>{row.link}</TableCell>
                <TableCell align="right">{row.percentage}</TableCell>
                <TableCell align="right">{row.total}</TableCell>
                <TableCell align="right">{row.google}</TableCell>
                <TableCell align="right">{row.chatgpt}</TableCell>
                {/* 'row.unknown' 대신 'row.category' 사용 */}
                <TableCell align="left">{row.category}</TableCell>{" "}
                {/* 분류는 보통 왼쪽 정렬 */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
        <Button variant="outlined" onClick={handleLogout}>
          로그아웃
        </Button>
      </Box>
    </Container>
  );
};

export default ReportLinkDomainPage;
