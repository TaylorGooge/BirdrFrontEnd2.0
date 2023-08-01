export function winterSeasonHelper(date,obj){
 if ((date.getMonth()) === 11) {
    obj['end'] = new Date( date.getFullYear()+1, 1, 28);
  } else {
    obj['start'] = new Date( date.getFullYear()-1, 11, 1);
  }
  return obj
}