function isBusinessHours(yearDayNumber, hourNumber){
    if (yearDayNumber % 7 === 0 || yearDayNumber % 7 === 6) {
      return false;
    }
    else if (hourNumber >= 9 && hourNumber <= 17){
      return true;
    }
    else {
      return false;
    }
  }
console.log(isBusinessHours(9, 10));