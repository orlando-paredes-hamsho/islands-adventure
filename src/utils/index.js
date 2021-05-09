const randomNumber = () => Math.floor(Math.random() * 100) + 1;

export const toInt = (str) => {
  const int = parseInt(str, 10);
  return (Number.isNaN(int)) ? 0 : int;
};

export default randomNumber;
