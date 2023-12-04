import OrderValidation from '../validations/order/OrderValidation.js';
import FORMAT from '../constants/order/format.js';
import MENU_BOARD from '../constants/menu/menuBoard.js';
import MAIN from '../constants/menu/main.js';
import DESSERT from '../constants/menu/dessert.js';

class Order {
  #order;

  constructor(order) {
    Order.#validate(order);
    this.#order = FORMAT.splitOrder(order);
  }

  getOrder() {
    return this.#order;
  }

  countMainMenus() {
    const mainMenus = Object.keys(MAIN);
    return this.#countSpecificMenu(mainMenus);
  }

  countDessertMenus() {
    const dessertMenus = Object.keys(DESSERT);
    return this.#countSpecificMenu(dessertMenus);
  }

  getTotalOrderAmount() {
    const totalOrderAmount = this.#order.reduce((amount, [menu, count]) => {
      return amount + MENU_BOARD[menu] * count;
    }, 0);
    return totalOrderAmount;
  }

  #countSpecificMenu(specificMenu) {
    const specificMenuCount = this.#order.reduce((totalCount, [menu, count]) => {
      if (specificMenu.includes(menu)) {
        return totalCount + count;
      }
      return totalCount;
    }, 0);

    return specificMenuCount;
  }

  static #validate(order) {
    const validation = new OrderValidation();
    validation.validate(order);
  }
}

export default Order;
