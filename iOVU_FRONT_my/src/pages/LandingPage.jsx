import {Box, Container} from "@mui/material";

import CommonButton from "../component/common/CommonButton";
import CommonTitle from "../component/common/CommonTitle";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const clickBtn = () => {
    navigate("/login");
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "68vh",
        backgroundImage: "url('/image/landing.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          width: "1000px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 0, // 불필요한 여백 제거
          margin: 0,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <CommonTitle
            sx={{
              fontSize: 36,
              pt: "5vh",
            }}
          >
            AI로 검색을 혁신하세요
          </CommonTitle>
          <CommonTitle sx={{ fontSize: 30 }}>
            키워드 분석부터 트렌드까지, 당신의 마케팅을 더 똑똑하게
          </CommonTitle>
          <CommonButton
            onClick={clickBtn}
            sx={{
              mt: 5,
            }}
          >
            Go to Login
          </CommonButton>
        </motion.div>
      </Container>
    </Box>
  );
};

export default LandingPage;