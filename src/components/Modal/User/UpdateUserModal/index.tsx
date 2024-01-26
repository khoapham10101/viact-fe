/** @jsxImportSource @emotion/react */

import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import InputCustom from "components/BaseUI/InputCustom";
import PhoneInputCustom from "components/BaseUI/PhoneInputCustom";
import { matchIsValidTel } from "mui-tel-input";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { UserService } from "services/user";
import { UserPayload } from "services/user/type";
import { User } from "types/user";
import * as yup from "yup";

import { UpdateUserModalStyle } from "./index.style";

interface UpdateUserModalProps {
  open: boolean;
  onClose?: () => void;
  onReloadData?: () => void;
  data: User;
}
interface FormData extends UserPayload {
  confirmPassword: string;
}

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
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Passwords do not match"),
  })
  .required();

const UpdateUserModal = (props: UpdateUserModalProps) => {
  const { open, onClose, onReloadData, data } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { control, reset, handleSubmit } = useForm<FormData>({
    resolver: yupResolver<any>(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      phoneNumber: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (form: FormData) => {
    // console.log(form);
    const payload = {
      ...form,
    } as Partial<FormData>;
    delete payload.confirmPassword;

    try {
      setIsLoading(true);
      const { message } = await UserService.updateUser(
        data.id,
        payload as UserPayload,
      );
      toast.success(message);
      handleClose();
      onReloadData && onReloadData();
    } catch (error: any) {
      setErrorMessage(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    onClose && onClose();
  };

  const initForm = () => {
    reset({
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      email: data.email,
      phoneNumber: data.phoneNumber || "",
    });
  };

  useEffect(() => {
    if (open) {
      initForm();
      return;
    }
    reset();
    setErrorMessage("");
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit(onSubmit),
      }}
      css={UpdateUserModalStyle.self}
    >
      <DialogTitle>Create User</DialogTitle>
      <DialogContent>
        <Box component="form" noValidate>
          <Box sx={{ marginBottom: "10px" }}></Box>
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
                type="password"
                label="Password"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <InputCustom
                control={control}
                name="confirmPassword"
                type="password"
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
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <LoadingButton
          type="submit"
          loading={isLoading}
          variant="contained"
          loadingPosition="start"
        >
          Submit
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateUserModal;
