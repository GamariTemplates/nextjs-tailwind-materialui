import React, { useContext } from "react";
import { Box, IconButton, InputBase } from "@mui/material";
// Icons
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { ColorModeContext, tokens, useMode } from "../../theme";

const Topbar = () => {
  const { theme, toggleColorMode } = useContext(ColorModeContext);
  const colors = tokens(theme?.palette.mode);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* 検索 */}
      <Box
        display="flex"
        borderRadius="3px"
        sx={{
          bgcolor: colors.primary[400],
        }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />

        <IconButton type="button" sx={{ p: 1 }}>
          <SearchOutlinedIcon />
        </IconButton>
      </Box>

      {/* アイコン */}
      <Box display="flex">
        <IconButton
          onClick={(e) => {
            console.log("CLICK");

            e.preventDefault();
            toggleColorMode();
          }}
        >
          {theme?.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
