import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/login/loginSlice'
import userReducer from '../features/user/userSlice'

export default configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
  },
})
