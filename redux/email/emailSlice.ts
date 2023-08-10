import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inbox: null,
  sentMail: null,
};

const emailSlice = createSlice({
  name: "emailSlice",
  initialState,
  reducers: {
    inbox: (state, action) => {
      console.log(action.payload);

      state.inbox = action.payload;
    },
    sentEmail: (state, action) => {
      console.log(action.payload);
      state.sentMail = action.payload;
    },
  },
});

export const { inbox, sentEmail } = emailSlice.actions;

export default emailSlice.reducer;
