import Order from '../src/models/Order';

describe('주문 테스트', () => {
  test('주문에 공백이 있으면 예외 처리한다.', () => {
    expect(() => {
      new Order(' 양송이수프-2');
    }).toThrow('주문');

    expect(() => {
      new Order('양송이수프-2 ');
    }).toThrow('주문');

    expect(() => {
      new Order('양송이수프- 2');
    }).toThrow('주문');

    expect(() => {
      new Order('양송이수프 -2');
    }).toThrow('주문');

    expect(() => {
      new Order('양송이수프-2, 티본스테이크-2');
    }).toThrow('주문');
  });

  test('메뉴판에 없는 메뉴를 주문하면 예외 처리한다.', () => {
    expect(() => {
      new Order('해산물파스타-2,초코아이스크림-5');
    }).toThrow('주문');

    expect(() => {
      new Order('맛있는해산물파스타-3');
    }).toThrow('주문');
  });

  test('메뉴-개수 형식이 아니면 예외 처리한다.', () => {
    expect(() => {
      new Order('해산물파스타2');
    }).toThrow('주문');

    expect(() => {
      new Order('맛있는해산물파스타3,아이스크림/2');
    }).toThrow('주문');
  });

  test('주문한 메뉴의 개수가 1이상의 숫자가 아니면 예외 처리한다.', () => {
    expect(() => {
      new Order('해산물파스타-2,티본스테이크-0');
    }).toThrow('주문');

    expect(() => {
      new Order('아이스크림-2,바비큐립-,레드와인-3');
    }).toThrow('주문');

    expect(() => {
      new Order('아이스크림-2,바비큐립-ten,레드와인-3');
    }).toThrow('주문');
  });

  test('주문한 메뉴에 중복 메뉴가 있는 경우 예외 처리한다.', () => {
    expect(() => {
      new Order('해산물파스타-2,티본스테이크-1,해산물파스타-3');
    }).toThrow('주문');

    expect(() => {
      new Order('아이스크림-2,아이스크림-1');
    }).toThrow('주문');
  });

  test('주문한 메뉴의 총 개수가 20을 넘길 경우 예외 처리한다.', () => {
    expect(() => {
      new Order('해산물파스타-2,티본스테이크-1,아이스크림-20');
    }).toThrow('주문');

    expect(() => {
      new Order('아이스크림-2,티본스테이크-5,바비큐립-5,시저샐러드-5,샴페인-5');
    }).toThrow('주문');
  });

  test('음료만 주문한 경우 예외 처리한다.', () => {
    expect(() => {
      new Order('제로콜라-10');
    }).toThrow('주문');

    expect(() => {
      new Order('제로콜라-3,레드와인-1,샴페인-3');
    }).toThrow('주문');
  });

  test('총 주문 금액을 반환한다.', () => {
    const ORDERS = [
      '양송이수프-5,티본스테이크-1,아이스크림-2,제로콜라-3',
      '초코케이크-2',
      '크리스마스파스타-3,레드와인-1',
    ];
    const TOTAL_ORDER_AMOUNTS = [104000, 30000, 135000];

    ORDERS.forEach((order, index) => {
      const totalOrderAmount = new Order(order).getTotalOrderAmount();

      expect(totalOrderAmount).toBe(TOTAL_ORDER_AMOUNTS[index]);
    });
  });

  test('주문한 메뉴 중 메인 메뉴의 개수를 반환한다.', () => {
    const ORDERS = [
      '양송이수프-5,티본스테이크-1,아이스크림-2,제로콜라-3',
      '초코케이크-2',
      '크리스마스파스타-3,레드와인-1',
    ];
    const MAIN_MENUS_COUNTS = [1, 0, 3];

    ORDERS.forEach((order, index) => {
      const mainMenuCount = new Order(order).countMainMenus();
      expect(mainMenuCount).toBe(MAIN_MENUS_COUNTS[index]);
    });
  });

  test('주문한 메뉴 중 디저트 메뉴의 개수를 반환한다.', () => {
    const ORDERS = [
      '양송이수프-5,티본스테이크-1,아이스크림-2,제로콜라-3',
      '초코케이크-2',
      '크리스마스파스타-3,레드와인-1',
    ];
    const DESSERT_MENUS_COUNTS = [2, 2, 0];

    ORDERS.forEach((order, index) => {
      const mainMenuCount = new Order(order).countDessertMenus();
      expect(mainMenuCount).toBe(DESSERT_MENUS_COUNTS[index]);
    });
  });
});
