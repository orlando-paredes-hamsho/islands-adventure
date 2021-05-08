export const generateGrid = (height, width) => {
  if (height < 0 || width < 0) return [];
  return Array.from(Array(height), () => new Array(width).fill(false));
};

export const isGrid = (grid) => {
  if (!Array.isArray(grid)) return false;
  return grid.every((line) => (Array.isArray(line) && line.every((cell) => typeof cell === 'boolean')));
};
