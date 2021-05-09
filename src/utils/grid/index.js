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
