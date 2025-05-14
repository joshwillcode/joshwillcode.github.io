import React from 'react';
import './App.css';

// Import Components
import FocusPost from './features/focusPost/FocusPost';
import SearchContainer from './features/search/searchContainer/SearchContainer';
import Feed from './features/feed/Feed';

function App() {
  return (
    <div className="App">
      <SearchContainer/>
      <Feed/>
      <FocusPost/>
    </div>
  );
}

export default App;
