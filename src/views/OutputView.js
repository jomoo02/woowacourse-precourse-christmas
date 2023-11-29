import { Console } from '@woowacourse/mission-utils';
import PRINT_PHRASE from '../constants/printPhrase.js';
import { formatAmount, formatAmountMinus } from '../utils/formatAmount.js';
import GIVEAWAY_MENU from '../constants/giveawayMenu.js';
import EVENT_TYPE from '../constants/eventType.js';
import CONDITION from '../constants/condition.js';

const OutputView = {
  printDateBenefitsPreview(day) {
    Console.print(`${PRINT_PHRASE.outputDateBenefitsPreview(day)}\n`);
    return this;
  },

  printMenu(order) {
    const { orderMenu, outputMenu } = PRINT_PHRASE;

    Console.print(orderMenu);
    order.forEach(({ menu, count }) => Console.print(outputMenu(menu, count)));
    Console.print('');
    return this;
  },

  printBeforeDiscountTotalOrderAmount(orderAmount) {
    Console.print(PRINT_PHRASE.beforeDiscountTotalOrderAmount);
    Console.print(`${formatAmount(orderAmount)}\n`);
    return this;
  },

  printGiveaway(giveaway) {
    Console.print(PRINT_PHRASE.giveawayMenu);

    if (giveaway) {
      Console.print(`${GIVEAWAY_MENU.giveaway}\n`);
      return this;
    }
    Console.print(`${GIVEAWAY_MENU.none}\n`);
    return this;
  },

  printBenefitsHistory(history) {
    const { benefitsHistory, outputBenefits } = PRINT_PHRASE;

    Console.print(benefitsHistory);

    if (CONDITION.notExistBenefitsHistory(history)) {
      Console.print(`${EVENT_TYPE.none}\n`);
      return this;
    }
    history.forEach(({ eventType, discountAmount }) => {
      Console.print(outputBenefits(eventType, formatAmountMinus(discountAmount)));
    });
    Console.print('');
    return this;
  },

  printTotalBenefitsAmount(benefitsAmount) {
    Console.print(PRINT_PHRASE.totalBenefitsAmount);

    if (CONDITION.notReceiveBenefits(benefitsAmount)) {
      Console.print(`${formatAmount(benefitsAmount)}\n`);
      return this;
    }
    Console.print(`${formatAmountMinus(benefitsAmount)}\n`);
    return this;
  },

  printAfterDiscountPaymentAmount(paymentAmount) {
    Console.print(PRINT_PHRASE.afterDiscountPaymentAmount);
    Console.print(`${formatAmount(paymentAmount)}\n`);
    return this;
  },

  printEventBadge(eventBadge) {
    Console.print(PRINT_PHRASE.eventBadge);
    Console.print(eventBadge);
    return this;
  },
};

export default OutputView;
