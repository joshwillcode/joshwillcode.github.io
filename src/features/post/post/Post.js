import React from 'react';
import Time from '../time/Time';
import VoteCount from '../voteCount/VoteCount';
import CommentCount from '../commentCount/CommentCount';

function Post({ title, subreddit, poster, url, body, comments }) {

    // conditionally render provided url as Img or Hyperlink
    const imgUrlRegEx = /.+\.(jpeg|jpg|png).*/;
    let content = '';
    if(url && imgUrlRegEx.test(url)) {
        content = (
            <div>
                <img role='content-image' src={url}></img>
            </div>
        )
    } else {
        content = (
            <div>
                <a role='content-link' href={url}>{url}</a>
            </div>
        )
    }

    return(
        <div>
            <div>
                <h2>{title}</h2>
                <div>
                    <div>{subreddit}</div>  
                    <div>{poster}</div>
                </div>
            </div>

            {content}

            {/* conditionally render body div if there is body text */}
            {body && (
                <div role='body'>
                    {body}
                </div>
            )}
            <div>
                <VoteCount/>
                <Time/>
                <CommentCount comments={comments}/>
            </div>

        </div>
    )
}

export default Post;