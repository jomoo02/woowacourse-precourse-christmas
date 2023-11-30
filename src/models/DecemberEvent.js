import VisitDate from './VisitDate.js';
import EVENT_BENEFITS from '../constants/decemberEvent/eventBenefits.js';
import CONDITION from '../constants/condition.js';

class DecemberEvent {
  #vistDate;

  constructor(visitDate) {
    this.#vistDate = new VisitDate(visitDate);
  }

  applyChristmasDDayEvent() {
    if (this.#vistDate.isBeforeChristmas()) {
      const dayUntilChristmas = this.#vistDate.getDayUntilChristmas();
      return EVENT_BENEFITS.christmasDDay(dayUntilChristmas);
    }
    return EVENT_BENEFITS.none;
  }

  applyWeekDayEvent(dessertCount) {
    if (this.#vistDate.isWeekday()) {
      return EVENT_BENEFITS.weekday * dessertCount;
    }
    return EVENT_BENEFITS.none;
  }

  applyWeekendEvent(mainCount) {
    if (this.#vistDate.isWeekend()) {
      return EVENT_BENEFITS.weekend * mainCount;
    }
    return EVENT_BENEFITS.none;
  }

  applySpecialEvent() {
    if (this.#vistDate.isDateExistStar()) {
      return EVENT_BENEFITS.special;
    }
    return EVENT_BENEFITS.none;
  }

  static applyGiveawayEvent(totalOrderAmount) {
    if (CONDITION.isPossibleGiveawayEvent(totalOrderAmount)) {
      return EVENT_BENEFITS.giveawayAmount;
    }
    return EVENT_BENEFITS.none;
  }
}

export default DecemberEvent;
