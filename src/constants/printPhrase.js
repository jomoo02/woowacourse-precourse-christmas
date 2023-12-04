import SPECIFIC_DATE from './specficDate.js';

const EVENT_MONTH = SPECIFIC_DATE.eventMonth;

const START = `안녕하세요! 우테코 식당 ${EVENT_MONTH}월 이벤트 플래너입니다.`;
const INPUT_VISIT_DATE = `${EVENT_MONTH}월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)`;
const INPUT_ORDER = '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)';

const OUTPUT_DATE_BENEFIT_PREVIEW = (day) => `${EVENT_MONTH}월 ${day}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`;

const ORDER_MENU = '<주문 메뉴>';
const OUTPUT_MENU = (menu, count) => `${menu} ${count}개`;
const BEFORE_DISCOUNT_TOTAL_ORDER_AMOUNT = '<할인 전 총주문 금액>';
const GIVEAWAY_MENU = '<증정 메뉴>';
const BENEFITS_HISTORY = '<혜택 내역>';
const OUTPUT_BENEFITS = (eventType, discountAmount) => `${eventType}: ${discountAmount}`;
const TOTAL_BENEFITS_AMOUNT = '<총혜택 금액>';
const AFTER_DISCOUNT_PAYMENT_AMOUNT = '<할인 후 예상 결제 금액>';
const DECEMBER_EVENT_BADGE = `<${EVENT_MONTH}월 이벤트 배지>`;

const PRINT_PHRASE = Object.freeze({
  start: START,
  inputVisitDate: INPUT_VISIT_DATE,
  inputOrder: INPUT_ORDER,
  outputMenu: OUTPUT_MENU,
  outputDateBenefitsPreview: OUTPUT_DATE_BENEFIT_PREVIEW,
  orderMenu: ORDER_MENU,
  beforeDiscountTotalOrderAmount: BEFORE_DISCOUNT_TOTAL_ORDER_AMOUNT,
  giveawayMenu: GIVEAWAY_MENU,
  benefitsHistory: BENEFITS_HISTORY,
  outputBenefits: OUTPUT_BENEFITS,
  totalBenefitsAmount: TOTAL_BENEFITS_AMOUNT,
  afterDiscountPaymentAmount: AFTER_DISCOUNT_PAYMENT_AMOUNT,
  decemberEventBadge: DECEMBER_EVENT_BADGE,
});

export default PRINT_PHRASE;
