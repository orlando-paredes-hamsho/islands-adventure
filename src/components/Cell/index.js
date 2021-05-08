import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import './Cell.css';

const Cell = observer(({ filled = false }) => {
  const cellType = filled ? 'land' : 'sea';
  return <span className={`cell ${cellType}`} data-testid="cell" />;
});

Cell.propTypes = {
  filled: PropTypes.bool,
};

Cell.defaultProps = {
  filled: false,
};

export default Cell;
