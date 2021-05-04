import React from 'react';
import GraphicIcon from '../../assets/graphic-icon.svg';
import boockMock from '../../assets/mock-book1.svg';

import '../../styles/components/discoverCard.scss';

export const DiscoverCard = () => {

  return (
    <div className="discoverCard-container">
      <div className="discoverCard-infoContainer">
        <h1>Hooked</h1>
        <h2>Nir Eyal</h2>
        <div className="discoverCard-readNow">
          <img src={GraphicIcon} alt="Graphic Icon" />
          <p> <strong>120+</strong> Read Now </p>
        </div>
      </div>
      <div className="discoverCard-thumbnailContainer">
        <img src={boockMock} alt="Just a Mock" />
      </div>
    </div>
  );
}