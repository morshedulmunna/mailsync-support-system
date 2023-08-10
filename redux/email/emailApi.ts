import { apiSlice } from "../api/apiSlice";

export const emailApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postEmail: builder.mutation({
      query: (data: {
        sendingEmail: string;
        subject: string;
        body: string;
      }) => ({
        url: "/email/sent",
        method: "POST",
        body: data,
      }),
    }),

    sendingEmail: builder.query<any, void>({
      query: () => `/email/sending?skip=0&take=20`,
      providesTags: [],
    }),
  }),
});

export const { usePostEmailMutation, useSendingEmailQuery } = emailApi;
