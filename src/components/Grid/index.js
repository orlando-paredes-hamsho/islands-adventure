import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../Cell';
import { isGrid } from '../../utils/grid';
import './Grid.css';

const Grid = ({ grid }) => {
  if (!isGrid(grid) || grid.length === 0) {
    return (<div className="grid" data-testid="grid">The World is empty</div>);
  }
  return (
    <div className="grid" data-testid="grid">
      {grid.map((line, y) => (
        <div className="line" key={y.toString()} data-testid="line">
          {line.map((filled, x) => (
            <Cell filled={filled} key={x.toString()} />))}
        </div>
      ))}
    </div>
  );
};

Grid.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)),
};

Grid.defaultProps = {
  grid: [],
};

export default Grid;
