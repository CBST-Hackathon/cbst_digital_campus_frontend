import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchIssues = createAsyncThunk<string[], void, { rejectValue: string }>(
    "githubIssue/fetchIssues",
    async (_, thunkAPI) => {
      try {
        const response = await fetch("https://api.github.com/repos/github/hub/issues");
        const data = await response.json();
        const issues = data.map((issue: { title: string }) => issue.title);
        return issues;
      } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue("Failed to fetch issues.");
      }
    }
  );

export interface AuthInitialState {
    projectIssues: string[]
}
const initialState: AuthInitialState = {
    projectIssues: []
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addIssue: (state, action: PayloadAction<string>) => {
            state.projectIssues = [...state.projectIssues, action.payload]
        }
    }
})

export const { addIssue } = authSlice.actions
export default authSlice.reducer
