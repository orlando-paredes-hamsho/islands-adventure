import React from 'react';
import { app } from '../../models/app';
import Grid from '../Grid';
import SizeInput from '../SizeInput';
import './styles.css';

const App = () => (
  <div className="app" data-testid="app">
    <SizeInput name="height" />
    <SizeInput name="width" />
    <Grid grid={app.grid} clickAction={app.flipCell} />
  </div>
);

export default App;
