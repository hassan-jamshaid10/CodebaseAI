import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../Api/api";


export const loadRepo = createAsyncThunk(
  "repo/loadRepo",
  async (repoUrl, thunkAPI) => {
    try {
      const response = await api.post(`/load_repo?repo_url=${encodeURIComponent(repoUrl)}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const askQuestion = createAsyncThunk(
  "repo/askQuestion",
  async (question, thunkAPI) => {
    const state = thunkAPI.getState();
    if (!state.repo.repo) {
      return thunkAPI.rejectWithValue("⚠️ Load a repository first!");
    }

    try {
      const response = await api.post("/ask", { question });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const repoSlice = createSlice({
  name: "repo",
  initialState: {
    repo: null,     
    answer: null,  
    loading: false,
    error: null,
  },
  reducers: {
    clearAnswer: (state) => {
      state.answer = null;
    },
    clearRepo: (state) => {
      state.repo = null;
      state.answer = null;
    },
  },
  extraReducers: (builder) => {
    builder
      
      .addCase(loadRepo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadRepo.fulfilled, (state, action) => {
        state.loading = false;
        state.repo = action.payload;
      })
      .addCase(loadRepo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

 
      .addCase(askQuestion.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(askQuestion.fulfilled, (state, action) => {
        state.loading = false;
        state.answer = action.payload.answer;
      })
      .addCase(askQuestion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearAnswer, clearRepo } = repoSlice.actions;
export default repoSlice.reducer;
