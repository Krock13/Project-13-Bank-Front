import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: null,
  },
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    updateProfile: (state, action) => {
      // Logique pour mettre à jour le profil
    },
  },
});

export const { setProfile, updateProfile } = userSlice.actions;
export default userSlice.reducer;
