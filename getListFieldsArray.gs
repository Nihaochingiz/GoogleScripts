function getListsFieldsArray(listTech) {
  var listNum = 2;
  var listName = listTech.getRange(2,10).getValue();
  var listsFieldsArray = [];
  while (listName != "") {
    listsFieldsArray.push(
      new ListsFields(
        listTech.getRange(listNum,10).getValue(),
        listTech.getRange(listNum,11).getValue(),
        listTech.getRange(listNum,12).getValue(),
        listTech.getRange(listNum,13).getValue(),
        listTech.getRange(listNum,14).getValue(),
        listTech.getRange(listNum,15).getValue(),
        listTech.getRange(listNum,16).getValue(),
      )
    )
    listNum++;
    listName = listTech.getRange(listNum,10).getValue();
  }
  console.log(listsFieldsArray)
  return listsFieldsArray;
}

class ListsFields {
  constructor(listName, userName, cell, date, course, answer, lastRow) {
    this.listName = listName.toString();
    this.userName = userName.toString();
    this.cell = cell.toString();
    this.date = date;
    this.course = course;
    this.answer = Array.from(answer);
    this.lastRow = lastRow;
  }
}