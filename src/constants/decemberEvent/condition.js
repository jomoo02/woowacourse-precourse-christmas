const MIN_ORDER_AMOUNT = 10000;
const IS_POSSIBLE_GIVEAWAY_EVENT = (totalOrderAmount) => totalOrderAmount >= 120000;

const EVENT_CONDITION = Object.freeze({
  minOrderAmount: MIN_ORDER_AMOUNT,
  isPossibleGiveawayEvent: IS_POSSIBLE_GIVEAWAY_EVENT,
});

export default EVENT_CONDITION;
