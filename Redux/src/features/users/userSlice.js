import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: '0',
    name: "ashishprabhuk",
  },
  {
    id: '1',
    name: "apk",
  },
];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;
