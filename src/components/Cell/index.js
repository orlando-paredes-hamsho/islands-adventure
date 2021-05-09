import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import './styles.css';

const Cell = observer(({
  filled = 0, x = -1, y = -1, clickAction = () => {},
}) => {
  const cellType = filled ? 'land' : 'sea';
  return (
    <span
      className={`cell ${cellType}`}
      data-testid="cell"
      role="menuitem"
      onClick={() => clickAction(x, y)}
      onKeyPress={() => clickAction(x, y)}
      tabIndex={0}
      aria-label={cellType}
    />
  );
});

Cell.propTypes = {
  filled: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
  clickAction: PropTypes.func,
};

Cell.defaultProps = {
  filled: 0,
  x: -1,
  y: -1,
  clickAction: () => {},
};

export default Cell;
