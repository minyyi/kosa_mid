import {Box, Container, InputAdornment, TextField} from "@mui/material";

import CommonButton from "../component/common/CommonButton";
import CommonTitle from "../component/common/CommonTitle";
import React from "react";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
   const navigate = useNavigate();
   
    const handleSearch = () => {
      console.log("검색 실행");
    };
  return (
    <Container
      sx={{
        width: "1000px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "1vh",
          position: "relative",
          // gap: 2,
        }}
      >
        <img
          src="/image/searchBanner2.png"
          alt="검색 배너"
          style={{
            width: 500,
            height: 400,
            marginBottom: 0,
            marginTop: 0,
          }}
        />

        <TextField
          placeholder="키워드 검색"
          variant="outlined"
          size="medium"
          sx={{ width: 600, position: "absolute", top: "350px" }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          InputProps={{
            sx: {
              "& input": {
                paddingLeft: 33,
                textAlign: "left",
              },
              height: 40,
              borderRadius: 5,
              backgroundColor: "#F5F5F5",
            },
            endAdornment: (
              <InputAdornment position="end">
                <CommonButton
                  onClick={handleSearch}
                  sx={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                    "&:hover img": {
                      transform: "scale(1.2)", // 확대 효과
                      filter: "brightness(1.3)", // 더 밝게
                    },
                  }}
                >
                  <img
                    src="/image/search.png"
                    alt="검색"
                    style={{
                      width: 20,
                      height: 20,
                      transition: "all 0.3s ease",
                    }}
                  />
                </CommonButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Container>
  );
};
export default SearchPage;



