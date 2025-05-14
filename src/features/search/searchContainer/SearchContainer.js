import React from 'react';
import Search from '../search/Search';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchString, setSearchString } from '../../feed/FeedSlice';
import feedReducers from '../../feed/FeedSlice';

function SearchContainer({}) {

    const dispatch = useDispatch();
    const searchText = useSelector(selectSearchString);

    const handleSearchText = (e) => {
        dispatch(setSearchString(e.target.value));
    }

    return(
        <Search 
            handleSearchText={handleSearchText}
            searchText={searchText}/>
    )
}

export default SearchContainer;