import React from 'react';
import Count from '../count/Count';
import styles from './VoteCount.module.css';

function VoteCount({votes, upvoted}) {

    // Initial upvote status assignment
    let voteStatus = styles.noVote;
    if(upvoted === null) {
        voteStatus = styles.noVote;
    } else if(upvoted) {
        voteStatus = styles.upVote;
    } else {
        voteStatus = styles.downVote;
    }

    return(
        <div className={voteStatus} data-testid='voteCount'>
            <Count number={votes}/> 
        </div>
    )
}

export default VoteCount;