import { configureStore } from '@reduxjs/toolkit';
import feedReducer from '../features/feed/FeedSlice';

export const store = configureStore({
  reducer: {
    feed: feedReducer
  },
});
