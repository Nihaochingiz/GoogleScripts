function sumStringAvtoveb() {
    var utmSourceRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Лист2").getRange("B2");
    var utmSourceAddress = utmSourceRange.getValues();
    var avtovebRange= SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Лист2").getRange("A2");
    var avtovebAddress = avtovebRange.getValues();
    var utmMediumRange= SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Лист2").getRange("C2");
    var utmMediumAddress = utmMediumRange.getValues();
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var result = `${avtovebAddress}?utm_source=${utmSourceAddress}&utm_medium=${utmMediumAddress}`
    var sheet = ss.getSheetByName('Лист2');
    sheet.getRange('B7').setValue(result);
    //Удобные ссылки на автовебинар, нет необходимости писать ссылку вручную, необходимо написать необходимые данные в A2,B2,C2
    //И нажать на кнопку, ссылка будет в удобном виде и ее уже можно будет отправлять подписчикам
    
    }
    