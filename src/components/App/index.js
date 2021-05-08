import React from 'react';
import Store from '../../models/app';
import Grid from '../Grid';
import './App.css';

const store = new Store(10, 10);

const App = () => (
  <div className="app" data-testid="app">
    <Grid grid={store.grid} />
  </div>
);

export default App;
