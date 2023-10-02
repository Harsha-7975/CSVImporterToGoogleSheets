## CSVImporter

**Things to be done before running this all-new Jugaad app**:
1. Go to https://console.cloud.google.com/welcome
2. Create a new project
3. Select "APIs & Services" > "Library" from the left-hand sidebar. In the "Library" page, use the search bar to search for "Google Sheets API" and enable it
4. Go to the credentials section and click on Create credentials.
5. Click on Service Accounts and configure it. After it is done, you will get a mail and the creds.json file downloaded.(Store that creds.json file 😋, it is very very very very much needed)

**Your spreadsheet pre-works(bear with this please, this is a one-time work 🤨)**:
1. Go to the spreadsheet where you are working.
2. Click on Share and paste the service email in "Add people or groups" section and give it editor access(uncheck notify people), so that the sheets can be mainpulated.
3. Tadaaaaa🥳 all the preworks are done!!

## How to run:
1. Firstly, download all the code files and open it in a Node.js Environment (just do npm install and refer google for the setup)
2. Now, go to the index2.js file, there you will find creds.json file path, replace it with your creds.json path.
3. Open terminal and type nodemon index2.js
4. There you goooooo🥳, jugaad web app

![image](https://github.com/StackItHQ/stackit-hiring-assignment-Harsha-7975/assets/73788475/901b9de5-0442-4ff3-9075-4dcaa10ed533)

5. Now drag your .csv file, give your spreadsheetID, range , select the columns which you have to import AND BOOOOOOOOM, 

![image](https://github.com/StackItHQ/stackit-hiring-assignment-Harsha-7975/assets/73788475/50fe4a3b-8d14-434f-aa5c-074ad771c4ed)

6. Your spreadsheet will be filled with dataaaaaa😎😎😎
7. Guess what, this app is very much efficient as it can handle ~15MB csv files as well 💪.
