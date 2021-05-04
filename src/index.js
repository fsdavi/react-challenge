import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SearchedBookProvider } from './contexts/searchedBookContext';

ReactDOM.render(
  <React.StrictMode>
    <SearchedBookProvider>
      <App />
    </SearchedBookProvider>
  </React.StrictMode>,
  document.getElementById('root')
);