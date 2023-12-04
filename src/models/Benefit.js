import EVENT_TYPE from '../constants/decemberEvent/eventType.js';

class Benefit {
  #history;

  constructor() {
    this.#history = [];
  }

  addBenenfit(eventType, amount) {
    this.#history.push({ eventType, amount });
    return this;
  }

  getBenefitHistory() {
    return this.#history;
  }

  calculateTotalBenefitsAmount() {
    const totalBenefitsAmount = this.#history.reduce((totalAmount, { amount }) => {
      return totalAmount + amount;
    }, 0);
    return totalBenefitsAmount;
  }

  calculateAfterDiscountPaymentAmount(totalOrderAmount) {
    const discountAmount = this.#history
      .filter(({ eventType }) => eventType !== EVENT_TYPE.giveawayEvent)
      .reduce((totalAmount, { amount }) => {
        return totalAmount + amount;
      }, 0);
    return totalOrderAmount - discountAmount;
  }
}

export default Benefit;
