function sendEmail() {
  var recipient = "mail@yandex.com";
  var recipient2 = "mail@yandex.com";
  var recipient3 = "mail@yandex.com";
  var recipient4 = "mail@yandex.com";
  var recipient5 = "mail@yandex.com";
  var recipients = ["mail@yandex.com","mail@yandex.com","mail@yandex.com","mail@yandex.com","mail@yandex.com","mail@yandex.com"]
  var subject = "Check out Apps Script";
  var body = "I just discovered Apps Script and it's so cool!";
  for (let i = 0; i < recipients.length; i++) {
  MailApp.sendEmail(recipients[i], subject, body);
  }
  
  
}
