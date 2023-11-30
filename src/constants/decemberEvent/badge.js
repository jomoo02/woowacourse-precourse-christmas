const NONE = '없음';
const STAR = '별';
const TREE = '트리';
const SANTA = '산타';

const STAR_MIN_BENEFITS_AMOUNT = 5000;
const TREE_MIN_BENEFITS_AMOUNT = 10000;
const SATNA_MIN_BENEFTIS_AMOUNT = 20000;

const BADGE_TYPE = Object.freeze({
  none: NONE,
  star: STAR,
  tree: TREE,
  santa: SANTA,
});

const BADGE_MIN_CONDITION = Object.freeze({
  star: STAR_MIN_BENEFITS_AMOUNT,
  tree: TREE_MIN_BENEFITS_AMOUNT,
  santa: SATNA_MIN_BENEFTIS_AMOUNT,
});

export { BADGE_TYPE, BADGE_MIN_CONDITION };
