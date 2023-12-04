import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserProfile = createAsyncThunk(
  'user/fetchUserProfile',
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/user/profile',
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Thunk pour la mise à jour du profil utilisateur
export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async (userData, { getState, dispatch, rejectWithValue }) => {
    const { token } = getState().auth;
    try {
      const response = await axios.put('http://localhost:3001/api/v1/user/profile', userData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(fetchUserProfile(token));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userProfile: null,
    loading: false,
    error: null,
  },
  reducers: {
    emptyUser: (state) => {
      state.userProfile = false;
    },
  },
  extraReducers: {
    [fetchUserProfile.pending]: (state) => {
      state.loading = true;
    },
    [fetchUserProfile.fulfilled]: (state, action) => {
      state.userProfile = action.payload.body;
      state.loading = false;
    },
    [fetchUserProfile.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { emptyUser } = userSlice.actions;
export default userSlice.reducer;
