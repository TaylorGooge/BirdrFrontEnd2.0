import {getDateHelper} from './getDateHelper';

export function getDatesHelper(int){
  let date = new Date();
  let now = getDateHelper();
  const week = new Date(date.getFullYear(), date.getMonth(), date.getDate() -    int);
  return [now, week]
  
}