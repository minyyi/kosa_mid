import * as React from "react";

import { useLocation, useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FiMenu } from "react-icons/fi";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const NavBar = () => {
  //   const navigate = useNavigate();
  // const clickLogo = () ={
  //     navigate('/');
  // }
    const location = useLocation(); // 현재 경로 가져오기
    const isLandingPage = location.pathname === "/landing"; // LandingPage 여부 확인
  
  return (
    <Box>
      <AppBar
        position="static"
        sx={{ minHeight: 80, justifyContent: "center", mb: 6 }}
      >
        <Toolbar>
          {!isLandingPage && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <FiMenu />
            </IconButton>
          )}
          <Typography
            // onClick={clickLogo}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            iOVU
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
