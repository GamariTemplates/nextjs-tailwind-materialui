import { Box, IconButton, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import {
  Sidebar as SB,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";

// Icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import { ColorModeContext, tokens } from "../../theme";
import Link from "next/link";

const Sidebar = () => {
  const { theme } = useContext(ColorModeContext);
  const [selected, setSelected] = useState("Dashboard");
  // const [iseCollapsed, setIsCollapsed] = useState(false);

  const colors = tokens(theme?.palette.mode);

  return (
    <Box
      sx={{
        "& > .ps-sidebar-root": {
          border: "none",
        },
      }}
    >
      <SB
        className="h-full"
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: colors.primary[400],
            borderRight: "none",
          },
        }}
      >
        <Menu>
          {/* ロゴ & メニューアイコン */}
          <MenuItem>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Typography>ADMINS</Typography>
              <IconButton>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          </MenuItem>

          {/* ユーザーアイコン */}
          <Box mb="25px">
            <Box display="flex" justifyContent={"center"} alignItems="center">
              <img src="/images/user.svg" width={"100px"} height="100px" />
            </Box>
            <Box textAlign={"center"}>
              <Typography variant="h2" color={colors.grey[100]}>
                Username
              </Typography>
              <Typography variant="h5" color={colors.greenAccent[400]}>
                ADMIN
              </Typography>
            </Box>
          </Box>

          {/* Links */}
          <Box paddingLeft={"10%"}>
            <Item
              title="ダッシュボード"
              to="/dashboard/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Team管理"
              to="/dashboard/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </SB>
    </Box>
  );
};

const Item: React.FunctionComponent<{
  title: string;
  to: string;
  icon: React.ReactNode;
  selected: string;
  setSelected: (title: string) => void;
}> = ({ title, to, icon, selected, setSelected }) => {
  const { theme } = useContext(ColorModeContext);

  const colors = tokens(theme?.palette.mode);

  return (
    <Link href={to}>
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    </Link>
  );
};

export default Sidebar;
