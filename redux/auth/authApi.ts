import { apiSlice } from "@/redux/api/apiSlice";
import { registerCredential } from "@/types";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createRegister: builder.mutation<any, any>({
      query: (data: registerCredential) => ({
        url: "/auth/local/signup",
        method: "POST",
        body: data,
      }),
    }),

    login: builder.mutation<any, any>({
      query: (data: any) => ({
        url: "/auth/local/signin",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateRegisterMutation, useLoginMutation } = authApi;
