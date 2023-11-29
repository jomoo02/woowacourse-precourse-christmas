function getWeekDates(startDay, endDay) {
  const CYCLE = 7;
  const dates = [];

  for (let day = startDay; day <= endDay; day += CYCLE) {
    dates.push(day);
  }
  return dates;
}

export default getWeekDates;
