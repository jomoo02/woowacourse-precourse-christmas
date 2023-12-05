import VisitDateValidation from '../validations/VisitDateValidation.js';
import SPECIFIC_DATES from '../constants/visitDate/specficDate.js';

class VisitDate {
  #date;

  constructor(date) {
    VisitDate.#validateDate(date);
    this.#date = Number(date);
  }

  getVisitDate() {
    return this.#date;
  }

  isWeekday() {
    return !SPECIFIC_DATES.weekend.includes(this.#date);
  }

  isWeekend() {
    return SPECIFIC_DATES.weekend.includes(this.#date);
  }

  isDateExistStar() {
    return SPECIFIC_DATES.specialDates.includes(this.#date);
  }

  isBeforeChristmas() {
    return this.#date <= SPECIFIC_DATES.christmas;
  }

  getDayUntilChristmas() {
    const AFTER_CHRISTMAS_DAY = -1;

    if (this.isBeforeChristmas()) {
      return SPECIFIC_DATES.christmas - this.#date;
    }
    return AFTER_CHRISTMAS_DAY;
  }

  static #validateDate(date) {
    VisitDateValidation.validate(date);
  }
}

export default VisitDate;
