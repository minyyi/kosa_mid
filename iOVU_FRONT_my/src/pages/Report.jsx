import {
  Container,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import EstimatedVolume from "../component/report/EstimatedVolume";
import Snapshot from "../component/report/Snapshot";
import BrandRanking from "../component/report/BrandRanking";
import MentionTracking from "../component/report/MentionTracking";
import LinkTracking from "../component/report/LinkTracking";
import ResultSummary from "../component/report/ResultSummary";
import BrandTracking from "../component/report/BrandTracking";
import DomainTr from "../component/report/DomainTr";
import Analysis from "../component/report/Analysis";
import CommonTitle from "../component/common/CommonTitle";
import CommonButton from "../component/common/CommonButton";
import { useState } from "react";

const Report = () => {
  const [date, setDate] = useState("");
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ width: "1000px", height: "100%" }}
    >
      <CommonTitle>${}보고서</CommonTitle>
      <Box
        sx={{
          mb: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          rowGap: 4,
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          날짜 :
          <FormControl>
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                px: 2,
              }}
            >
              선택한 날짜
            </InputLabel>
            <Select
              label="선택한 날짜"
              id="demo-simple-select"
              value=""
              sx={{
                mx: 2,
                minWidth: 140,
              }}
            >
              <MenuItem value={6}>05-06</MenuItem>
              <MenuItem value={13}>05-13</MenuItem>
              <MenuItem value={20}>05-20</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            columnGap: 4,
          }}
        >
          <CommonButton color="third">ChatGPT</CommonButton>
          <CommonButton>Gemini</CommonButton>
        </Box>
      </Box>

      {/* 2열 그리드 레이아웃 컨테이너 */}
      <Box sx={{ width: "1000px" }}>
        {/* 두 개의 열 컨테이너를 Flex로 구성 */}
        <Box sx={{ display: "flex", gap: "16px" }}>
          {/* 왼쪽 열 */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Box>
              <EstimatedVolume />
            </Box>
            <Box>
              <BrandRanking />
            </Box>
            <Box>
              <MentionTracking />
            </Box>

            <Box>
              <LinkTracking />
            </Box>
          </Box>

          {/* 오른쪽 열 */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Box>
              <Snapshot />
            </Box>
            <Box>
              <ResultSummary />
            </Box>
          </Box>
        </Box>

        {/* 전체 너비를 차지하는 컴포넌트들 */}
        <Box
          sx={{
            marginTop: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Box>
            <BrandTracking />
          </Box>
          <Box>
            <DomainTr />
          </Box>
          <Box>
            <Analysis />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Report;
