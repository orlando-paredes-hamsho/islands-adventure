import { makeObservable, observable, action } from 'mobx';
import { generateGrid, isSafe } from '../utils/grid';

class App {
    grid = [];

    height = 0;

    width = 0;

    flipCell = (x, y) => {
      if (!isSafe(x, y, this.grid)) return;
      const grid = [...this.grid];
      grid[y][x] = !grid[y][x];
      this.grid = grid;
    }

    constructor(height, width) {
      makeObservable(this, {
        grid: observable,
        height: observable,
        width: observable,
        flipCell: action,
      });
      this.height = (typeof height === 'number') ? height : this.height;
      this.width = (typeof height === 'number') ? width : this.width;
      this.grid = generateGrid(height, width);
    }
}

export default App;
export const app = new App(10, 10);
