/**
 * Configuration of the Redux store.
 * Combines different reducers and sets up the application's state management.
 */

// Redux Toolkit for store configuration
import { configureStore } from '@reduxjs/toolkit';

// Import reducers for different features
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';

// Configure and export the Redux store
// auth and user reducers manage respective slices of application state
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});
