import { createSlice, configureStore } from '@reduxjs/toolkit';

const healthSlice = createSlice({
  name: 'health',
  initialState: {
    data: [],
  },
  reducers: {
    addHealthData: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addHealthData } = healthSlice.actions;

const store = configureStore({
  reducer: {
    health: healthSlice.reducer,
  },
});

export default store;
