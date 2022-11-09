import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: []
};

const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    appendUser: (state, action) => {
      state.users = [...state.users, action.payload]
    },
  },
});

export const { setUsers, appendUser } = users.actions;
export default users.reducer;