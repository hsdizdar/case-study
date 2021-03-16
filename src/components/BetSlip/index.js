import React, { useContext } from 'react';

import MatchContext from '../../context/MatchContext';

import './styles.scss';

const BetSlip = () => {
  const context = useContext(MatchContext);

  const matches = context && context.matches; // Destructing because of snapshot testing

  const totalAmount = matches && matches.length
    && matches.map((match) => parseFloat(match.rate)).reduce((a, b) => a * b);

  return (
    <div className="slip-container">
      {matches && matches.map((match) => (
        <div className="slip-container__match-item" key={match.id}>
          <p className="slip-container__text">
            {match.mbs}
            &nbsp;&nbsp;
            {`Kod: ${match.id}`}
            &nbsp;&nbsp;
            {`Maç: ${match.name}`}
            &nbsp;&nbsp;
            {`Oran: ${match.rate}`}
            &nbsp;&nbsp;
            {`MBS: ${match.mbs}`}
          </p>
        </div>
      ))}
      <p className="slip-container__amount">{`Toplam Tutar: ${totalAmount || 0}`}</p>
    </div>
  );
};

export default BetSlip;
