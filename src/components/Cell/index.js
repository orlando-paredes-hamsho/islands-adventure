import React from 'react';
import PropTypes from 'prop-types';
import './Cell.css';

const Cell = ({ filled = false }) => {
  const cellType = filled ? 'land' : 'sea';
  return <span className={`cell ${cellType}`} data-testid="cell" />;
};

Cell.propTypes = {
  filled: PropTypes.bool,
};

Cell.defaultProps = {
  filled: false,
};

export default Cell;
