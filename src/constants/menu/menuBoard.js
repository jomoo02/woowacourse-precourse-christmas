import APPETIZER from './appetizer.js';
import MAIN from './main.js';
import DESSERT from './dessert.js';
import BEVERAGE from './beverage.js';

const MENU_BOARD = Object.freeze({
  ...APPETIZER,
  ...MAIN,
  ...DESSERT,
  ...BEVERAGE,
});

export default MENU_BOARD;
