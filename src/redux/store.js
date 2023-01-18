import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './features/themeSlice'
import searchReducer from './features/searchSlice'
import endpointReducer from './features/endpointSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    search: searchReducer,
    endpoint: endpointReducer
  },
})