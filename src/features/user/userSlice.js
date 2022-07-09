import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'userReducer',

  initialState: {
    isLogged: false,
  },

  reducers: {
    userProfile(state, action) {
      state.isLogged = true
      state.id = action.payload.id
      state.email = action.payload.email
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.createdAt = action.payload.createdAt
      state.updatedAt = action.payload.updatedAt
      console.log('userProfile')
    },
    userReset(state, action) {
      console.log('userReset')
      state.isLogged = false
      state.id = ''
      state.email = ''
      state.firstName = ''
      state.lastName = ''
      state.createdAt = ''
      state.updatedAt = ''
    },
  },
})

export const { userProfile, userReset } = userSlice.actions
export default userSlice.reducer
