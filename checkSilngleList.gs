function checkSingleList(listFieldsNumber, listsFieldsArray, techList, techLastRow) {
  var list = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(listsFieldsArray[listFieldsNumber].listName);
  if (list.getLastRow() > Number(listsFieldsArray[listFieldsNumber].lastRow)) {
    var prevLastRow = techList.getRange(listFieldsNumber + 2, 16).getValue();
    var singleLead = createSingleLead(listsFieldsArray[listFieldsNumber], list, prevLastRow + 1)
    techList.getRange(techLastRow+1,1).setValue(singleLead.userName);
    techList.getRange(techLastRow+1,2).setValue(singleLead.cell);
    techList.getRange(techLastRow+1,3).setValue(singleLead.date);
    techList.getRange(techLastRow+1,4).setValue(singleLead.course);
    techList.getRange(techLastRow+1,5).setValue(singleLead.answer);
    techList.getRange(listFieldsNumber + 2, 16).setValue(prevLastRow + 1);
    return true;
  }
  else {
    return false;
  }
}

function getChangedListNum(listsFieldsArray) {
  var arrayLength = listsFieldsArray.length;
  console.log(arrayLength)
  for(i = 0; i < arrayLength; i++) {
    console.log(listsFieldsArray[i].listName);
    var list = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(listsFieldsArray[i].listName);
    console.log(list.getLastRow())
    if (listsFieldsArray[i].lastRow < list.getLastRow()) {
      return i;
    }
  }
  return -1;
}