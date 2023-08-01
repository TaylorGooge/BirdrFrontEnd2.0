export function getSeasonMonthsHelper(date){
  const seasonsMonths= {
    0: 3,
    1: 3,
    2: 1,
    3: 1,
    4: 1,
    5: 0,
    6: 0,
    7: 0,
    8: 2,
    9: 2,
    10: 2,
    11: 3,
  };
  return seasonsMonths[date.getMonth()];
}