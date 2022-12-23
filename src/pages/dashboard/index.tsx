import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/dashboard/Header";
import Layout from "../../components/layouts/Layout";

const index = () => {
  return (
    <Layout>
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="DASHBOARD" subtitle="ようこそ" />
        </Box>
      </Box>
    </Layout>
  );
};

export default index;
