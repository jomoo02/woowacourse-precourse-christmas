import Benefit from './Benefit.js';
import EVENT_TYPE from '../constants/decemberEvent/eventType.js';
import DecemberEvent from './DecemberEvent.js';
import EVENT_CONDITION from '../constants/decemberEvent/condition.js';

class UserBenefit extends Benefit {
  applyEvent(decemberEvent, order) {
    const totalOrderAmount = order.getTotalOrderAmount();

    if (totalOrderAmount >= EVENT_CONDITION.minOrderAmount) {
      this.#checkChristmasDDayEvent(decemberEvent)
        .#checkWeekdayEvent(decemberEvent, order)
        .#checkWeekendEvent(decemberEvent, order)
        .#checkSpecialEvent(decemberEvent)
        .#checkGiveawayEvent(order);
    }
  }

  #checkChristmasDDayEvent(decemberEvent) {
    const christmasDDayEventAmount = decemberEvent.applyChristmasDDayEvent();

    if (christmasDDayEventAmount) {
      this.addBenenfit(EVENT_TYPE.christmasDDay, christmasDDayEventAmount);
    }
    return this;
  }

  #checkWeekdayEvent(decemberEvent, order) {
    const weekdayEventAmount = decemberEvent.applyWeekDayEvent(order.countDessertMenus());

    if (weekdayEventAmount) {
      this.addBenenfit(EVENT_TYPE.weekday, weekdayEventAmount);
    }
    return this;
  }

  #checkWeekendEvent(decemberEvent, order) {
    const weekendEventAmount = decemberEvent.applyWeekendEvent(order.countMainMenus());

    if (weekendEventAmount) {
      this.addBenenfit(EVENT_TYPE.weekend, weekendEventAmount);
    }
    return this;
  }

  #checkSpecialEvent(decemberEvent) {
    const specialEventAmount = decemberEvent.applySpecialEvent();

    if (specialEventAmount) {
      this.addBenenfit(EVENT_TYPE.special, specialEventAmount);
    }
    return this;
  }

  #checkGiveawayEvent(order) {
    const totalOrderAmount = order.getTotalOrderAmount();
    const giveawayEventAmount = DecemberEvent.applyGiveawayEvent(totalOrderAmount);

    if (giveawayEventAmount) {
      this.addBenenfit(EVENT_TYPE.giveawayEvent, giveawayEventAmount);
    }
    return this;
  }
}

export default UserBenefit;
