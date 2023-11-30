import { BADGE_TYPE, BADGE_MIN_CONDITION } from '../constants/decemberEvent/badge.js';

class DecemberEventBadge {
  static giveBadge(totalBenefitsAmount) {
    const { star, tree, santa } = BADGE_MIN_CONDITION;

    if (totalBenefitsAmount >= santa) {
      return DecemberEventBadge.#giveSantaBadge();
    }
    if (totalBenefitsAmount >= tree) {
      return DecemberEventBadge.#giveTreeBadge();
    }
    if (totalBenefitsAmount >= star) {
      return DecemberEventBadge.#giveStarBadge();
    }
    return DecemberEventBadge.#notGiveBadge();
  }

  static #giveStarBadge() {
    return BADGE_TYPE.star;
  }

  static #giveTreeBadge() {
    return BADGE_TYPE.tree;
  }

  static #giveSantaBadge() {
    return BADGE_TYPE.santa;
  }

  static #notGiveBadge() {
    return BADGE_TYPE.none;
  }
}

export default DecemberEventBadge;
