export const monthDay = () => {
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();
  return [currentMonth, currentDay];
}

// nyear return 0 for current year, 1 for next year
export const nyear = (month, day) => {
  const cmonthDay = monthDay();
  const cmonth = cmonthDay[0];
  const cday = cmonthDay[1];
  return ((+month < +cmonth) || ((+month === +cmonth) && (+day < +cday))) ? 1 : 0;
}

export const dayValid = (month, day) => {
  const month30 = new Set([4, 6, 9, 11]);
  if (day < 1 || day > 31 || (month30.has(month)) && day > 30
    || month === 2 && day > 29) return false;
  else return true;
}

export const yearClass = (year) => {
  if (year) return 'thisYear';
  return 'nextYear';
}

export const pad = (num) => {
  return num > 9 ? "" + num : "0" + num;
}

export const makeSortNum = (el) => {
  const padMonth = pad(el.month);
  const padDay = pad(el.day);
  const sortString = el.year + padMonth + padDay;
  return Number(sortString);
}

export const sortTask = (arr) => {
  const outArr = arr.sort((a, b) => {
    return makeSortNum(a) - makeSortNum(b);
  });
  return outArr;
}

export const monthLookUp = (index) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  return months[index - 1];
}
