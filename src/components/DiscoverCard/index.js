import React from 'react';
import GraphicIcon from '../../assets/graphic-icon.svg';
import DELETARMOCK from '../../assets/DELETAR-MOCK.svg';

import { api } from '../../services/api';
import '../../styles/components/discoverCard.scss';

export const DiscoverCard = () => {
  const [cardItem, setCardItem] = React.useState();

  React.useEffect(() => {
    const getDataFromApi = async () => {
      const response = await api.get('/volumes?q=A');
      console.log(response.data);
    }

    getDataFromApi();
  }, [])

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
        <img src={DELETARMOCK} alt="Just a Mock" />
      </div>
    </div>
  );
}