/** @jsxImportSource @emotion/react */

import { Box, Container, Grid, Typography } from "@mui/material";

import { FooterStyle } from "./index.style";

const Footer = () => {
  return (
    <Box
      css={FooterStyle.self}
      sx={{
        backgroundColor: "primary.main",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="white" variant="subtitle1">
              {`${new Date().getFullYear()} | Viact`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
