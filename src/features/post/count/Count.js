import React from 'react';

// helper functions 
function roundToFirst(num) {
    // round rounds to the nearest integer, 
    // so we multiply, then divide by 10 to manipulate the decimal
    return (Math.round(num * 10)/10);
}

function Count({number}) {
    let prettyNum = 0;
    let negative = false;
    if (number < 0) {
        negative = true;
        number *= -1;
    }

    if(number >= 0 && number < 1000) {
        prettyNum = number;
        if(negative) {
            prettyNum *= -1;
        }
    } else if (number >= 1000 && number < 999950) {
        // remove 3 digits to later replace with 'k'
        prettyNum = number/1000
        prettyNum = roundToFirst(prettyNum);
        if(negative) {
            prettyNum *= -1;
        }
        prettyNum += 'K';
    } else if (number >= 999950 && number < 999950000) {
        // remove 6 digits to later replace with 'm'
        prettyNum = number/1000000
        prettyNum = roundToFirst(prettyNum);
        if(negative) {
            prettyNum *= -1;
        }
        prettyNum += 'M';
    }

    return(
        <div>
            {prettyNum}
        </div>
    )
}

export default Count;