/** @jsxImportSource @emotion/react */

import { yupResolver } from "@hookform/resolvers/yup";
import {
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
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { CreateUserModalStyle } from "./index.style";

interface CreateUserModalProps {
  open: boolean;
  onClose?: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
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

const CreateUserModal = (props: CreateUserModalProps) => {
  const { open, onClose } = props;

  const { control, reset, handleSubmit } = useForm<FormData>({
    resolver: yupResolver<any>(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (form: FormData) => {
    console.log(form);
  };

  const handleClose = () => {
    onClose && onClose();
  };

  useEffect(() => {
    reset();
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit(onSubmit),
      }}
      css={CreateUserModalStyle.self}
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
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <Button type="submit">Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateUserModal;
