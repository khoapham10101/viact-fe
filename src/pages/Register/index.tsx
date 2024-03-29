/** @jsxImportSource @emotion/react */

import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import Logo from "assets/icons/logo.svg";
import InputCustom from "components/BaseUI/InputCustom";
import PhoneInputCustom from "components/BaseUI/PhoneInputCustom";
import { PATH } from "constants/path";
import { matchIsValidTel } from "mui-tel-input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthService } from "services/auth";
import { RegisterPayload } from "services/auth/type";
import * as yup from "yup";

import TermAndConditionsPopup from "../../components/Register/PrivateComponents/TermAndConditionsPopup";
import { RegisterPageStyle } from "./index.style";

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup
      .string()
      .test("Phone is invalid", (value) => matchIsValidTel(value || "")),
    password: yup.string().required().min(8),
    passwordConfirm: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Passwords do not match"),
  })
  .required();

const RegisterPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { control, handleSubmit } = useForm<RegisterPayload>({
    resolver: yupResolver<any>(schema),
  });

  const onSubmit = async (form: RegisterPayload) => {
    try {
      setIsLoading(true);
      await AuthService.register(form);
      toast.success("Register successfully");
      navigate(PATH.login, { replace: true });
    } catch (error: any) {
      setErrorMessage(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTermsClick = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Box css={RegisterPageStyle.registerAuth}>
      <Box css={RegisterPageStyle.registerContainer}>
        <Box css={RegisterPageStyle.registerContainerBox}>
          <Paper
            className="MuiPaper-root-231 MuiCard-root-230 MuiPaper-elevation1-235 MuiPaper-rounded-232"
            elevation={1}
            css={RegisterPageStyle.registerPaper}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                md={6}
                css={RegisterPageStyle.registerLeftContent}
              >
                <Box css={RegisterPageStyle.registerLogoContent}>
                  <img
                    css={RegisterPageStyle.registerLogo}
                    src={Logo}
                    alt="logo color"
                  />
                  <Typography
                    variant="body1"
                    css={RegisterPageStyle.registerLogoText}
                  >
                    Automate
                    <br />
                    Construction
                    <br />
                    Monitoring
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "10px",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ textTransform: "uppercase", fontSize: 16 }}
                  >
                    CREATE NEW ACCOUNT
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#EB5757", fontSize: 20, fontWeight: 700 }}
                  >
                    Build smart risk free
                  </Typography>
                </Box>
                <Box>
                  <List css={RegisterPageStyle.listSuggestion}>
                    <ListItem>
                      <Typography variant="body1">
                        Understand why Viact is being used on millions of
                        customers everyday
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="body1">
                        Find out if Viact is the right fit for your business
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="body1">
                        Get all your questions answered (personally)
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="body1">
                        Completely risk-free with 14-day free trial and a 30-day
                        money back guarantee!
                      </Typography>
                    </ListItem>
                  </List>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  css={RegisterPageStyle.formField}
                  noValidate
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <InputCustom
                        control={control}
                        name="firstName"
                        label="First Name"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <InputCustom
                        control={control}
                        name="lastName"
                        label="Last Name"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <InputCustom
                        control={control}
                        name="username"
                        label="Username"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <InputCustom
                        control={control}
                        name="email"
                        label="Email"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <PhoneInputCustom
                        control={control}
                        label="Phone"
                        id="phoneNumber"
                        name="phoneNumber"
                        fullWidth
                        required
                      />
                    </Grid>
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
                        name="passwordConfirm"
                        type={showPassword ? "text" : "password"}
                        label="Confirm Password"
                        fullWidth
                        required
                      />
                    </Grid>

                    <Grid item xs={12}>
                      {/* Checkbox to show password */}
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

                    {!!errorMessage && (
                      <Grid item xs={12}>
                        <Alert severity="error">{errorMessage}</Alert>
                      </Grid>
                    )}
                  </Grid>

                  {/* Submit button */}
                  <LoadingButton
                    fullWidth
                    variant="contained"
                    color="secondary"
                    type="submit"
                    css={RegisterPageStyle.registerSubmitBtn}
                    loading={isLoading}
                  >
                    SIGN UP
                  </LoadingButton>
                </form>

                {/* Terms and Conditions */}
                <Box mt={2} css={RegisterPageStyle.termAndConditionsContent}>
                  <Typography variant="body1">
                    By clicking Sign up or Continue with Google, you agree to
                    viAct’s{" "}
                    <span
                      style={{
                        color: "rgb(235, 87, 87)",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                      onClick={handleTermsClick}
                    >
                      Terms and Conditions for Free Trial.
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ marginTop: 2 }}>
                    Already have an account?{" "}
                    <a
                      href={PATH.login}
                      style={{
                        fontWeight: 700,
                        color: "rgb(235, 87, 87)",
                        textDecoration: "none",
                      }}
                    >
                      Log In.
                    </a>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Box>
      {/* Render the MyDialog component */}
      <TermAndConditionsPopup open={dialogOpen} onClose={handleDialogClose} />
    </Box>
  );
};

export default RegisterPage;
