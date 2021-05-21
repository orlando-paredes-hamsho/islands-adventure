import {
  makeObservable, observable, action, computed, toJS,
} from 'mobx';
import {
  generateGrid, isSafe, countIslands, isGrid,
} from '../utils/grid';

class App {
    grid = [];

    height = 0;

    width = 0;

    loading = true;

    get dots() {
      return [].concat(...this.grid).reduce((a, b) => a + b, 0);
    }

    get islands() {
      const grid = toJS(this.grid);
      return countIslands(grid);
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

    setGrid = (grid) => {
      if (!isGrid(grid)) return;
      this.grid = grid;
    }

    setLoading = (loading) => {
      if (typeof loading !== 'boolean') return;
      this.loading = loading;
    }

    constructor(height, width) {
      makeObservable(this, {
        grid: observable,
        height: observable,
        width: observable,
        loading: observable,
        dots: computed,
        islands: computed,
        flipCell: action,
        changeHeight: action,
        changeWidth: action,
      });
      this.height = (typeof height === 'number') ? height : this.height;
      this.width = (typeof width === 'number') ? width : this.width;
      this.setGrid(generateGrid(height, width));
    }
}

export default App;
export const app = new App(10, 10);
