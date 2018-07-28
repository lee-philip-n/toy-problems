//Russian Julian and Gregorian Leap Year Calendar
//before 1918, leap years were always divisible by 4 (Julian).
//on 1918, the calendar was being switched.  Feburary 14th was the 32nd day of the year.
//after 1918, leap years are divisble by 4 and not divisible by 100. And divisble by 400. (Gregorian)
//calculate the 256th day of the year in dd.mm.yy

const isLeapYearGregorian = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
};

const dayOfTheProgrammer = (inputYear) => {
  let daysInMonths = [];
  let totalDays = 0;
  let currentMonth = 0;

  if (inputYear < 1918) {
    daysInMonths = inputYear % 4 === 0 ? [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  } else if (inputYear === 1918) {
    daysInMonths = [31, 15, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  } else if (inputYear > 1918) {
    daysInMonths = isLeapYearGregorian(inputYear) ? [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }

  while (totalDays < 256) {
    totalDays += daysInMonths[currentMonth];
    currentMonth += 1;
  }

  const daysMonthBefore = totalDays - daysInMonths[currentMonth - 1];
  const day = String(256 - daysMonthBefore).length === 1 ? `0${256 - daysMonthBefore}` : `${256 - daysMonthBefore}`;
  const month = String(currentMonth).length === 1 ? `0${currentMonth}` : `${currentMonth}`;
  const year = String(inputYear);

  return `${day}.${month}.${year}`;
};

// console.log(dayOfTheProgrammer(2017));
// console.log(dayOfTheProgrammer(2016));
// console.log(dayOfTheProgrammer(1918));
// console.log(dayOfTheProgrammer(1800));
// console.log(dayOfTheProgrammer(1900));
// console.log(dayOfTheProgrammer(2100));
// console.log(dayOfTheProgrammer(2200));
// console.log(dayOfTheProgrammer(2300));
// console.log(dayOfTheProgrammer(2500));
