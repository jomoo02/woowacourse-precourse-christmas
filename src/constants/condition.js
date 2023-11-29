const NOT_EXIST_BENEFITS_HISTORY = (history) => history.length === 0;
const NOT_RECEIVE_BENEFITS = (benefitsAmount) => benefitsAmount === 0;

const CONDITION = Object.freeze({
  notExistBenefitsHistory: NOT_EXIST_BENEFITS_HISTORY,
  notReceiveBenefits: NOT_RECEIVE_BENEFITS,
});

export default CONDITION;
