import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SearchedBookProvider } from './contexts/searchedBookContext';
import { DetailedBookProvider } from './contexts/detailedBookContext';

ReactDOM.render(
  <React.StrictMode>
    <SearchedBookProvider>
      <DetailedBookProvider>
        <App />
      </DetailedBookProvider>
    </SearchedBookProvider>
  </React.StrictMode>,
  document.getElementById('root')
);