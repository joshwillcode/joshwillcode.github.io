import React from 'react';
import Post from '../post/post/Post';

import styles from './Feed.module.css';

function Feed({}) {
    return(
        <div className={styles.container}>
            <Post
            title="Post Title"
            subreddit="r/Subreddit"
            poster="u/Poster"
            url="https://static.wikia.nocookie.net/azumanga/images/a/a3/Yotsuba_infobox.jpeg"
            body=""/>
            
            <Post
            title="Post Title"
            subreddit="r/Subreddit"
            poster="u/Poster"
            url="https://worksinprogress.co/issue/how-mathematics-built-the-modern-world/"
            body="This is body text"/>
        </div>
    )
}

export default Feed;