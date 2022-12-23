import React, { useContext } from "react";

import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

import Header from "../../components/dashboard/Header";
import Layout from "../../components/layouts/Layout";
import { ColorModeContext, tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";

const team = () => {
  const { theme } = useContext(ColorModeContext);
  const colors = tokens(theme?.palette.mode);

  const columns: GridColDef[] = [
    { field: "id", headerName: "Id" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }: { row: { access: string } }) => {
        return (
          <Box
            width="60%"
            className="px-10 py-2 mx-auto my-0"
            display="flex"
            justifyContent="center"
            bgcolor={
              access == "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            <Box className="hidden xl:inline">
              {access == "admin" && <AdminPanelSettingsOutlinedIcon />}
              {access == "manager" && <SecurityOutlinedIcon />}
              {access == "user" && <LockOpenOutlinedIcon />}
            </Box>

            <Typography color={colors.grey[200]} className="md:pl-3">
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Layout>
      <Box m="20px">
        <Header title="チーム管理" subtitle="チームの管理を行えます。" />

        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[600],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            // ヘッダーのセパレーターを消す
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
            // 背景色を変更
            "& .MuiDataGrid-virtualScroller": {
              bgcolor: colors.grey[400],
            },
            // TODO 活性化時のボーダーを消したい
            "& .MuiDataGrid-cell": {},
          }}
        >
          <DataGrid rows={mockDataTeam} columns={columns} />
        </Box>
      </Box>
    </Layout>
  );
};

export default team;
