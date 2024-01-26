/** @jsxImportSource @emotion/react */

import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import {
  Alert,
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
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";

import { ResetPasswordStyle } from "./index.style";

interface FormData {
  password: string;
  confirmPassword: string;
}

const schema = yup
  .object({
    password: yup.string().required().min(8),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Passwords do not match"),
  })
  .required();

const ResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (form: FormData) => {
    const { token } = Object.fromEntries(searchParams.entries());
    const payload = {
      ...form,
      token,
    };
    console.log(payload);

    try {
      setIsLoading(true);
      await new Promise((resolve) => {
        return setTimeout(() => {
          resolve("ok");
        }, 3000);
      });
      toast.success("Reset password successfully!");
      navigate(PATH.login, { replace: true });
    } catch (error) {
      //
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div css={ResetPasswordStyle.self}>
      <Card sx={{ maxWidth: 468, width: "100%" }}>
        <CardContent>
          <Box sx={{ padding: "20px 30px 15px" }}>
            <div css={ResetPasswordStyle.heading}>
              <img src={LogoIcon} alt="logo" css={ResetPasswordStyle.logo} />
              <Typography css={ResetPasswordStyle.headingTitle}>
                Automate
                <br />
                Construction
                <br />
                Monitoring
              </Typography>
            </div>

            <Box sx={{ textAlign: "center", paddingBottom: "20px" }}>
              <Typography css={ResetPasswordStyle.title}>
                RESET PASSWORD
              </Typography>
            </Box>

            <form
              css={ResetPasswordStyle.form}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <InputCustom
                    control={control}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputCustom
                    control={control}
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    label="Confirm Password"
                    fullWidth
                    required
                  />
                </Grid>

                {!!errorMessage && (
                  <Grid item xs={12}>
                    <Alert severity="error">{errorMessage}</Alert>
                  </Grid>
                )}

                <Grid item xs={12}>
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
                </Grid>
              </Grid>

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
                    textTransform: "uppercase",
                  }}
                  loading={isLoading}
                >
                  submit
                </LoadingButton>
              </Box>
            </form>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPassword;
