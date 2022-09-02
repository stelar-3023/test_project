import { createSlice } from '@reduxjs/toolkit';
import { PARTNERS } from '../../app/shared/PARTNERS';

// declare and initialize the initial state of the slice
const initialState = {
  partnersArray: PARTNERS,
};

// declare and initialize the slice
const partnersSlice = createSlice({
  name: 'partners',
  initialState,
});

// export the slice's reducer
export const partnersReducer = partnersSlice.reducer;

export const selectAllPartners = (state) => {
  return state.partners.partnersArray;
};

export const selectFeaturedPartner = (state) => {
  return state.partners.partnersArray.find((partner) => partner.featured);
};
