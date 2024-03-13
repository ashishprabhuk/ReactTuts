import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Post-1",
    content: "Content-1",
  },
  {
    id: 2,
    title: "Post-2",
    content: "Content-2",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, action) =>{
        // return [...state, action.payload];
        state.push(action.payload)
      },
      prepare: (title, content) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    }
  },
  
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postSlice.actions;
export default postSlice.reducer;
