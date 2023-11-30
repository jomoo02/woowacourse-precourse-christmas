const NONE = '없음';
const CHRISTMAS_D_DAY = '크리스마스 디데이 할인';
const WEEKDAY = '평일 할인';
const WEEKEND = '주말 할인';
const SPECIAL = '특별 할인';
const GIVEAWAY_EVENT = '증정 이벤트';

const EVENT_TYPE = Object.freeze({
  none: NONE,
  christmasDDay: CHRISTMAS_D_DAY,
  weekday: WEEKDAY,
  weekend: WEEKEND,
  special: SPECIAL,
  giveawayEvent: GIVEAWAY_EVENT,
});

export default EVENT_TYPE;
