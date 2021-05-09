import { makeObservable, observable, action } from 'mobx';
import { generateGrid, isSafe } from '../utils/grid';

class App {
    grid = [];

    height = 0;

    width = 0;

    flipCell = (x, y) => {
      if (!isSafe(x, y, this.grid)) return;
      const grid = [...this.grid];
      grid[y][x] = 1 - grid[y][x];
      this.grid = grid;
    }

    changeWidth = (width) => {
      if (typeof width !== 'number' || width < 0) return;
      this.width = width;
      this.grid = generateGrid(this.height, width);
    }

    changeHeight = (height) => {
      if (typeof height !== 'number' || height < 0) return;
      this.height = height;
      this.grid = generateGrid(height, this.width);
    }

    constructor(height, width) {
      makeObservable(this, {
        grid: observable,
        height: observable,
        width: observable,
        flipCell: action,
        changeHeight: action,
        changeWidth: action,
      });
      this.height = (typeof height === 'number') ? height : this.height;
      this.width = (typeof width === 'number') ? width : this.width;
      this.grid = generateGrid(height, width);
    }
}

export default App;
export const app = new App(10, 10);
