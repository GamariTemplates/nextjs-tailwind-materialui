import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";

import { ColorModeContext, tokens } from "../../theme";

const Header: React.FunctionComponent<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => {
  const { theme } = useContext(ColorModeContext);
  const colors = tokens(theme?.palette.mode);

  return (
    <Box>
      <Typography variant="h2" color={colors.grey[100]} sx={{ mb: "5px" }}>
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
