import React, { useState, useEffect } from 'react';
import { SearchField } from '../../components/SearchField';
import { api } from '../../services/api';

import { SearchedBookContext } from '../../contexts/searchedBookContext';
import withoutThumb from '../../assets/withoutThumb.png';
import '../../styles/pages/Search.scss';

export const SearchResultsPage = () => {
  const { searchedBook } = React.useContext(SearchedBookContext);

  const [books, setBooks] = useState();
  const [startIndex, setStartIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const handleLoadMoreBooks = () => {
    const booksLeft = totalItems - books.length;
    if (booksLeft > 9) {
      setStartIndex(startIndex => startIndex + 9);
      return
    };

    setStartIndex(startIndex => startIndex + booksLeft);
  }

  useEffect(() => {
    api.get(
      `volumes?q=${searchedBook}&startIndex=${startIndex}&maxResults=9`
    ).then(response => {
      let data = response.data;
      setBooks(data.items);
      setTotalItems(data.totalItems);
    }
    );
  }, [searchedBook]);

  useEffect(() => {
    if (startIndex !== 0) {
      api.get(
        `volumes?q=${searchedBook}&startIndex=${startIndex}&maxResults=9`
      ).then(response => {
        let data = response.data;
        setBooks(books => books.concat(data.items));
      }
      );
    }
  }, [startIndex]);

  return (
    <div className="pageSearchResults">
      <div className="pageSearchResults-container">
        <SearchField />

        <div className="pageSearchResults-gridBooks">
          {books && books.map(book => (
            <div key={book.id} >
              <a>
                {book?.volumeInfo?.imageLinks?.thumbnail
                  ? (<img src={book?.volumeInfo?.imageLinks?.thumbnail} alt={book?.volumeInfo?.title} />)
                  : (<img src={withoutThumb} alt={book?.volumeInfo?.title} />)
                }

              </a>
              <h1>{book.volumeInfo.title}</h1>
              <h2>by {book.volumeInfo.authors}</h2>
            </div>
          ))}
        </div>

      </div>

      {books?.length > 1 && totalItems > books.length && (
        <button onClick={handleLoadMoreBooks} className="pageSearchResults-button">
          Load more
        </button>
      )}

    </div>
  );
}