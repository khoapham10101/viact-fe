import axiosRequest from "services";

import { CreateUserResponse, GetListUserResponse, UserPayload } from "./type";

export const UserService = {
  async listUser() {
    const { data } = await axiosRequest.post<GetListUserResponse>("/user/list");
    return data;
  },

  async getCurrentUser() {
    const { data } = await axiosRequest.get("/user/me");
    return data;
  },

  async addNewUser(payload: UserPayload) {
    const { data } = await axiosRequest.post<CreateUserResponse>(
      "/user/add",
      payload,
    );
    return data;
  },

  async updateUser(id: string, payload: UserPayload) {
    const { data } = await axiosRequest.put(`/user/${id}`, payload);
    return data;
  },

  async deleteUser(id: string) {
    const { data } = await axiosRequest.delete(`/user/${id}`);
    return data;
  },
};
