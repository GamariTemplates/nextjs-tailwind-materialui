import { Box, Grid } from "@mui/material";
import React from "react";

const ColorPalette = () => {
  return (
    <Box>
      <h2 className="text-xl font-black">カラーパレット</h2>

      <p className="my-6">カラーパレットを記載する。</p>

      <Grid container spacing={2} className="mx-2">
        <Grid item xs={3} alignSelf={"center"}>
          <h2>ベースカラー</h2>
        </Grid>
        <Grid item xs={9}>
          <div className="w-24 h-24 border bg-dark"></div>
        </Grid>

        <Grid item xs={3} alignSelf={"center"}>
          <h2>サブカラー</h2>
        </Grid>
        <Grid item xs={8}>
          <div className="w-24 h-24 border bg-sub-dark"></div>
        </Grid>

        <Grid item xs={3} alignSelf={"center"}>
          <h2>アクセントカラー</h2>
        </Grid>
        <Grid item xs={8}>
          <div className="w-24 h-24 border bg-[rgba(70,72,76,1)]"></div>
        </Grid>

        <Grid item xs={3} alignSelf={"center"}>
          <h2>ライトアクセントカラー</h2>
        </Grid>
        <Grid item xs={8}>
          <div className="w-24 h-24 border bg-[rgba(98,99,101,1)]"></div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ColorPalette;
