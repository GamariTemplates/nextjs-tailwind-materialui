import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import ColorPalette from "../components/ColorPalette";

import Header from "../components/Header";
import UIList from "../components/UIList";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex flex-col w-full h-screen px-6 pt-10 mx-auto max-w-7xl">
        <Box>
          <Typography variant="h4">リンク</Typography>
          <Box p={4}>
            <Link href="/dashboard">Dashboard</Link>
          </Box>
        </Box>
        <UIList />
        <ColorPalette />
      </main>
    </div>
  );
};

export default Home;
