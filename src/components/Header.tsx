import React from "react";

import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" className="bg-dark">
      <Toolbar>
        <Typography variant="h6" className="flex-1">
          ヘッダー
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
