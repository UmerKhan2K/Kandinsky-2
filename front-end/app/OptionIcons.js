import React from 'react';
import Icon1 from "./Icon1.jpg";
import icon2 from './2.jpg'
import icon3 from './3.jpg'
const OptionIcons = () => {
  return (
    <div className="icon-container">
      <img src={Icon1} alt="Option Icon 1" width="100" height="100" />
      <img src={icon2} alt="Option Icon 2" width="100" height="100" />
      <img src="./3.jpg" alt="Option Icon 3" width="100" height="100" />
    </div>
  );
};

export default OptionIcons;
