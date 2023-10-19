import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Post {
  id: number;
  title: string;
  img: string;
  description: string;
}

export interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action: PayloadAction<Post>) => {
      const post = action.payload;
      state.posts.splice(
        state.posts.findIndex((deleteThis) => deleteThis.id === post.id),
        1,
      );
    },
    editPost: (state, action: PayloadAction<Post>) => {
      const editedPost = action.payload;
      state.posts.forEach((post) => {
        if (post.id === editedPost.id) {
          post.title = editedPost.title;
          post.img = editedPost.img;
          post.description = editedPost.description;
        }
      });
    },
  },
});

export const { addPost, deletePost, editPost } = postsSlice.actions;
export default postsSlice.reducer;
