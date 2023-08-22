

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice'; // Update this import

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;