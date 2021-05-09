import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import Cell from '../Cell';
import './styles.css';

const Grid = observer(({ grid, clickAction }) => {
  if (grid.length === 0) return <div className="grid" data-testid="grid">The World is empty</div>;
  return (
    <div className="grid" data-testid="grid">
      {grid.map((line, y) => (
        <div className="line" key={y.toString()} data-testid="line">
          {line.map((filled, x) => (
            <Cell filled={filled} key={x.toString()} x={x} y={y} clickAction={clickAction} />))}
        </div>
      ))}
    </div>
  );
});

Grid.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)),
  clickAction: PropTypes.func,
};

Grid.defaultProps = {
  grid: [],
  clickAction: () => {},
};

export default Grid;
