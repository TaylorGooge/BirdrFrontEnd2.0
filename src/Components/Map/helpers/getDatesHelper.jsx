import {getDateHelper} from './getDateHelper';

export function getDatesHelper(int){
  let date = new Date();
  let now = getDateHelper();
  now = now.toISOString;
  const week = new Date(date.getFullYear(), date.getMonth(), date.getDate() -    int).toISOString();
  return [now, week]
  
}