import { createSlice } from "@reduxjs/toolkit";
export const filterSlice = createSlice({
  name: "filterSlice",
  initialState: {
    difficulty: "",
    status: "",
  },
  reducers: {
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
    unsetDifficulty: (state) => {
      state.difficulty = "";
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    unsetStatus: (state) => {
      state.status = "";
    },
  },
});

export const { setDifficulty, unsetDifficulty, setStatus, unsetStatus } =
  filterSlice.actions;

export default filterSlice.reducer;
