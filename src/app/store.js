'use client';

import { configureStore } from '@reduxjs/toolkit';
import navReducer from '../features/nav/navSlice';

export default configureStore({
  reducer: {
    location: navReducer,
  },
});
