import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'loading',
    feed: {}
}

export const fetchFeed = createAsyncThunk(
    'feed/fetchFeed',
    async () => {
        const url = "https://www.reddit.com/r/dataisbeautiful.json";
        try {
            // fetch from chosen URL
            const response = await fetch(url);
            const jsonResponse = await response.json();
            // set state equal to jsonResponse
            console.log(jsonResponse);
            return jsonResponse;
        } catch (e) {
            console.log(e);
        }
    }
)


const feedSlice = createSlice({
    name: "feed",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFeed.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchFeed.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.feed = action.payload.data.children.map((post) => {
                    return ({
                        postId: post.data.name,
                        subreddit: post.data.subreddit_name_prefixed,
                        author: post.data.author,
                        title: post.data.title,
                        bodyText: post.data.selftext,
                        created: post.data.created,
                        score: post.data.score,
                        contentUrl: post.data.url_overridden_by_dest,
                        permalink: post.data.permalink,
                        comments: post.data.num_comments
                    })
                })
            })
    }
});

export default feedSlice.reducer;