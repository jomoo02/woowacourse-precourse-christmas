const ORDER_SPLIT_CHRACTER = ',';
const MENU_COUNT_SPLIT_CHARACTER = '-';
const ONE_MENU_ORDER_ARRAY_LENGTH = 2;

const SPLIT_MENU_AND_COUNT = (menuAndCount) => {
  const [menu, count] = menuAndCount.split(MENU_COUNT_SPLIT_CHARACTER);
  return [menu, Number(count)];
};

const SPLIT_ORDER = (order) =>
  order.split(ORDER_SPLIT_CHRACTER).map((menuAndCount) => SPLIT_MENU_AND_COUNT(menuAndCount));

const IS_CORRECT_FORMAT = (oneMenuOrder) => oneMenuOrder.length === ONE_MENU_ORDER_ARRAY_LENGTH;

const FORMAT = Object.freeze({
  splitOrder: SPLIT_ORDER,
  isCorrectFormat: IS_CORRECT_FORMAT,
});

export default FORMAT;
