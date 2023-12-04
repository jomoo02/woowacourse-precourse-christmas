import DecemberEvent from './models/DecemberEvent.js';
import Order from './models/Order.js';
import UserBenefit from './models/UserBenefit.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import readRecursive from './utils/readRecursive.js';
import DecemberEventBadge from './models/DecemberEventBadge.js';

class App {
  async run() {
    const decemberEvent = await App.#createDecemberEvent();
    const order = await App.#createOrder();
    const userBenefit = App.#createUserBenefit(decemberEvent, order);

    this.#outputResult(decemberEvent, order, userBenefit);
  }

  static async #createDecemberEvent() {
    const decemberEvent = await readRecursive(InputView.readDate, DecemberEvent);
    return decemberEvent;
  }

  static async #createOrder() {
    const order = await readRecursive(InputView.readOrder, Order);
    return order;
  }

  static #createUserBenefit(decemberEvent, order) {
    const userBenefit = new UserBenefit();
    userBenefit.applyEvent(decemberEvent, order);
    return userBenefit;
  }

  #outputResult(decemberEvent, order, userBenefit) {
    this.#outputDateBenenfitsPreview(decemberEvent)
      .#outputOrder(order)
      .#outputBeforeDiscountTotalOrderAmount(order)
      .#ouputGiveawayMenu(order)
      .#outputBenefitHistory(userBenefit)
      .#outputTotalBenefitAmount(userBenefit)
      .#outputAfterDiscountPaymentAmount(userBenefit, order)
      .#outputDecemberEventBadge(userBenefit);
  }

  #outputDateBenenfitsPreview(decemberEvent) {
    OutputView.printDateBenefitsPreview(decemberEvent.getVisitDate());
    return this;
  }

  #outputOrder(order) {
    OutputView.printOrderMenu(order.getOrder());
    return this;
  }

  #outputBeforeDiscountTotalOrderAmount(order) {
    OutputView.printBeforeDiscountTotalOrderAmount(order.getTotalOrderAmount());
    return this;
  }

  #ouputGiveawayMenu(order) {
    OutputView.printGiveaway(DecemberEvent.applyGiveawayEvent(order.getTotalOrderAmount()));
    return this;
  }

  #outputBenefitHistory(userBenefit) {
    OutputView.printBenefitsHistory(userBenefit.getBenefitHistory());
    return this;
  }

  #outputTotalBenefitAmount(userBenefit) {
    OutputView.printTotalBenefitsAmount(userBenefit.calculateTotalBenefitsAmount());
    return this;
  }

  #outputAfterDiscountPaymentAmount(userBenefit, order) {
    OutputView.printAfterDiscountPaymentAmount(
      userBenefit.calculateAfterDiscountPaymentAmount(order.getTotalOrderAmount()),
    );
    return this;
  }

  #outputDecemberEventBadge(userBenefit) {
    OutputView.printEventBadge(DecemberEventBadge.giveBadge(userBenefit.calculateTotalBenefitsAmount()));
    return this;
  }
}

export default App;
