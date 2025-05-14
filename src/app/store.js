import { configureStore } from '@reduxjs/toolkit';
import feedReducer from '../features/feed/FeedSlice';
import focusPostReducer from '../features/focusPost/FocusPostSlice';

export const store = configureStore({
  reducer: {
    feed: feedReducer,
    focusPost: focusPostReducer
  },
});
