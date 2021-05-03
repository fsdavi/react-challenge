import React from 'react';
import SearchIcon from '../../assets/search-icon.svg';
import { useHistory } from 'react-router-dom';

import '../../styles/components/searchField.scss';

export const SearchField = () => {
  const history = useHistory();

  const [dataToSearch, setDataToSearch] = React.useState('');

  const handleChangeSearchInput = event => {
    setDataToSearch(event.target.value);
  }

  const handleSearchItemCLick = async () => {
    history.push(`searchResults/${dataToSearch}`);
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      console.log(dataToSearch)
    }
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