import React from "react";
import Link from "next/link";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const UIList = () => {
  return (
    <div>
      <Box>
        <Typography variant="h4">ボタン</Typography>
        <Box p={4}>
          <Button variant="contained">click me!</Button>
        </Box>
      </Box>

      <div className="mb-10">
        <div className="w-24">
          <Link href="https://mui.com/material-ui/react-card/">
            <h2 className="text-xl font-bold cursor-pointer">カード</h2>
          </Link>
        </div>

        <Card sx={{ minWidth: 275, maxWidth: 300 }}>
          <CardContent>
            <Typography
              // sx={{ fontSize: 14 }}
              color="text.secondary"
              fontSize={20}
              fontWeight={888}
              gutterBottom
            >
              Word of the day
            </Typography>
          </CardContent>

          <CardActions>
            <Button>Learn more</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default UIList;
