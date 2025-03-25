import React from 'react';
import './App.css';

// Import Components
import SearchContainer from './features/search/SearchContainer';
import Feed from './features/feed/Feed';

function App() {
  return (
    <div className="App">
      <SearchContainer/>
      <Feed/>
    </div>
  );
}

export default App;
