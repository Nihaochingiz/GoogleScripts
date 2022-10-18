function sumString() {
    var keywordRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Лист1").getRange("B2");
    var keywordAddress = keywordRange.getValues();
    var tgCanalRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Лист1").getRange("A2");
    var tgCanalAddress = tgCanalRange.getValues();
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var result = tgCanalAddress  + "?" + "start" + "=" + keywordAddress
    var sheet = ss.getSheetByName('Лист1');
    sheet.getRange('B7').setValue(result);
    
    
    
    }
    