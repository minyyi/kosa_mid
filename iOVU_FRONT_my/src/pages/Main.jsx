import React from "react";
import CommonTitle from "../component/common/CommonTitle";
import { Box, Container } from "@mui/material";
import CommonButton from "../component/common/CommonButton";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const clickBtn = () => {
    navigate("/login");
  };
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
        <CommonTitle>Main Page</CommonTitle>
        <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
          <p>버튼사용 예시</p>
          <CommonButton onClick={clickBtn}> primary</CommonButton>
          <CommonButton onClick={clickBtn} variant="outlined">
            primary
          </CommonButton>
          <CommonButton color="fourth">fourth</CommonButton>
        </Box>
      </Container>
    </>
  );
};
export default Main;
