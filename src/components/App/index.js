import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { app } from '../../models/app';
import { hashToLine } from '../../utils';
import API from '../../services/api';
import Grid from '../Grid';
import SizeInputContainer from '../SizeInputContainer';
import SizeInput from '../SizeInput';
import './styles.css';

const api = new API();

const App = observer(
  class App extends Component {
    async componentDidMount() {
      const result = await api.getLastBlock();
      if (result) {
        const blockResult = await api.getSingleBlock(result.hash);
        const grid = blockResult.tx.slice(0, app.height).map((value) => hashToLine(value.hash));
        app.setGrid(grid);
      }
      app.setLoading(false);
    }

    render() {
      if (app.loading) {
        return (
          <div className="app" data-testid="app">
            Loading
          </div>
        );
      }
      return (
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
      );
    }
  },
);

export default App;
