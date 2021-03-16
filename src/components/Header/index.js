import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Header = ({ eventsCount }) => (
  <div className="header-container">
    <div className="header-container__left">
      <p className="header-container__events-count">
        {`Events Count: ${eventsCount}`}
      </p>
      <p className="header-container__comment">Yorumlar</p>
    </div>
    <div className="header-container__right">
      <p className="header-container__text--empty" />
      <div className="header-container__item">
        <p className="header-container__text">1</p>
        <p className="header-container__text">x</p>
        <p className="header-container__text">2</p>
      </div>
      <div className="header-container__item">
        <p className="header-container__text">Alt</p>
        <p className="header-container__text">Üst</p>
      </div>
      <div className="header-container__item">
        <p className="header-container__text">H1</p>
        <p className="header-container__text">1</p>
        <p className="header-container__text">x</p>
        <p className="header-container__text">2</p>
      </div>
      <div className="header-container__item">
        <p className="header-container__text">H2</p>
        <p className="header-container__text">1-X</p>
        <p className="header-container__text">X-2</p>
        <p className="header-container__text">2-X</p>
      </div>
      <div className="header-container__item">
        <p className="header-container__text">Var</p>
        <p className="header-container__text">Yok</p>
      </div>
      <div className="header-container__item">
        <p className="header-container__text--last-child">+99</p>
      </div>
    </div>
  </div>
);

Header.propTypes = {
  eventsCount: PropTypes.number,
};

export default Header;
