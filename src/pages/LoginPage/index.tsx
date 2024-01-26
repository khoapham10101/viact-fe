/** @jsxImportSource @emotion/react */

import { yupResolver } from "@hookform/resolvers/yup";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import LogoIcon from "assets/icons/logo.svg";
import InputCustom from "components/BaseUI/InputCustom";
import { PATH } from "constants/path";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { LoginPayload } from "services/auth/type";
import { theme } from "styles/theme";
import * as yup from "yup";

import { LoginPageStyle } from "./index.style";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (form: LoginPayload) => {
    // console.log(form);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div css={LoginPageStyle.self}>
      <Card sx={{ maxWidth: 520, borderRadius: "20px" }}>
        <CardContent>
          <div css={LoginPageStyle.heading}>
            <img src={LogoIcon} alt="logo" css={LoginPageStyle.logo} />
            <Typography css={LoginPageStyle.headingTitle}>
              Automate
              <br />
              Construction
              <br />
              Monitoring
            </Typography>
          </div>

          <Box sx={{ textAlign: "center" }}>
            <Typography css={LoginPageStyle.title}>LOGIN</Typography>
            <Typography css={LoginPageStyle.subTitle}>Welcome back</Typography>
          </Box>

          <form css={LoginPageStyle.form} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <InputCustom
                  control={control}
                  name="email"
                  label="Email"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <InputCustom
                  control={control}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  fullWidth
                />
              </Grid>
            </Grid>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={showPassword}
                    size="small"
                    color="error"
                    onChange={(e) => setShowPassword(e.target.checked)}
                  />
                }
                label={
                  <Typography
                    component="span"
                    sx={{ fontSize: "14px", fontWeight: 400 }}
                  >
                    Show password
                  </Typography>
                }
              />
              <Link
                to={PATH.forgotPassword}
                css={LoginPageStyle.forgotPasswordLink}
              >
                Forgot password?
              </Link>
            </Box>

            <Box marginTop="20px">
              <LoadingButton
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  bgcolor: "#23b6d8 !important",
                  fontSize: "12px",
                  marginBottom: "12px",
                  height: "48px",
                }}
                loading={isLoading}
              >
                LOGIN
              </LoadingButton>
            </Box>

            <Typography
              sx={{
                textAlign: "center",
                marginTop: "10px",
                fontSize: theme.fontSize[13],
              }}
            >
              Not on Viact yet?{" "}
              <Link to={PATH.register} css={LoginPageStyle.signupLink}>
                Signup
              </Link>{" "}
              now.
            </Typography>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
