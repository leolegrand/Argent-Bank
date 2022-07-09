import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
  name: 'loginReducer',

  initialState: {
    token: '',
    error: false,
  },

  reducers: {
    login(state, action) {
      console.log('Login')
      if (action.payload.status === 200) {
        state.token = action.payload.body.token
        state.error = false
      } else {
        state.token = ''
        state.error = true
      }
    },
    logout(state, action) {
      console.log('Logout')
      state.token = ''
      state.error = false
    },
  },
})

export const { login, logout } = loginSlice.actions
export default loginSlice.reducer
