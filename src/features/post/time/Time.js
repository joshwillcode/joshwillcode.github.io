import React from 'react';

function Time({ timestamp }) {

    let timeDisplay = 'can not find time';

    // current time since unix epoch (in ms -> sec)
    const currentTime = Date.now()/1000;
    const timeDifference = currentTime - timestamp;

    // determine how long ago post was made
    if (timeDifference < 60) {
        timeDisplay = 'just now';
    };



    return(
        <div>
            {timeDisplay}
        </div>
    )
}

export default Time;