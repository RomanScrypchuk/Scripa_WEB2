module.exports.DaysInMonth = function (year, month) {
    if([1,3,5,7,8,10,12].indexOf(month) > -1)
      return 31;
    else if ([4,6,9,11].indexOf(month) > -1)
      return 30;
    else if (month === 2)
      return year % 4 === 0 ? 29 : 28;
    else return "Data error";
  }
  