import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AiOutlineExport } from "react-icons/ai";
import { BiExport } from "react-icons/bi";

const CommonButton = ({
  children,
  variant = "contained",
  color = "primary",
  size = "large",
  sx = {},
  ...others
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      sx={{
        m: 1,
        ...sx,
      }}
      {...others}
    >
      {children}
    </Button>
  );
};
export default CommonButton;
