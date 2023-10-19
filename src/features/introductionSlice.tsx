import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IntroState {
  img: string;
  description: string;
}

const initialState: IntroState = {
  img: '',
  description: '',
};

export const introSlice = createSlice({
  name: 'intro',
  initialState,
  reducers: {
    saveIntro: (
      state,
      action: PayloadAction<{ img: string; description: string }>,
    ) => {
      const { img, description } = action.payload;
      state.img = img;
      state.description = description;
    },
  },
});

export const { saveIntro } = introSlice.actions;
export default introSlice.reducer;
