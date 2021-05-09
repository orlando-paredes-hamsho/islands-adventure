import {
  makeObservable, observable, action, computed, toJS,
} from 'mobx';
import {
  generateGrid, isSafe, explore, isNewLand,
} from '../utils/grid';
/* eslint-disable no-plusplus */
class App {
    grid = [];

    height = 0;

    width = 0;

    get dots() {
      return [].concat(...this.grid).reduce((a, b) => a + b, 0);
    }

    get islands() {
      const grid = toJS(this.grid);
      let islands = 0;
      for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
          if (isNewLand(x, y, grid)) {
            explore(x, y, grid);
            islands++;
          }
        }
      }
      return islands;
    }

    flipCell = (x, y) => {
      if (!isSafe(x, y, this.grid)) return;
      const grid = [...this.grid];
      grid[y][x] = 1 - grid[y][x];
      this.grid = grid;
    }

    changeWidth = (width) => {
      if (typeof width !== 'number' || Number.isNaN(width) || width < 0) return;
      this.width = width;
      this.grid = generateGrid(this.height, width);
    }

    changeHeight = (height) => {
      if (typeof height !== 'number' || Number.isNaN(height) || height < 0) return;
      this.height = height;
      this.grid = generateGrid(height, this.width);
    }

    constructor(height, width) {
      makeObservable(this, {
        grid: observable,
        height: observable,
        width: observable,
        dots: computed,
        islands: computed,
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
