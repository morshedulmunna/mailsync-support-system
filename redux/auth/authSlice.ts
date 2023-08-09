import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      console.log(action.payload);

      const { user, token } = action.payload;
      state.user = user;
      state.token = token.accessToken;

      if (token.accessToken) {
        state.isAuthenticated = true;
        localStorage.setItem("@logged", `true`);
      }
    },
    logOut: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem("@logged");
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;
