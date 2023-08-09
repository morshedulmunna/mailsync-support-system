import { apiSlice } from "../api/apiSlice";

export const emailApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postEmail: builder.mutation({
      query: (data: any) => ({
        url: "/email/sent",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { usePostEmailMutation } = emailApi;
