import { configureStore } from '@reduxjs/toolkit';
import monSlice from './slices/monSlice';

export const store = configureStore({
  reducer: {
    // Les slices ici
    monSlice,
  },
});
