import axios from "axios";

let BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// export interface BaseResult<T> {
//   message: string;
//   error: string | string[];
//   Data: T;
//   statusCode: number;
//   success: boolean;
//   Pagination: {
//     CurrentPage: number;
//     PageSize: number;
//     TotalObjects: number;
//     TotalPages: number;
//   };
// }

// export type BaseAxiosResponse<T> = Promise<AxiosResponse<BaseResult<T>>>;

export const Api = axios.create({
  baseURL: BASE_URL,
});