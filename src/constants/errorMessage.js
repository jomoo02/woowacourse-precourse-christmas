const HEADER = '[ERROR]';

const VISIT_DATE = '유효하지 않은 날짜입니다. 다시 입력해 주세요.';
const ORDER = '유효하지 않은 주문입니다. 다시 입력해 주세요.';

const ERROR_MESSAGE = Object.freeze({
  visitDate: `${HEADER} ${VISIT_DATE}`,
  order: `${HEADER} ${ORDER}`,
});

export default ERROR_MESSAGE;
