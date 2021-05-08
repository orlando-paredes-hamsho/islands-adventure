import { makeObservable, observable } from 'mobx';
import { generateGrid } from '../utils/grid';

class App {
    grid = [];

    height = 0;

    width = 0;

    constructor(height, width) {
      makeObservable(this, {
        grid: observable,
        height: observable,
        width: observable,
      });
      this.height = (typeof height === 'number') ? height : this.height;
      this.width = (typeof height === 'number') ? width : this.width;
      this.grid = generateGrid(height, width);
    }
}

export default App;
