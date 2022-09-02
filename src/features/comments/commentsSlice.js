import { createSlice } from '@reduxjs/toolkit';
import { COMMENTS } from '../../app/shared/COMMENTS';

// declare and initialize the initial state of the slice
const initialState = {
  commentsArray: COMMENTS,
};

// declare and initialize the slice
const commentsSlice = createSlice({
  name: 'comments',
  initialState,
});

// export the slice's reducer
export const commentsReducer = commentsSlice.reducer;

// export the slice's actions
export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
  return state.comments.commentsArray.filter(
    (comment) => comment.campsiteId === parseInt(campsiteId)
  );
};
