import { createSlice } from "@reduxjs/toolkit"

const initialState = { 
    status: 'closed',
    post: {
        title: '',
        subreddit: '',
        poster: '',
        url: '',
        body: '',
        comments: 0,
        votes: 0,
        upvoted: false,
        created: 0
    }
}

// TODO: add asyncThunk to fetch array of top level comments from this post
const focusPostSlice = createSlice({
    name: "focusPost",
    initialState,
    reducers: {
        openFocusPost(state, action) {
            state.post = action.payload;
            state.status = 'open';
        },
        closeFocusPost(state) {
            state.status = 'closed';
        }
    }
})

export const selectFocusPost = (state) => state.focusPost.post;
export const selectFocusPostStatus = (state) => state.focusPost.status;
export const { openFocusPost, closeFocusPost } = focusPostSlice.actions;

export default focusPostSlice.reducer;