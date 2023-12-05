const FIRSTDIGIT_ZERO = (target) => target[0] === '0';
const EXIST_WHITESPACE = (target) => target.includes(' ');

const VISIT_DATE_CONDITION = Object.freeze({
  firstDigitZero: FIRSTDIGIT_ZERO,
  existWhitespace: EXIST_WHITESPACE,
});

export default VISIT_DATE_CONDITION;
