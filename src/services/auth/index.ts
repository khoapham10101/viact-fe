import axiosRequest from "services";

import {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
  ResetPasswordPayload,
  SendEmailForgotPasswordPayload,
  VerificationPayload,
} from "./type";

export const AuthService = {
  async login(payload: LoginPayload) {
    const { data } = await axiosRequest.post<LoginResponse>(
      "/auth/sign-in",
      payload,
    );
    return data;
  },

  async register(payload: RegisterPayload) {
    const { data } = await axiosRequest.post<RegisterResponse>(
      "/auth/sign-up",
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
    const { data } = await axiosRequest.post("/auth/forgot-password", payload);
    return data;
  },

  async verifyAccount(payload: VerificationPayload) {
    const { data } = await axiosRequest.post("/auth/verification", payload);
    return data;
  },

  async sendEmailForgotPassword(payload: SendEmailForgotPasswordPayload) {
    const { data } = await axiosRequest.post(
      "/auth/send-email-forgot-password",
      payload,
    );
    return data;
  },
};
