const randomNumber = () => Math.floor(Math.random() * 100) + 1;

export const toInt = (str) => {
  const int = parseInt(str, 10);
  return (Number.isNaN(int)) ? 0 : int;
};

export const isNumericChar = (c) => (/\d/.test(c));

export const hashArrayToLine = (hashArray) => hashArray.map((value) => {
  if (isNumericChar(value)) { return 1; } return 0;
});

export const hashToArray = (hash) => hash.split('');

export const hashToLine = (hash) => hashArrayToLine(hashToArray(hash));

export default randomNumber;
