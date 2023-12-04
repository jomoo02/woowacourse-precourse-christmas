import EVENT_TYPE from '../constants/decemberEvent/eventType.js';

class Benefit {
  #history;

  constructor() {
    this.#history = [];
  }

  addBenenfit(eventType, discountAmount) {
    this.#history.push({ eventType, discountAmount });
    return this;
  }

  getBenefitHistory() {
    return this.#history;
  }

  calculateTotalBenefitsAmount() {
    const totalBenefitsAmount = this.#history.reduce((totalAmount, { discountAmount }) => {
      return totalAmount + discountAmount;
    }, 0);
    return totalBenefitsAmount;
  }

  calculateAfterDiscountPaymentAmount(totalOrderAmount) {
    const totalDiscountAmount = this.#history
      .filter(({ eventType }) => eventType !== EVENT_TYPE.giveawayEvent)
      .reduce((totalAmount, { discountAmount }) => {
        return totalAmount + discountAmount;
      }, 0);
    return totalOrderAmount - totalDiscountAmount;
  }
}

export default Benefit;
