function main() {
  var techList = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Tech");
  var lastRow = techList.getLastRow();
  var listsFieldsArray = getListsFieldsArray(techList);
  var listFieldsNumber = getChangedListNum(listsFieldsArray);
  console.log(listFieldsNumber);
  if (listFieldsNumber != -1) {
    console.log(checkSingleList(listFieldsNumber, listsFieldsArray, techList, lastRow));
  } else {
    return true;
  }
  Utilities.sleep(1000)
  main();
}
