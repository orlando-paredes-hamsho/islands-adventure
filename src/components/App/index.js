import React from 'react';
import { app } from '../../models/app';
import Grid from '../Grid';
import './App.css';

const App = () => (
  <div className="app" data-testid="app">
    <Grid grid={app.grid} />
  </div>
);

export default App;
