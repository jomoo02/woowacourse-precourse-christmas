import VisitDate from '../src/models/VisitDate.js';

describe('방문 날짜 테스트', () => {
  test('방문 날짜가 1보다 작은 값이면 예외 처리한다.', () => {
    expect(() => {
      new VisitDate('0');
    }).toThrow('날짜');

    expect(() => {
      new VisitDate('-2');
    }).toThrow('날짜');
  });

  test('방문 날짜가 31보다 큰 값이면 예외 처리한다.', () => {
    expect(() => {
      new VisitDate('32');
    }).toThrow('날짜');

    expect(() => {
      new VisitDate('40');
    }).toThrow('날짜');
  });

  test('방문 날짜가 정수가 아니면 예외 처리한다.', () => {
    expect(() => {
      new VisitDate('15.5');
    }).toThrow('날짜');

    expect(() => {
      new VisitDate('ten');
    }).toThrow('날짜');
  });

  test('방문 날짜가 01, 05 형식이면 예외 처리한다.', () => {
    expect(() => {
      new VisitDate('01');
    }).toThrow('날짜');

    expect(() => {
      new VisitDate('05');
    }).toThrow('날짜');
  });

  test('방문 날짜에 공백이 있으면 예외 처리한다.', () => {
    expect(() => {
      new VisitDate(' 10');
    }).toThrow('날짜');

    expect(() => {
      new VisitDate('10 ');
    }).toThrow('날짜');

    expect(() => {
      new VisitDate('1 0');
    }).toThrow('날짜');
  });

  test('방문 날짜가 평일인지 확인한다.', () => {
    const DATE = ['1', '3'];
    const IS_WEEKDAY = true;
    const IS_NOT_WEEKDAY = false;
    const OUTPUTS = [IS_NOT_WEEKDAY, IS_WEEKDAY];

    DATE.forEach((date, index) => {
      const vistDate = new VisitDate(date);

      expect(vistDate.isWeekday()).toBe(OUTPUTS[index]);
    });
  });

  test('방문 날짜가 주말인지 확인한다.', () => {
    const DATE = ['8', '17'];
    const IS_WEEKEND = true;
    const IS_NOT_WEEKEND = false;
    const OUTPUTS = [IS_WEEKEND, IS_NOT_WEEKEND];

    DATE.forEach((date, index) => {
      const vistDate = new VisitDate(date);

      expect(vistDate.isWeekend()).toBe(OUTPUTS[index]);
    });
  });

  test('방문 날짜에 별이 있는지 확인한다.', () => {
    const DATE = ['1', '3', '11', '24', '25', '27'];
    const EXIST_STAR = true;
    const NOT_EXIST_STAR = false;
    const OUTPUTS = [NOT_EXIST_STAR, EXIST_STAR, NOT_EXIST_STAR, EXIST_STAR, EXIST_STAR, NOT_EXIST_STAR];

    DATE.forEach((date, index) => {
      const vistDate = new VisitDate(date);

      expect(vistDate.isDateExistStar()).toBe(OUTPUTS[index]);
    });
  });

  test('방문 날짜가 크리스마스와 같거나 이전인지 확인한다.', () => {
    const DATE = ['1', '3', '11', '24', '25', '27', '30'];
    const EQUAL_AND_BEFORE_CHRISTMAS = true;
    const AFTER_CHRISTMAS = false;
    const OUTPUTS = [
      EQUAL_AND_BEFORE_CHRISTMAS,
      EQUAL_AND_BEFORE_CHRISTMAS,
      EQUAL_AND_BEFORE_CHRISTMAS,
      EQUAL_AND_BEFORE_CHRISTMAS,
      EQUAL_AND_BEFORE_CHRISTMAS,
      AFTER_CHRISTMAS,
      AFTER_CHRISTMAS,
    ];

    DATE.forEach((date, index) => {
      const vistDate = new VisitDate(date);

      expect(vistDate.isBeforeChristmas()).toBe(OUTPUTS[index]);
    });
  });

  test('방문 날짜가 크리스마스까지 며칠 남았는지 계산한다. 크리스마스 이후면 -1을 반환한다.', () => {
    const DATE = ['1', '3', '11', '24', '25', '27', '31'];
    const OUTPUTS = [24, 22, 14, 1, 0, -1, -1];

    DATE.forEach((date, index) => {
      const vistDate = new VisitDate(date);

      expect(vistDate.getDayUntilChristmas()).toBe(OUTPUTS[index]);
    });
  });
});
