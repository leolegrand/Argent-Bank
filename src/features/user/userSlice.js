import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogged: false,
  token: '',
  id: '',
  email: '',
  firstName: '',
  lastName: '',
  createdAt: '',
  updatedAt: '',
}

const userSlice = createSlice({
  name: 'userReducer',

  initialState: initialState,

  reducers: {
    userAuthentification(state, action) {
      state.token = action.payload.body.token
    },

    userLogin(state, action) {
      state.isLogged = true
      state.id = action.payload.id
      state.email = action.payload.email
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.createdAt = action.payload.createdAt
      state.updatedAt = action.payload.updatedAt
    },

    userUpdate(state, action) {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    },

    userLogout() {
      return initialState
    },
  },
})

export const { userLogin, userAuthentification, userUpdate, userLogout } =
  userSlice.actions
export default userSlice.reducer
