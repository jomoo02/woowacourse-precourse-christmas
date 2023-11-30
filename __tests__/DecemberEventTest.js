import DecemberEvent from '../src/models/DecemberEvent';

describe('12월 이벤트 테스트', () => {
  test('크리스마스 디데이 할인 이벤트는 1000원 부터 시작해 하루마다 100원씩 증가해서 할인한다. 크리스마스 이후에는 0원을 반환한다.', () => {
    const VISIT_DATES = ['1', '17', '25', '26'];
    const OUTPUTS = [1000, 2600, 3400, 0];

    VISIT_DATES.forEach((visitDate, index) => {
      const decemberEvent = new DecemberEvent(visitDate);

      expect(decemberEvent.applyChristmasDDayEvent()).toBe(OUTPUTS[index]);
    });
  });

  test('평일 할인 이벤트는 평일일 경우 (디저트 메뉴 개수 x 2023)원을 할인한다. 평일이 아니면 0을 반환한다.', () => {
    const VISIT_DATES = ['1', '3', '29', '5'];
    const DESSERT_COUNT = [3, 2, 5, 1];
    const OUTPUTS = [0, 4046, 0, 2023];

    VISIT_DATES.forEach((visitDate, index) => {
      const decemberEvent = new DecemberEvent(visitDate);

      expect(decemberEvent.applyWeekDayEvent(DESSERT_COUNT[index])).toBe(OUTPUTS[index]);
    });
  });

  test('주말 할인 이벤트는 주말일 경우 (메인 메뉴 개수 x 2023)원을 할인한다. 주말이 아니면 0을 반환한다', () => {
    const VISIT_DATES = ['1', '3', '29', '5'];
    const MAIN_COUNT = [3, 2, 5, 1];
    const OUTPUTS = [6069, 0, 10115, 0];

    VISIT_DATES.forEach((visitDate, index) => {
      const decemberEvent = new DecemberEvent(visitDate);

      expect(decemberEvent.applyWeekendEvent(MAIN_COUNT[index])).toBe(OUTPUTS[index]);
    });
  });

  test('특별 할인 이벤트는 이벤트 달력에 별이 있으면 1000원을 할인한다. 별이 없는 날인 경우 0을 반환한다.', () => {
    const VISIT_DATES = ['1', '3', '29', '5', '24'];
    const STAR_DATE_DISCOUNT = 1000;
    const NOT_STAR_DATE_DISCOUNT = 0;
    const OUTPUTS = [
      NOT_STAR_DATE_DISCOUNT,
      STAR_DATE_DISCOUNT,
      NOT_STAR_DATE_DISCOUNT,
      NOT_STAR_DATE_DISCOUNT,
      STAR_DATE_DISCOUNT,
    ];

    VISIT_DATES.forEach((visitDate, index) => {
      const decemberEvent = new DecemberEvent(visitDate);

      expect(decemberEvent.applySpecialEvent()).toBe(OUTPUTS[index]);
    });
  });

  test('증정 이벤트는 할인 전 총주문 금액이 12만 원 이상일 때, 샴페인 1개(25000)를 증정한다.', () => {
    const GIVEAWAY_AMOUNT = 25000;
    const NOT_GIVEAWAY_AMOUNT = 0;
    const TOTAL_ORDER_AMOUNTS = [5000, 100000, 120000, 1500000];
    const OUTPUTS = [NOT_GIVEAWAY_AMOUNT, NOT_GIVEAWAY_AMOUNT, GIVEAWAY_AMOUNT, GIVEAWAY_AMOUNT];

    TOTAL_ORDER_AMOUNTS.forEach((totalOrderAmount, index) => {
      expect(DecemberEvent.applyGiveawayEvent(totalOrderAmount)).toBe(OUTPUTS[index]);
    });
  });
});
