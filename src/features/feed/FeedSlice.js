import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'loading',
    feed: [],
    searchString: ''
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
    reducers: {
        setSearchString(state, action) {
            state.searchString = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFeed.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchFeed.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.posts = action.payload.data.children.map((post) => {
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

export const selectPosts = (state) => {
    const regex = new RegExp(".*" + state.feed.searchString + ".*", "i");
    if(state.feed.status === "loading") {
        return
    } else {
        return state.feed.posts.filter((post) => {
            return regex.test(post.title);
        });
    }
};

export const selectFeedStatus = (state) => state.feed.status;
export const selectSearchString = (state) => state.feed.searchString;
export const { setSearchString } = feedSlice.actions;

export default feedSlice.reducer;