import React, { useContext } from 'react';
import { DetailedBookContext } from '../../contexts/detailedBookContext';
import { useHistory } from "react-router-dom";

import OpenedBookIcon from '../../assets/book-open-icon.svg';
import HeadphoneIcon from '../../assets/listen-icon.svg';
import ShareIcon from '../../assets/share-icon.svg';
import BackArrowIcon from '../../assets/back-arrow-icon.svg';

import '../../styles/pages/Details.scss';

export const DetailsPage = () => {
  const history = useHistory();
  const { detailedBook } = useContext(DetailedBookContext);

  const handleClickBackThaLastRoute = () => {
    history.goBack()
  }

  return (
    <div className="pageDetails">
      <div className="pageDetails-headerContainer">
        <button onClick={handleClickBackThaLastRoute}>
          <img src={BackArrowIcon} alt="Back to the last page" />
        </button>
        <img
          className="pageDetails-thumbnailBook"
          src={detailedBook?.imageLinks?.thumbnail}
          alt={detailedBook?.title}
        />
      </div>
      <div className="pageDetails-infoContainer">
        {detailedBook?.subtitle
          ? (<h1><strong>{detailedBook?.title}</strong>: {detailedBook?.subtitle}</h1>)
          : (<h1><strong>{detailedBook?.title}</strong></h1>)
        }
        <h2>{detailedBook?.authors}</h2>
        <p>{detailedBook?.description}</p>
      </div>
      <div className="pageDetails-bottomFloatingMenu">
        <a href={detailedBook?.previewLink}>
          <img src={OpenedBookIcon} alt="Click to Read the book" />
          <p>Read</p>
        </a>
        <a href={detailedBook?.previewLink}>
          <img src={HeadphoneIcon} alt="Click to listen the book" />
          <p>Listen</p>
        </a>
        <a href={detailedBook?.previewLink}>
          <img src={ShareIcon} alt="Click to share the book" />
          <p>Share</p>
        </a>
      </div>
    </div>
  );
};