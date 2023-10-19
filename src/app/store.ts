import { configureStore } from '@reduxjs/toolkit';
import { IntroState, introSlice } from '../features/introductionSlice';
import { PostsState, postsSlice } from '../features/postSlice';

export interface RootState {
  intro: IntroState;
  posts: PostsState;
}

export const store = configureStore({
  reducer: {
    intro: introSlice.reducer,
    posts: postsSlice.reducer,
  },
});
