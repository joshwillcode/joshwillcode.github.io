import Post from '../post/post/Post';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFeed, selectFeedStatus, selectPosts } from './FeedSlice';

import styles from './Feed.module.css';

function Feed({}) {
    const dispatch = useDispatch();

    // initial load
    useEffect(() => {
        dispatch(fetchFeed());
    }, []);

    const posts = useSelector(selectPosts);
    const status = useSelector(selectFeedStatus);
    if(status === "loading") {
        return(
            <div className={styles.container}>Loading</div>
        )
    } else if(status === "fulfilled") {
        return(
            <div className={styles.container}>
                {
                    posts.map((post) => {
                        return(
                            <Post
                                title={post.title}
                                subreddit={post.subreddit}
                                poster={"u/" + post.author}
                                url={post.contentUrl}
                                body={post.bodyText}
                                comments={post.comments}
                                votes={post.score}
                                created={post.created}
                                upvoted={true}/>
                        )
                        
                    })
                }
            </div>
        )
    }
    
}

export default Feed;