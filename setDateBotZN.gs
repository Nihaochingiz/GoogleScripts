function setDateBotZN () {
  var list = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ВК-ЗН");
  var rowNum = list.getLastRow();
  var dateColumnNum = 6;
    var today =  new Date()

    var date =  today.toLocaleDateString('ru-RU')
  var cell = list.getRange(rowNum, dateColumnNum).getValue().toString().length;
console.log(date)
  while(cell == 0) {
    list.getRange(rowNum, dateColumnNum).setValue(date);
    rowNum--;
    cell = list.getRange(rowNum, dateColumnNum).getValue().toString().length;
  }

}
