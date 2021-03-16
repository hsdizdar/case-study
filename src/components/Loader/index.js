import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Loader = ({ ref, children }) => <div ref={ref} className="loader">{children}</div>;

Loader.propTypes = {
  ref: PropTypes.node,
  children: PropTypes.node,
};

export default Loader;
