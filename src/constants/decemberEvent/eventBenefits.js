import GIVEAWAY from './giveaway';

const NONE = 0;

const WEEKDAY = 2023;
const WEEKEND = 2023;
const SPECIAL = 1000;
const CHRISTMAS_D_DAY_START = 1000;
const CHRISTMAS_D_DAY_PER_DAY = 100;
const GIVEAWAY_AMOUNT = GIVEAWAY.amount;

const CHRISTMAS_D_DAY = (day) => CHRISTMAS_D_DAY_START + (25 - day - 1) * CHRISTMAS_D_DAY_PER_DAY;

const EVENT_BENEFITS = Object.freeze({
  none: NONE,
  weekday: WEEKDAY,
  weekend: WEEKEND,
  special: SPECIAL,
  christmasDDay: CHRISTMAS_D_DAY,
  giveawayAmount: GIVEAWAY_AMOUNT,
});

export default EVENT_BENEFITS;
