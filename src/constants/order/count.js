const MIN = 1;
const MAX = 20;
const IS_INTEGER = (count) => Number.isInteger(count);

const COUNT = Object.freeze({
  min: MIN,
  max: MAX,
  isInteger: IS_INTEGER,
});

export default COUNT;
