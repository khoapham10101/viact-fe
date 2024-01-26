/** @jsxImportSource @emotion/react */

import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { Alert, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import LogoIcon from "assets/icons/logo.svg";
import InputCustom from "components/BaseUI/InputCustom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthService } from "services/auth";
import { SendEmailForgotPasswordPayload } from "services/auth/type";
import * as yup from "yup";

import { ForgotPasswordPageStyle } from "./index.style";

const schema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();

const ForgotPasswordPage = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmit = async (form: SendEmailForgotPasswordPayload) => {
    try {
      setErrorMessage("");
      setIsLoading(true);
      const { message } = await AuthService.sendEmailForgotPassword(form);
      toast.success(message);
    } catch (error: any) {
      setErrorMessage(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
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
                    fullWidth
                  />
                </Grid>
              </Grid>

              {!!errorMessage && (
                <Grid item xs={12} css={{ marginTop: "10px" }}>
                  <Alert severity="error">{errorMessage}</Alert>
                </Grid>
              )}

              {/* Submit button */}
              <LoadingButton
                fullWidth
                variant="contained"
                color="secondary"
                type="submit"
                css={{
                  bgcolor: "#23b6d8 !important",
                  fontSize: "12px",
                  marginBottom: "12px",
                  height: "48px",
                  textTransform: "uppercase",
                  marginTop: "10px",
                }}
                loading={isLoading}
              >
                send verification email
              </LoadingButton>
            </form>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;
