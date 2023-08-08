import { apiSlice } from "@/redux/api/apiSlice";
import { FormikValues } from "formik";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data: FormikValues) => ({
        url: "/auth/local/signup",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApi;
