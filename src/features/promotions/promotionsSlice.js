import { createSlice } from '@reduxjs/toolkit';
import { PROMOTIONS } from '../../app/shared/PROMOTIONS.js';

// declare initial state
const initialState = {
  promotionsArray: PROMOTIONS,
};

// create slice
const promotionsSlice = createSlice({
  name: 'promotions',
  initialState,
});

// export reducer
export const promotionsReducer = promotionsSlice.reducer;

export const selectFeaturedPromotion = (state) => {
  return state.promotions.promotionsArray.find(
    (promotion) => promotion.featured
  );
};
