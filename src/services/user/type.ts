import { ApiResponse } from "types/common";
import { User } from "types/user";

export interface UserPayload {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
}

// export interface ListUserPayload {
//   page?: number;
//   pageSize?: number;
//   searchTerm?: string;
//   sortBy?: string;
//   sortOrder?: string;
// }

export type GetListUserResponse = ApiResponse<User[]>;

export type CreateUserResponse = ApiResponse<User>;

export type UpdateUserPayload = Omit<UserPayload, "password">;
