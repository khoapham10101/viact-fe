/** @jsxImportSource @emotion/react */

import { Box, Container, Typography } from "@mui/material";
import UserTable from "components/Table/UserTable";

import { HomePageStyle } from "./index.style";

const HomePage = () => {
  return (
    <div css={HomePageStyle.self}>
      <Container sx={{ maxWidth: "100%" }}>
        <Typography sx={{ marginTop: "40px", fontSize: "18px" }}>
          Welcome, Admin
        </Typography>
        <Box sx={{ py: "40px" }}>
          <UserTable />
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;
