import React from "react";
import CommonTitle from "../component/common/CommonTitle";
import { Container, Box, Avatar } from "@mui/material";
import CommonButton from "../component/common/CommonButton";
import { TbBrandKakoTalk } from "react-icons/tb";
import { SiNaver } from "react-icons/si";
import { useTheme } from "@emotion/react";
import { FaGoogle } from "react-icons/fa";
import KakaoLogin from "../component/auth/KakaoLogin ";

const Login = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        width: "1000px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <CommonTitle>로그인</CommonTitle>
      <Box
        sx={{
          // position: "absolute",
          // top: "40%",
          // left: "30%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          my: 12,
          mx: "auto",
          columnGap: 4,
        }}
      >
        <KakaoLogin />
        {/* <CommonButton
          variant="outlined"
          sx={{
            backgroundColor: "#FEE500",
            px: 5,
          }}
        >
          <TbBrandKakoTalk
            fontSize="large"
            style={{
              marginRight: 8,
            }}
          />
          카카오로 로그인
        </CommonButton> */}
        <CommonButton
          variant="outlined"
          color="secondary"
          sx={{
            backgroundColor: "#03C75A",
            color: "#FFFFFF",
            px: 5,
          }}
        >
          <SiNaver
            fontSize="large"
            style={{
              marginRight: 8,
            }}
          />
          네이버로 로그인
        </CommonButton>
        <CommonButton
          variant="outlined"
          sx={{
            px: 6,
          }}
        >
          <FaGoogle
            fontSize="large"
            style={{
              marginRight: 8,
            }}
          />
          구글로 로그인
        </CommonButton>
      </Box>
    </Container>
  );
};
export default Login;
