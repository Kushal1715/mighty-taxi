import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dark: false,
};

export const darkmodeSlice = createSlice({
  name: 'darkmode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.dark = !state.dark; // This updates the 'dark' state
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleDarkMode } = darkmodeSlice.actions;

export default darkmodeSlice.reducer;
