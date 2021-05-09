import React from 'react';
import { app } from '../../models/app';
import Grid from '../Grid';
import './styles.css';

const App = () => (
  <div className="app" data-testid="app">
    <Grid grid={app.grid} clickAction={app.flipCell} />
  </div>
);

export default App;
