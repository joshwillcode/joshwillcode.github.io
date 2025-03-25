import React from 'react';
import styles from './Search.module.css';

function Search({ handleSearchText, searchText }) {
    return(
        <div className={styles.bar}>
            <div>
                RedditLite
            </div>
            <div>
                <input 
                    type="text"
                    placeholder='Search'
                    onChange={handleSearchText}
                    value={searchText}/>
            </div>
        </div>
    )
}

export default Search;