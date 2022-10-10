import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'Learning Redux Toolkit', content: 'Insert dumb stuff here'},
  { id: '2', title: 'Slices...', content: 'Insert other dumb stuff here'}
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    /* This isn't mutating the state due to
    Immer.js being used under the hood.
    Only works within createSlice */
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content
          }
        }
      }
    }
  }
})

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions


export default postsSlice.reducer
