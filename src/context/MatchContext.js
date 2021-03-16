import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const MatchContext = createContext();

export const MatchProvider = ({ children }) => {
  const [matches, setMatches] = useState([]);

  const handleMatches = (match) => {
    const duplicateRate = matches.find((currentMatch) => currentMatch.rateId === match.rateId);
    const duplicateMatch = matches.find((currentMatch) => currentMatch.id === match.id);

    if (duplicateRate) {
      const filteredMatch = matches.filter((m) => m.rateId !== match.rateId);
      setMatches(filteredMatch);
    } else if (duplicateMatch) {
      const filteredMatch = matches.filter((m) => m.id !== match.id);
      setMatches([...filteredMatch, match]);
    } else {
      setMatches([...matches, match]);
    }
  };

  const value = {
    matches,
    handleMatches,
  };

  return <MatchContext.Provider value={value}>{children}</MatchContext.Provider>;
};

export default MatchContext;

MatchProvider.propTypes = {
  children: PropTypes.node,
};
