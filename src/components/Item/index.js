import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import RateButton from '../RateButton';

import MatchContext from '../../context/MatchContext';

import './styles.scss';

const Item = ({
  id, clock, name, mbs, rates,
}) => {
  const { handleMatches } = useContext(MatchContext);

  const homeRates = Object.values(rates).find((rate) => rate.N === 'Maç Sonucu');
  const doubleChanceRates = Object.values(rates).find((rate) => rate.N === 'Çifte Şans');
  const lowerUpperRates = Object.values(rates).find((rate) => rate.N === 'Alt/Üst 2,5 Gol');

  const handleSelectMatch = (rate) => {
    handleMatches({
      id, name, mbs, rate: rate.O, rateId: `${id}${rate.ID}`,
    });
  };

  return (
    <div className="item-container">
      <div className="item-container__left">
        <div className="item-container__info">
          <p className="item-container__match-year">{id}</p>
          <p className="item-container__match-clock">{clock}</p>
          <p className="item-container__match-name">{name}</p>
        </div>
        <p className="item-container__comment">Yorumlar</p>
      </div>
      <div className="item-container__right">
        <div className="item-container__item">
          <p className="item-container__text">{mbs}</p>
        </div>
        <div className="item-container__item">
          {Object.values(homeRates.OC).map((rate) => (
            <RateButton key={rate.ID} id={`${id}${rate.ID}`} onClick={() => handleSelectMatch(rate)} rate={rate.O} />
          ))}
          <p className="container__text--empty" />
        </div>
        <div className="item-container__item">
          {Object.values(lowerUpperRates.OC).map((rate) => (
            <RateButton key={rate.ID} id={`${id}${rate.ID}`} onClick={() => handleSelectMatch(rate)} rate={rate.O} />
          ))}
        </div>
        <div className="item-container__item">
          <p className="container__text--empty" />
          <p className="container__text--empty" />
          <p className="container__text--empty" />
          <p className="container__text--empty" />
        </div>
        <div className="item-container__item">
          <p className="container__text--empty" />
          {Object.values(doubleChanceRates.OC).map((rate) => (
            <RateButton key={rate.ID} id={`${id}${rate.ID}`} onClick={() => handleSelectMatch(rate)} rate={rate.O} />
          ))}
        </div>
        <div className="item-container__item">
          <p className="item-container__text">Var</p>
          <p className="item-container__text">Yok</p>
        </div>
        <div className="item-container__item">
          <p className="item-container__text--last-child">+99</p>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.string,
  clock: PropTypes.string,
  name: PropTypes.string,
  mbs: PropTypes.string,
  rates: PropTypes.shape({
    ID: PropTypes.string,
    O: PropTypes.string,
  }),
};

export default Item;
