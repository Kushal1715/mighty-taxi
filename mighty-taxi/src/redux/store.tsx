//store.jsx
import { configureStore } from '@reduxjs/toolkit'
//Importing the reducer from countSlice
import darkModeReducer from "./darkmodeSlice"

export const store = configureStore({
  reducer: {
    darkmode: darkModeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;