var sheet = SpreadsheetApp.getActiveSheet();
var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

function getEmails() {
  var label = GmailApp.getUserLabelByName("Maxmind");
  var threads = label.getThreads();
  var row = 2;
  for (var i = 0; i < threads.length; i++) {
    var messages=threads[i].getMessages();    
    var content = messages[0].getPlainBody();

// Initiate Maxmind fields parsing rule
 if (content) {
      var tmp;
   //IP Address
      tmp = content.match(/IP Address:\s*([0-9.]+)(\r?\n)/);
      var ipaddress = (tmp && tmp[1]) ? tmp[1].trim() : 'No IP address';
   //MaxmindID   
      tmp = content.match(/maxmindID:\s*([A-Z0-9]+)(\r?\n)/);
      var maxmindid = (tmp && tmp[1]) ? tmp[1].trim() : 'No MaxmindID';
   //domain
      tmp = content.match(/domain:\s*([A-Za-z0-9.]+)(\r?\n)/);
      var domain = (tmp && tmp[1]) ? tmp[1].trim() : 'No domain';
   //billing location 
      tmp = content.match(/billing location:\s*([A-Za-z0-9 -]+)(\r?\n)/);
      var billingloc = (tmp && tmp[1]) ? tmp[1] : 'No Billing Location';
   //date
      tmp = content.match(/date:\s*([A-Za-z0-9., ]+)(\r?\n)/);
      var date = (tmp && tmp[1]) ? tmp[1].trim() : 'No date';
   //txnID
      tmp = content.match(/txnID:\s*([A-Za-z0-9-_]+)(\r?\n)/);
      var txnid = (tmp && tmp[1]) ? tmp[1].trim() : 'No TxnID';
   //reason
      tmp = content.match(/Reason:\s*([A-Za-z0-9- ,]+)(\r?\n)/);
      var reason = (tmp && tmp[1]) ? tmp[1].trim() : 'No reason';
      
      sheet.appendRow([ipaddress, maxmindid, domain, billingloc, date, txnid, reason]);

    }
  }
}
//Intiate Maxmind on menu bar upon active sheet load
function onOpen() {
  var menuEntries = [ {name: "Load Maxmind Emails", functionName: "getEmails"} ];
  spreadsheet.addMenu("Maxmind", menuEntries);
}
