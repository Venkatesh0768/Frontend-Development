import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/UserReducer';

export const store = configureStore({
  reducer: {
    userReducer: usersReducer, 
  },
});

export default store;
