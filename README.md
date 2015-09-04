#Parse Maxmind minFraud Alert Email notifications to a Google Sheet

This script will parse Maxmind minFraud Alert email notifications, labeled 'Maxmind Review', to an active Google Sheet using Google Apps Script:

1. When you open a new Google Sheet, give it a descriptive name such as "Maxmind minFraud Alert Report".

2. Give the Column headers the following names: IP Address, MaxmindID, domain, billing location, data, txnID, Reason. This will move the relevant data from the Maxmind notifications to their respective columns when the parser is activated.

3. Click on Tools on the top menu bar, scroll down to Script editor and import .gs code.

4. Relaunch the Sheet and you will see 'Maxmind' on the top menu bar. Hover over the menu item, scroll down to 'Load Maxmind Emails' and click to run the parser.
