import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import API from '../api/Api';
import LocalStorage from "@/utils/LocalStorage";
import initialState from "@/constants/initialState";

export const userLogin = createAsyncThunk<
  unknown, 
  { email: string; password: string },
  { rejectValue: unknown }
>(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const result = await API.postData('auth/login', { email, password });
      const response = result.data;
      console.log(response, 'response')
      if (response.login) {
        const data = response.token;
        LocalStorage.persisLogin(data.token, response.user);
        return data;
      } else {
        return thunkAPI.rejectWithValue(response); 
      }
    } catch (err) {
      console.error(err, "error");
      const errorMessage =
        err instanceof Error ? err : "An unexpected error occurred";
      return thunkAPI.rejectWithValue({ message: errorMessage });
    }
  }
);


export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState.login,
    reducers: {
      clearState(state) {
        Object.assign(state, initialState.login);
      },
      togglePassword(state, action) {
          state.toggle_password = action.payload;
      }
    },
    extraReducers: (builder) => {
      builder.addCase(userLogin.pending, (state) => {
          state.isFetching = true;
      });
      builder.addCase(userLogin.fulfilled, (state, { payload }) => {
          //console.log('fulfilled payload', payload);
          state.isFetching = false;
          state.isSuccess = true;
          state.user = payload;
      });
      builder.addCase(userLogin.rejected, (state, { payload }) => {
          //console.log('rejected payload', payload);
          state.isFetching = false;
          state.isError = true;
          console.log(payload, 'err')
          state.errorMessage = "Login failed. Please try again.";
      });
  }
})


export const { togglePassword, clearState } = authSlice.actions;
export default authSlice.reducer
