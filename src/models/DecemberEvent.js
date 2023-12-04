import VisitDate from './VisitDate.js';
import EVENT_BENEFITS from '../constants/decemberEvent/eventBenefits.js';
import CONDITION from '../constants/condition.js';

class DecemberEvent extends VisitDate {
  applyChristmasDDayEvent() {
    if (this.isBeforeChristmas()) {
      const dayUntilChristmas = this.getDayUntilChristmas();
      return EVENT_BENEFITS.christmasDDay(dayUntilChristmas);
    }
    return EVENT_BENEFITS.none;
  }

  applyWeekDayEvent(dessertCount) {
    if (this.isWeekday()) {
      return EVENT_BENEFITS.weekday * dessertCount;
    }
    return EVENT_BENEFITS.none;
  }

  applyWeekendEvent(mainCount) {
    if (this.isWeekend()) {
      return EVENT_BENEFITS.weekend * mainCount;
    }
    return EVENT_BENEFITS.none;
  }

  applySpecialEvent() {
    if (this.isDateExistStar()) {
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
