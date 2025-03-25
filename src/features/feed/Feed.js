import React from 'react';
import Post from '../post/Post';

import styles from './Feed.module.css';

function Feed({}) {
    return(
        <div className={styles.container}>
            <Post/>
        </div>
    )
}

export default Feed;