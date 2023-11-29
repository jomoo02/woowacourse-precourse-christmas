const NOT_EXIST_BENEFITS_HISTORY = (history) => history.length === 0;
const NOT_RECEIVE_BENEFITS = (benefitsAmount) => benefitsAmount === 0;
const FIRSTDIGIT_ZERO = (target) => target[0] === '0';
const EXIST_WHITESPACE = (target) => target.includes(' ');

const CONDITION = Object.freeze({
  notExistBenefitsHistory: NOT_EXIST_BENEFITS_HISTORY,
  notReceiveBenefits: NOT_RECEIVE_BENEFITS,
  firstDigitZero: FIRSTDIGIT_ZERO,
  existWhitespace: EXIST_WHITESPACE,
});

export default CONDITION;
