import DecemberEventBadge from '../src/models/DecemberEventBadge';

describe('12월 이벤트 배지 테스트', () => {
  test('값을 전달하지 않으면 "없음"을 반환한다.', () => {
    const badge = DecemberEventBadge.giveBadge();
    const NONE_BADGE = '없음';

    expect(badge).toBe(NONE_BADGE);
  });

  test('값이 5000보다 작으면 "없음"을 반환한다.', () => {
    const NONE_BADGE = '없음';

    expect(DecemberEventBadge.giveBadge(0)).toBe(NONE_BADGE);
    expect(DecemberEventBadge.giveBadge(4999)).toBe(NONE_BADGE);
  });

  test('값이 5000 이상 10000 미만일 경우 "별"배지를 반환한다.', () => {
    const STAR_BADGE = '별';

    expect(DecemberEventBadge.giveBadge(5000)).toBe(STAR_BADGE);
    expect(DecemberEventBadge.giveBadge(7400)).toBe(STAR_BADGE);
    expect(DecemberEventBadge.giveBadge(9999)).toBe(STAR_BADGE);
  });

  test('값이 10000 이상 20000 미만일 경우 "트리"배지를 반환한다.', () => {
    const TREE_BADGE = '트리';

    expect(DecemberEventBadge.giveBadge(10000)).toBe(TREE_BADGE);
    expect(DecemberEventBadge.giveBadge(15000)).toBe(TREE_BADGE);
    expect(DecemberEventBadge.giveBadge(19999)).toBe(TREE_BADGE);
  });

  test('값이 20000 이상일 경우 "산타"배지를 반환한다.', () => {
    const SANTA_BADGE = '산타';

    expect(DecemberEventBadge.giveBadge(20000)).toBe(SANTA_BADGE);
    expect(DecemberEventBadge.giveBadge(35000)).toBe(SANTA_BADGE);
    expect(DecemberEventBadge.giveBadge(999999)).toBe(SANTA_BADGE);
  });
});
