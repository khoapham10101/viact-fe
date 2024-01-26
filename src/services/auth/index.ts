import axiosRequest from "services";

import {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
  ResetPasswordPayload,
} from "./type";

export const AuthService = {
  async login(payload: LoginPayload) {
    console.log(payload);
    const { data } = await axiosRequest.post<LoginResponse>(
      "/auth/sign-in",
      payload,
    );
    return data;
  },

  async register(payload: RegisterPayload) {
    const { data } = await axiosRequest.post<RegisterResponse>(
      "/register",
      payload,
    );
    return data;
  },

  async forgotPassword() {
    const { data } = await axiosRequest.post(
      "/auth/send-email-forgot-password",
    );
    return data;
  },

  async resetPassword(payload: ResetPasswordPayload) {
    const { data } = await axiosRequest.post("/auth/forgot-password");
    return data;
  },
};
