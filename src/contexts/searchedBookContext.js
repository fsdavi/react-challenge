import React, { createContext, useState } from 'react';

export const SearchedBookContext = createContext();

export const SearchedBookProvider = ({ children }) => {
  const [searchedBook, setSearchedBook] = useState('');

  const handleChangeSearchedBook = (bookToSearch) => {
    setSearchedBook(bookToSearch);
  };

  return (
    <SearchedBookContext.Provider value={{ searchedBook, handleChangeSearchedBook }}>
      {children}
    </SearchedBookContext.Provider>
  )
}