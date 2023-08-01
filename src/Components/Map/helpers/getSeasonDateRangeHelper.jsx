export function getSeasonDateRangeHelper(currDate, index){
  const seasonsDates = {
    3: { // winter  DEC - FEB
      'start': new Date( currDate.getFullYear(), 11, 1),
      'end': new Date( currDate.getFullYear(), 1, 28),
    },
    1: { // spring  MAR-MAY
      'start': new Date( currDate.getFullYear(), 2, 1),
      'end': new Date( currDate.getFullYear(), 4, 31),
    },
    0: { // summer  JUN-AUG
      'start': new Date( currDate.getFullYear(), 5, 1),
      'end': new Date( currDate.getFullYear(), 7, 31),
    },
    2: { // autmn  SEP-NOV
      'start': new Date( currDate.getFullYear(), 8, 1),
      'end': new Date( currDate.getFullYear(), 10, 30),
    },
  };
  return seasonsDates[index];
  
}