import axiosRequest from "services";

import { LoginPayload, RegisterPayload } from "./type";

export const AuthService = {
  async login(payload: LoginPayload) {
    const { data } = await axiosRequest.post("/login", payload);
    return data;
  },

  async register(payload: RegisterPayload) {
    const { data } = await axiosRequest.post("/register", payload);
    return data;
  },
};
