import Benefit from '../src/models/Benefit';

const addBenenfit = (benenfit, eventTypes, eventDiscounts) => {
  eventTypes.forEach((eventType, index) => {
    benenfit.addBenenfit(eventType, eventDiscounts[index]);
  });
};

describe('혜택 테스트', () => {
  test('혜택 내역을 반환한다.', () => {
    const EVENT_TYPES = ['특별 할인', '크리스마스 디데이 할인', '평일 할인'];
    const EVENT_DISCOUNT = [1000, 1200, 4046];
    const OUTPUTS = [
      { eventType: '특별 할인', amount: 1000 },
      { eventType: '크리스마스 디데이 할인', amount: 1200 },
      { eventType: '평일 할인', amount: 4046 },
    ];
    const benenfit = new Benefit();

    addBenenfit(benenfit, [...EVENT_TYPES], [...EVENT_DISCOUNT]);

    benenfit.getBenefitHistory().forEach((history, index) => {
      expect(history).toEqual(OUTPUTS[index]);
    });
  });

  test('총혜택 금액을 계산한다.', () => {
    const EVENT_TYPES = ['크리스마스 디데이 할인', '평일 할인', '증정 이벤트'];
    const EVENT_DISCOUNT = [1700, 4046, 25000];
    const OUTPUT = 30746;
    const benenfit = new Benefit();

    addBenenfit(benenfit, [...EVENT_TYPES], [...EVENT_DISCOUNT]);

    expect(benenfit.calculateTotalBenefitsAmount()).toBe(OUTPUT);
  });

  test('할인 후 예상 결제 금액을 계산한다.', () => {
    const EVENT_TYPES = ['크리스마스 디데이 할인', '평일 할인', '증정 이벤트'];
    const EVENT_DISCOUNT = [1700, 4046, 25000];
    const TOTAL_ORDER_AMOUNT = 50000;
    const OUTPUT = 44254;
    const benenfit = new Benefit();

    addBenenfit(benenfit, [...EVENT_TYPES], [...EVENT_DISCOUNT]);

    expect(benenfit.calculateAfterDiscountPaymentAmount(TOTAL_ORDER_AMOUNT)).toBe(OUTPUT);
  });
});
