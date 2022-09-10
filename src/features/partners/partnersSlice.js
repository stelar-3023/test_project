import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { PARTNERS } from '../../app/shared/PARTNERS';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

// create a thunk to fetch the partners data from the server
export const fetchPartners = createAsyncThunk(
  'partners/fetchPartners',
  async () => {
    const response = await fetch(baseUrl + 'partners');
    if (!response.ok) {
      return Promise.reject('Unable to fetch, status: ' + response.status);
    }
    const data = await response.json();
    return data;
  }
);

// declare and initialize the initial state of the slice
const initialState = {
  partnersArray: [],
  isLoading: true,
  errMsg: '',
};

// declare and initialize the slice
const partnersSlice = createSlice({
  name: 'partners',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPartners.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPartners.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = '';
      state.partnersArray = mapImageURL(action.payload);
    },
    [fetchPartners.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : 'Fetch failed';
    },
  },
});

// export the slice's reducer
export const partnersReducer = partnersSlice.reducer;

export const selectAllPartners = (state) => {
  return state.partners.partnersArray;
};

export const selectFeaturedPartner = (state) => {
  return state.partners.partnersArray.find((partner) => partner.featured);
};
