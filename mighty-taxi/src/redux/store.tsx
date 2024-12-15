//store.jsx
import { configureStore } from '@reduxjs/toolkit'
//Importing the reducer from countSlice
import darkModeReducer from "./darkmodeSlice"
import authReducer from "./authSlice"

export const store = configureStore({
  reducer: {
    darkmode: darkModeReducer,
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;