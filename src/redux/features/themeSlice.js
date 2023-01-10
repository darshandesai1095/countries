import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: {
    darkMode: false
  },
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state, action) => {
      state.value = !state.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { switchTheme } = themeSlice.actions

export default themeSlice.reducer