import React from 'react';
import HomeIcon from '../../assets/home-icon.svg';
import LibrariesIcon from '../../assets/libraries-icon.svg';
import ProfileIcon from '../../assets/profile-icon.svg';
import { useHistory } from "react-router-dom";

import '../../styles/components/bottomTabNavigator.scss'

export const BottomTabNavigator = () => {
  const history = useHistory();

  const handleClickBackToHome = () => {
    history.push('/');
  };

  return (
    <>
      <div className="bottomTabNav-container">
        <button onClick={handleClickBackToHome}>
          <img src={HomeIcon} alt="Click and go to home page" />
          <p className="bottomTabNav-activated">Home</p>
        </button>
        <button disabled>
          <img src={LibrariesIcon} alt="Click and go to Libraries page" />
          <p>Libraries</p>
        </button>
        <button disabled>
          <img src={ProfileIcon} alt="Click and go to Profile page" />
          <p>Profile</p>
        </button>
      </div>
    </>
  );
};