'use client';

import { createSlice } from '@reduxjs/toolkit';

export const navSlice = createSlice({
  name: 'location',
  initialState: {
    value: 'Home',
  },
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { update } = navSlice.actions;

export default navSlice.reducer;
