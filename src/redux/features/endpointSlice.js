import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    value: {
        endpoint: 'all'
    },
}

export const endpointSlice = createSlice({
  name: 'endpoint',
  initialState,
  reducers: {
    setEndpoint: (state, action) => {
      state.value.endpoint = action.payload
    },
  },
})


export const { setEndpoint } = endpointSlice.actions
export default endpointSlice.reducer