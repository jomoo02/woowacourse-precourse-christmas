import ERROR_MESSAGE from '../../constants/errorMessage.js';
import throwError from '../../utils/throwError.js';
import MenuValidation from './MenuValidation.js';
import CountValidation from './CountValidation.js';
import FORMAT from '../../constants/order/format.js';

class OrderValidation {
  validate(order) {
    this.#checkWhitespace(order);

    const splitedOrder = FORMAT.splitOrder(order);
    this.#checkFormatting(splitedOrder);

    const orderMenus = splitedOrder.map(([menu]) => menu);
    const orderCounts = splitedOrder.map(([, count]) => count);
    this.#checkMenuValidate(orderMenus).#checkCountValidate(orderCounts);
  }

  #checkWhitespace(order) {
    const isExistWhitespace = order.includes(' ');

    if (isExistWhitespace) {
      throwError(`${ERROR_MESSAGE.order} 공백이 존재하면 안됩니다.`);
    }
    return this;
  }

  #checkFormatting(splitedOrder) {
    splitedOrder.forEach((order) => {
      const isNotCorrectFormat = !FORMAT.isCorrectFormat(order);
      if (isNotCorrectFormat) {
        throwError(`${ERROR_MESSAGE.order} 메뉴-개수 형식으로 주문해야 합니다.`);
      }
    });
    return this;
  }

  #checkMenuValidate(menus) {
    new MenuValidation().validate(menus);
    return this;
  }

  #checkCountValidate(counts) {
    new CountValidation().validate(counts);
    return this;
  }
}

export default OrderValidation;
