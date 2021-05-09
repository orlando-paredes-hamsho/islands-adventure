import React from 'react';
import { observer } from 'mobx-react-lite';
import { app } from '../../models/app';
import Grid from '../Grid';
import SizeInputContainer from '../SizeInputContainer';
import SizeInput from '../SizeInput';
import './styles.css';

const App = observer(() => (
  <div className="app" data-testid="app">
    <div className="counters">
      <p>
        Total number of dots on the grid:
        <b>{app.dots}</b>
      </p>
      <p>
        Total number of islands on the grid:
        <b>{app.islands}</b>
      </p>
    </div>
    <SizeInputContainer name="height">
      <SizeInput name="height" value={app.height} changeAction={app.changeHeight} />
    </SizeInputContainer>
    <SizeInputContainer name="width">
      <SizeInput name="width" value={app.width} changeAction={app.changeWidth} />
    </SizeInputContainer>
    <Grid grid={app.grid} clickAction={app.flipCell} />
  </div>
));

export default App;
