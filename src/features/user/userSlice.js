import { createSlice } from '@reduxjs/toolkit';

// declare initial state
const initialState = {
  user: null,
};

// create slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      return {
        ...state,
        setCurrentUser: action.payload,
      };
    },
  },
});

// export the slice's selector
export const selectCurrentUser = (state) => state.user.currentUser;

// export the slice's actions
export const { setCurrentUser } = userSlice.actions;

// export slice's reducer
export const userReducer = userSlice.reducer;
