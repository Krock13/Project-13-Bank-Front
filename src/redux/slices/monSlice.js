import { createSlice } from '@reduxjs/toolkit';

export const monSlice = createSlice({
  name: 'nomDuSlice',
  initialState: {
    // Mon état initial
  },
  reducers: {
    // Mes reducers
  },
});

// Génère les actions et exporte le reducer
export const { action1, action2 } = monSlice.actions;
export default monSlice.reducer;
