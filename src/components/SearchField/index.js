import React from 'react';
import SearchIcon from '../../assets/search-icon.svg';
import { useHistory } from 'react-router-dom';
import { SearchedBookContext } from '../../contexts/searchedBookContext';
import '../../styles/components/searchField.scss';

export const SearchField = () => {
  const history = useHistory();
  const { handleChangeSearchedBook } = React.useContext(SearchedBookContext);
  const [dataToSearch, setDataToSearch] = React.useState('');

  const handleChangeSearchInput = event => {
    setDataToSearch(event.target.value);
  }

  const handleSearchItemCLick = () => {
    let dataToSearchWithouSpaces = dataToSearch.replace(/\s+/g, '');
    handleChangeSearchedBook(dataToSearch);
    history.push(`/searchResults/${dataToSearchWithouSpaces}`);
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleSearchItemCLick();
    };
  }

  return (
    <>
      <div className="searchField-container">
        <button onClick={handleSearchItemCLick} className="searchField-button">
          <img src={SearchIcon} alt="Search icon" />
        </button>
        <input
          value={dataToSearch}
          className="searchField-input"
          placeholder="Search book"
          onChange={handleChangeSearchInput}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};