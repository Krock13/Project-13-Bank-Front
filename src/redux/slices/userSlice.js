/**
 * Redux slice for user data.
 * Manages state related to user profile information, including fetching and updating user data.
 */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching user profile data
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

// Async thunk for updating user profile data
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

// Reducer for managing user profile state
const userSlice = createSlice({
  name: 'user',
  initialState: {
    userProfile: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetUserProfile: (state) => {
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

export const { resetUserProfile } = userSlice.actions;
export default userSlice.reducer;
