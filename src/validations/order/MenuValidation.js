import ERROR_MESSAGE from '../../constants/errorMessage.js';
import throwError from '../../utils/throwError.js';
import MENU_BOARD from '../../constants/menu/menuBoard.js';
import BEVERAGE from '../../constants/menu/beverage.js';

class MenuValidation {
  validate(menus) {
    this.#checkOrderMenuExistMenuBoard(menus).#checkOnlyBeverage(menus).#checkDuplication(menus);
  }

  #checkOrderMenuExistMenuBoard(menus) {
    const totalMenus = Object.keys(MENU_BOARD);

    const isNotExist = !menus.every((menu) => totalMenus.includes(menu));

    if (isNotExist) {
      throwError(`${ERROR_MESSAGE.order} 존재하지 않는 메뉴입니다.`);
    }
    return this;
  }

  #checkOnlyBeverage(menus) {
    const beverages = Object.keys(BEVERAGE);
    const isOnlyBeverage = menus.every((menu) => beverages.includes(menu));

    if (isOnlyBeverage) {
      throwError(`${ERROR_MESSAGE.order} 음료만 주문할 수 없습니다.`);
    }
    return this;
  }

  #checkDuplication(menus) {
    const deduplicatedMenus = [...new Set(menus)];
    const isDuplication = deduplicatedMenus.length !== menus.length;

    if (isDuplication) {
      throwError(`${ERROR_MESSAGE.order} 중복된 메뉴를 주문할 수 없습니다.`);
    }
    return this;
  }
}

export default MenuValidation;
