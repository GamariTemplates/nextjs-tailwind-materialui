import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/dashboard/Header";
import Layout from "../../components/layouts/Layout";

const team = () => {
  return (
    <Layout>
      <Box m="20px">
        <Header title="DASHBOARD" subtitle="ようこそ" />
      </Box>
    </Layout>
  );
};

export default team;
