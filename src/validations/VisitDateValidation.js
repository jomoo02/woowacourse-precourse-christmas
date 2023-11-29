import ERROR_MESSAGE from '../constants/errorMessage.js';
import SPECIFIC_DATES from '../constants/specficDate.js';
import CONDITION from '../constants/condition.js';
import throwError from '../utils/throwError.js';

class VisitDateValidation {
  static validate(visitDate) {
    VisitDateValidation.#checkInRange(visitDate)
      .#checkWhitespace(visitDate)
      .#checkFirstDigitZero(visitDate)
      .#checkInteger(visitDate);
  }

  static #checkInRange(visitDate) {
    const { min, max } = SPECIFIC_DATES;
    const isNotInRange = visitDate < min || visitDate > max;

    if (isNotInRange) {
      throwError(`${ERROR_MESSAGE.visitDate} inRangeError`);
    }
    return this;
  }

  static #checkWhitespace(visitDate) {
    if (CONDITION.existWhitespace(visitDate)) {
      throwError(`${ERROR_MESSAGE.visitDate} whiteSpaceError`);
    }
    return this;
  }

  static #checkFirstDigitZero(visitDate) {
    if (CONDITION.firstDigitZero(visitDate)) {
      throwError(`${ERROR_MESSAGE.visitDate} firstDigitZeroError`);
    }
    return this;
  }

  static #checkInteger(visitDate) {
    const isNotInteger = !Number.isInteger(Number(visitDate));

    if (isNotInteger) {
      throwError(`${ERROR_MESSAGE.visitDate} notIntegerError`);
    }
    return this;
  }
}

export default VisitDateValidation;
