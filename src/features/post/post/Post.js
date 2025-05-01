import React from 'react';
import Time from '../time/Time';
import VoteCount from '../voteCount/VoteCount';
import CommentCount from '../commentCount/CommentCount';
import styles from './Post.module.css';

function Post({ title, subreddit, poster, url, body, comments, votes, upvoted, created }) {

    // conditionally render provided url as Img or Hyperlink
    const imgUrlRegEx = /.+\.(jpeg|jpg|png).*/;
    let content = '';
    if(url && imgUrlRegEx.test(url)) {
        content = (
            <div className={styles.contentImg}>
                <img role='content-image' src={url}></img>
            </div>
        )
    } else {
        content = (
            <div className={styles.contentLink}>
                <a role='content-link' href={url}>{url}</a>
            </div>
        )
    }

    return(
        <div className={styles.post}>
            <div className={styles.flex}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.subAndPost}>
                    <div className={styles.subreddit}>{subreddit}</div>  
                    <div className={styles.poster}>{poster}</div>
                </div>
            </div>

            {content}

            {/* conditionally render body div if there is body text */}
            {body && (
                <div role='body'>
                    {body}
                </div>
            )}
            <div className={styles.flex}>
                <div className={styles.votesAndTime}>
                    <VoteCount votes={votes} upvoted={upvoted}/>
                    <Time timestamp={created}/>
                </div>
                <CommentCount comments={comments}/>
            </div>

        </div>
    )
}

export default Post;