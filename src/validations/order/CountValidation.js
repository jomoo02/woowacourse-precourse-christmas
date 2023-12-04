import COUNT from '../../constants/order/count.js';
import throwError from '../../utils/throwError.js';
import ERROR_MESSAGE from '../../constants/errorMessage.js';

class CountValidation {
  validate(counts) {
    let totalCount = 0;

    counts.forEach((count) => {
      this.#checkInteger(count).#checkMinCount(count);
      totalCount += count;
    });

    this.#checkMaximumCounts(totalCount);
  }

  #checkMaximumCounts(counts) {
    const isGreaterThanMax = counts > COUNT.max;

    if (isGreaterThanMax) {
      throwError(`${ERROR_MESSAGE.order} 한 번에 20개까지만 주문할 수 있습니다.`);
    }
    return this;
  }

  #checkMinCount(count) {
    const isSmallerThanMin = count < COUNT.min;

    if (isSmallerThanMin) {
      throwError(`${ERROR_MESSAGE.order} 주문할 메뉴의 개수는 1이상의 숫자를 입력해야 합니다.`);
    }
    return this;
  }

  #checkInteger(count) {
    const isNotInteger = !COUNT.isInteger(count);

    if (isNotInteger) {
      throwError(`${ERROR_MESSAGE.order} 주문할 메뉴의 개수는 정수여야 합니다.`);
    }
    return this;
  }
}

export default CountValidation;
