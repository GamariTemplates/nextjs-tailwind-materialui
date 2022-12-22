import React, { useEffect } from "react";

import { ColorModeContext, useMode } from "../../theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Topbar from "../global/Topbar";

const Layout: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { theme, colorMode } = useMode();

  return (
    <ColorModeContext.Provider
      value={{
        toggleColorMode: colorMode,
        theme: theme,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* Content */}
        <div className="app">
          <main className="content">
            <Topbar />
            {children}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Layout;
