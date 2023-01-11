import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './features/themeSlice'
import searchReducer from './features/searchSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    search: searchReducer
  },
})