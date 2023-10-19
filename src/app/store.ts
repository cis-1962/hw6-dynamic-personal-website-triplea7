import { configureStore } from '@reduxjs/toolkit';
import { IntroState, introSlice } from '../features/introductionSlice';

export interface RootState {
  intro: IntroState;
}

export const store = configureStore({
  reducer: {
    intro: introSlice.reducer,
  },
});
