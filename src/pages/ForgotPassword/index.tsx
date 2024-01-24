/** @jsxImportSource @emotion/react */

import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import LogoIcon from "assets/icons/logo.svg";
import InputCustom from "components/BaseUI/InputCustom";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { ForgotPasswordPageStyle } from "./index.style";

interface FormData {
  email: string;
}

const schema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();

const ForgotPasswordPage = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (form: FormData) => {
    console.log(form);
  };

  return (
    <div css={ForgotPasswordPageStyle.self}>
      <Card sx={{ maxWidth: 468, width: "100%" }}>
        <CardContent>
          <Box sx={{ padding: "20px 30px 15px" }}>
            <div css={ForgotPasswordPageStyle.heading}>
              <img
                src={LogoIcon}
                alt="logo"
                css={ForgotPasswordPageStyle.logo}
              />
              <Typography css={ForgotPasswordPageStyle.headingTitle}>
                Automate
                <br />
                Construction
                <br />
                Monitoring
              </Typography>
            </div>

            <Box sx={{ textAlign: "center" }}>
              <Typography css={ForgotPasswordPageStyle.title}>
                FORGOT PASSWORD
              </Typography>
              <Typography css={ForgotPasswordPageStyle.subTitle}>
                One more step
              </Typography>
              <Typography sx={{ marginBottom: "20px", fontSize: "13px" }}>
                Please enter your email
              </Typography>
            </Box>

            <form
              css={ForgotPasswordPageStyle.form}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <InputCustom
                    control={control}
                    name="email"
                    label="Email"
                    helperText=""
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Box marginTop="20px">
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    bgcolor: "#23b6d8 !important",
                    fontSize: "12px",
                    marginBottom: "12px",
                    height: "48px",
                    textTransform: "uppercase",
                  }}
                >
                  send verification email
                </Button>
              </Box>
            </form>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;
