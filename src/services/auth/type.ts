import { ApiResponse } from "types/common";

export interface LoginPayload {
  email: string;
  password: string;
}

export type LoginResponse = ApiResponse<{
  accessToken: string;
  expires: number;
}>;

export interface RegisterPayload {
  username: string;
  firstName: string;
  lastName: string;
  ememailail: string;
  phoneNumber: string;
  password: string;
  passwordConfirm: string;
}

export interface ResetPasswordPayload {
  token: string;
  password: string;
  confirmPassword: string;
}

export type RegisterResponse = ApiResponse<null>;

export interface ForgotPasswordPayload {
  email: string;
}

export interface VerificationPayload {
  token: string;
}
