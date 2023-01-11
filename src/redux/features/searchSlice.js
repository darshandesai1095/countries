import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    value: {
        searchEntry: "test"
    },
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.value.searchEntry = action.payload
    },
  },
})


export const { setSearch } = searchSlice.actions
export default searchSlice.reducer