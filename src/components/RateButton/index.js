import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import MatchContext from '../../context/MatchContext';

import './styles.scss';

const RateButton = ({ id, rate, onClick }) => {
  const context = useContext(MatchContext);

  const active = context && context.matches.find((currentMatch) => currentMatch.rateId === id);

  return (
    <button className={active ? 'rate-button--active' : 'rate-button'} onClick={onClick}>
      {rate}
    </button>
  );
};

RateButton.propTypes = {
  id: PropTypes.string,
  rate: PropTypes.string,
  onClick: PropTypes.func,
};

export default RateButton;
