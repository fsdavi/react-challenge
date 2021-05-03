import React from 'react';
import HomeIcon from '../../assets/home-icon.svg';
import LibrariesIcon from '../../assets/libraries-icon.svg';
import ProfileIcon from '../../assets/profile-icon.svg';

import '../../styles/components/bottomTabNavigator.scss'

export const BottomTabNavigator = (page) => {

  return (
    <>
      <div className="bottomTabNav-container">
        <button>
          <img src={HomeIcon} />
          <p className="bottomTabNav-activated">Home</p>
        </button>
        <button>
          <img src={LibrariesIcon} />
          <p>Libraries</p>
        </button>
        <button>
          <img src={ProfileIcon} />
          <p>Profile</p>
        </button>
      </div>
    </>
  );
};