import React from 'react';
import Count from '../count/Count';
import commentBubble from '../../../assets/comment.png';

function CommentCount({comments}) {
    return(
        <div>
            <Count number={comments}/>
            <img 
                alt='Comments' 
                src={commentBubble}/>
        </div>
        
    );
}

export default CommentCount;