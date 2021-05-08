import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import Grid from '../Grid';
import './App.css';

const App = ({ grid }) => (
  <div className="app" data-testid="app">
    <Grid grid={grid} />
  </div>
);

App.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)),
};

App.defaultProps = {
  grid: [],
};

export default observer(App);
