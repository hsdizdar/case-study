import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ItemHeader = ({
  index, date, day, leagueName,
}) => (
  <div className="container">
    <div className="container__left">
      <div className="container__match-info">
        <p className="container__match-index">{index}</p>
        <p className="container__match-date">{date}</p>
        <p className="container__match-day">{day}</p>
        <p className="container__match-league-name">{leagueName}</p>
      </div>
      <p className="container__comment">Yorumlar</p>
    </div>
    <div className="container__right">
      <div className="container__item">
        <p className="container__text--empty" />
      </div>
      <div className="container__item">
        <p className="container__text">1</p>
        <p className="container__text">x</p>
        <p className="container__text">2</p>
      </div>
      <div className="container__item">
        <p className="container__text">Alt</p>
        <p className="container__text">Üst</p>
      </div>
      <div className="container__item">
        <p className="container__text">H1</p>
        <p className="container__text">1</p>
        <p className="container__text">x</p>
        <p className="container__text">2</p>
      </div>
      <div className="container__item">
        <p className="container__text">H2</p>
        <p className="container__text">1-X</p>
        <p className="container__text">X-2</p>
        <p className="container__text">2-X</p>
      </div>
      <div className="container__item">
        <p className="container__text">Var</p>
        <p className="container__text">Yok</p>
      </div>
      <div className="container__item">
        <p className="container__text--last-child">+99</p>
      </div>
    </div>
  </div>
);

ItemHeader.propTypes = {
  index: PropTypes.number,
  date: PropTypes.string,
  day: PropTypes.string,
  leagueName: PropTypes.string,
};

export default ItemHeader;
