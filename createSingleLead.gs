function createSingleLead(listData, list, lastRow) {
  return singleLead = new SingleLead(
    list.getRange(lastRow,Number(listData.userName)).getValue(),
    list.getRange(lastRow,Number(listData.cell)).getValue(),
    Utilities.formatDate(new Date(list.getRange(lastRow,listData.date).getValue()), 'GMT+3', 'dd.MM / HH:mm'),
    listData.course,
    getAnswer(listData.answer, list, lastRow)
  )
}

class SingleLead {
  constructor(userName, cell, date, course, answer) {
    this.userName = userName.toString();
    this.cell = cell;
    this.date = date;
    this.course = course.toString();
    this.answer = answer;
  }
}

function getAnswer(answerColumnsArray, list, lastRow) {
  var length = answerColumnsArray.length;
  if (length > 0) {
    var answer = list.getRange(lastRow, answerColumnsArray[0]).getValue();
    for(i = 1; i < length; i++) {
      answer = answer + "; " + list.getRange(lastRow, answerColumnsArray[i]).getValue();
    }
    return answer;
  }
}