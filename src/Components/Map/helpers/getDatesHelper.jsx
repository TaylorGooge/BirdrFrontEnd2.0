export function getDatesHelper(int) {
  let date = new Date();
  let now = new Date();
  const week = new Date(date.getFullYear(), date.getMonth(), date.getDate() - int);
  return [now, week]

}