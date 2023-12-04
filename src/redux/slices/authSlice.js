import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchUserProfile } from './userSlice';

export const login = createAsyncThunk(
  'auth/login',
  async (userData, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', userData);
      const token = response.data.body.token;
      dispatch(fetchUserProfile(token));
      return response.data;
    } catch (error) {
      if (!error.response) {
        // Gérer les erreurs autres que les réponses du serveur, comme les erreurs réseau
        return rejectWithValue({
          message: 'Le serveur ne répond pas, veuillez réessayer plus tard.',
        });
      }
      if (error.response && error.response.status === 400) {
        // Personnaliser le message d'erreur pour les erreurs 400
        return rejectWithValue({
          message: 'Identifiant ou mot de passe invalide. Veuillez réessayer.',
        });
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    setLogout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
    },
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload.body.token;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setLogout, resetError } = authSlice.actions;
export default authSlice.reducer;
