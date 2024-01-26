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
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
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
