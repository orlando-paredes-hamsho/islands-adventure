export const generateGrid = (height = 0, width = 0) => {
  if (height <= 0 || width <= 0) return [];
  return Array.from(Array(height), () => new Array(width).fill(0));
};

export const isGrid = (grid) => {
  if (!Array.isArray(grid)) return false;
  return grid.every((line) => (
    Array.isArray(line) && line.every((cell) => (typeof cell === 'number' && !Number.isNaN(cell)))
  ));
};
export const isSafe = (x, y, grid) => (y > -1 && y < grid.length) && (x > -1 && x < grid[y].length);

export const isNewLand = (x, y, grid) => {
  if (!isSafe(x, y, grid)) return false;
  return grid[y][x] === 1;
};

export const explore = (x, y, grid) => {
  if (isNewLand(x, y, grid)) {
    grid[y][x] = 2; // eslint-disable-line no-param-reassign
    explore(x + 1, y, grid);
    explore(x, y + 1, grid);
    explore(x - 1, y, grid);
    explore(x, y - 1, grid);
  }
};
