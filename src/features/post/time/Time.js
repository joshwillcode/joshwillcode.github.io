import React from 'react';

function Time({ timestamp }) {

    let timeDisplay = 'can not find time';

    // current time since unix epoch (in ms -> sec)
    const currentTime = Date.now()/1000;
    const timeDifference = currentTime - timestamp;

    // second count constants
    const MINUTE = 60;
    const HOUR = 3600;
    const DAY = 86400;

    // time helper function
    const timeUnit = (seconds, unit) => {
        return Math.trunc(seconds/unit);
    }

    // determine how long ago post was made
    if (timeDifference < MINUTE) {
        timeDisplay = 'just now';
    } else if (timeDifference < MINUTE*2) {
        timeDisplay = 'a minute ago';
    } else if (timeDifference < HOUR) {
        timeDisplay = `${timeUnit(timeDifference, MINUTE)} minutes ago`;
    } else if (timeDifference < HOUR*2) {
        timeDisplay = 'an hour ago';
    } else if (timeDifference < DAY) {
        timeDisplay = `${timeUnit(timeDifference, HOUR)} hours ago`;
    } else if (timeDifference < DAY*2) {
        timeDisplay = 'a day ago';
    } else if (timeDifference) {
        timeDisplay = `${timeUnit(timeDifference, DAY)} days ago`;
    }

    if(!timestamp) {
        timeDisplay = 'no timestamp passed in';
    }

    return(
        <div>
            {timeDisplay}
        </div>
    )
}

export default Time;