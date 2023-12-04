import MENU_BOARD from '../menu/menuBoard.js';

const NONE = '없음';
const MENU = '샴페인';
const MENU_COUNT = '1개';
const GIVEAWAY_EVENT = `${MENU} ${MENU_COUNT}`;
const AMOUNT = MENU_BOARD[MENU];

const GIVEAWAY = Object.freeze({
  menu: MENU,
  none: NONE,
  giveawayString: GIVEAWAY_EVENT,
  amount: AMOUNT,
});

export default GIVEAWAY;
