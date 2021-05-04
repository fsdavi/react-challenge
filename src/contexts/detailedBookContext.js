import React, { createContext, useState } from 'react';

export const DetailedBookContext = createContext();

export const DetailedBookProvider = ({ children }) => {
  const [detailedBook, setDetailedBook] = useState();

  const handleChangeDetailedBook = (book) => {
    setDetailedBook(book.volumeInfo);
  };

  return (
    <DetailedBookContext.Provider value={{ detailedBook, handleChangeDetailedBook }}>
      {children}
    </DetailedBookContext.Provider>
  )
}