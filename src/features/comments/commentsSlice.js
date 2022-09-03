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
  reducers: {
    addComment: (state, action) => {
      console.log('addComment action.payload: ', action.payload);
      console.log('addComment state.commentsArray', state.commentsArray);
      const newComment = {
        id: state.commentsArray.length + 1,
        ...action.payload,
      }
      state.commentsArray.push(newComment);
    },
  },
});

// export the slice's reducer
export const commentsReducer = commentsSlice.reducer;

// export the slice's actions
export const { addComment } = commentsSlice.actions;


export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
  return state.comments.commentsArray.filter(
    (comment) => comment.campsiteId === parseInt(campsiteId)
  );
};
