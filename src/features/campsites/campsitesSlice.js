import { createSlice } from '@reduxjs/toolkit';
import { CAMPSITES } from '../../app/shared/CAMPSITES.js';

const initialState = {
  campsitesArray: CAMPSITES,
}

const campsitesSlice = createSlice({
  name: 'campsites',
  initialState,
});

export const selectAllCampsites = () => {
  return CAMPSITES;
};

export const campsitesReducer = campsitesSlice.reducer;

// export const selectRandomCampsite = () => {
//   return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// };

export const selectCampsiteById = (id) => {
  return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite = () => {
  return CAMPSITES.find((campsite) => campsite.featured);
};
