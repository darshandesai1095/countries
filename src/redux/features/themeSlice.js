import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    value: {
        darkTheme: false
    },
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state, action) => {
      state.value.darkTheme = !state.value.darkTheme
    },
  },
})


export const { switchTheme } = themeSlice.actions
export default themeSlice.reducer