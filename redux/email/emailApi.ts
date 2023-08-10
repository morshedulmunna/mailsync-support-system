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
      invalidatesTags: ["create_email"],
    }),

    sendingEmail: builder.query<any, any>({
      query: ({ skip, take }) => `/email/sending?skip=${skip}&take=${take}`,
      keepUnusedDataFor: 2,
    }),
    inboxEmail: builder.query<any, any>({
      query: ({ skip, take }) => `/email/inbox?skip=${skip}&take=${take}`,
      keepUnusedDataFor: 2,
    }),
  }),
});

export const {
  usePostEmailMutation,
  useSendingEmailQuery,
  useInboxEmailQuery,
} = emailApi;
