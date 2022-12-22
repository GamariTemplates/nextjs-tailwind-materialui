import React from "react";

import { ColorModeContext, useMode } from "../../theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ProSidebarProvider } from "react-pro-sidebar";

import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";

const Layout: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { theme, colorMode } = useMode();

  return (
    <ProSidebarProvider>
      <ColorModeContext.Provider
        value={{
          toggleColorMode: colorMode,
          theme: theme,
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />

          {/* Content */}
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="w-full h-full">
              <Topbar />
              {children}
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ProSidebarProvider>
  );
};

export default Layout;
