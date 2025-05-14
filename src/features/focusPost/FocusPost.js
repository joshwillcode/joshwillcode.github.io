import React, { useEffect } from 'react';

import Post from '../post/post/Post';
import styles from './FocusPost.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeFocusPost, selectFocusPost, selectFocusPostStatus } from './FocusPostSlice';


function FocusPost({}) {

    const dispatch = useDispatch();
    const status = useSelector(selectFocusPostStatus);
    const focusPost = useSelector(selectFocusPost);

    const handleCloseClick = () => {
        dispatch(closeFocusPost());
    }

    if (status === 'closed') {
        return;
    } else {
        return (
        <div className={styles.modal} onClick={handleCloseClick}>
            <div className={styles.modalContent}>
                <Post
                    title={focusPost.title}
                    subreddit={focusPost.subreddit}
                    poster={focusPost.poster}
                    url={focusPost.url}
                    body={focusPost.body}
                    comments={focusPost.comments}
                    votes={focusPost.votes}
                    upvoted={focusPost.upvoted}
                    created={focusPost.created}
                />
            </div>
        </div>
    )
    }
    
}

export default FocusPost;