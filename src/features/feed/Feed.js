import Post from '../post/post/Post';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFeed, selectFeed } from './FeedSlice';

import styles from './Feed.module.css';

function Feed({}) {
    const dispatch = useDispatch();
    const posts = useSelector(selectFeed);

    // initial load
    useEffect(() => {
        dispatch(fetchFeed());
    }, []);

    return(
        <div className={styles.container}>

            {
                posts.map((post) => {
                    return(
                        <Post
                            title={post.title}
                            subreddit={post.subreddit}
                            poster={post.author}
                            url={post.contentUrl}
                            body={post.bodyText}
                            comments={post.comments}
                            votes={post.score}
                            upvoted={true}/>
                    )
                    
                })
            }

            {/* <Post
            title="Post Title"
            subreddit="r/Subreddit"
            poster="u/Poster"
            url="https://static.wikia.nocookie.net/azumanga/images/a/a3/Yotsuba_infobox.jpeg"
            body=""
            comments='1200'
            votes='33045'
            upvoted={true}/>
            
            <Post
            title="Post Title"
            subreddit="r/Subreddit"
            poster="u/Poster"
            url="https://worksinprogress.co/issue/how-mathematics-built-the-modern-world/"
            body="This is body text"
            comments='20000000'
            votes='399211'
            upvoted={false}/> */}
        </div>
    )
}

export default Feed;