import React from 'react';

function Post({ title, subreddit, poster, url, body }) {

    // conditionally render provided url as Img or Hyperlink
    const imgUrlRegEx = /.+\.(jpeg|jpg|png).*/;
    let content = '';
    if(url && imgUrlRegEx.test(url)) {
        content = (
            <div>
                <img src={url}></img>
            </div>
        )
    } else {
        content = (
            <div>
                <a href={url}>{url}</a>
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
            

        </div>
    )
}

export default Post;