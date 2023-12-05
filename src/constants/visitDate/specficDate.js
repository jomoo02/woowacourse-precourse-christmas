import getWeekDates from '../../utils/getWeekDates.js';

const EVENT_MONTH = 12;

const MIN = 1;
const MAX = 31;

const CHRISTMAS = 25;

const FRIDAY_START = 1;
const SATURDAY_START = 2;
const SPECIAL_START = 3;

const WEEKEND = [...getWeekDates(FRIDAY_START, MAX), ...getWeekDates(SATURDAY_START, MAX)];
const SPECAIL_DATES = [...getWeekDates(SPECIAL_START, MAX), CHRISTMAS];

const SPECIFIC_DATES = Object.freeze({
  min: MIN,
  max: MAX,
  weekend: WEEKEND,
  specialDates: SPECAIL_DATES,
  christmas: CHRISTMAS,
  eventMonth: EVENT_MONTH,
});

export default SPECIFIC_DATES;
