## CSVImporterToGoogleSheets

**Context**:
Data analysts around the world 🌍, handle massive amounts of data to derive meaningful insights for their organization 📊. Among the tools they use, Google Sheets 📈 stands out due to its ease of use, accessibility, and collaborative features. However, many analysts have identified a recurring pain point: the cumbersome process of importing CSV files into Google Sheets repeatedly.

A typical week of an analyst in an e-commerce company 🛒 involves receiving multiple CSV files 📁 containing sales, inventory, customer feedback, and more. The data from these files needs to be meticulously analyzed and presented in the company’s weekly meetings. However, instead of diving directly into analysis, most analysts need to spend an inordinate amount of time just importing and structuring these CSV files into Google Sheets ⏳. This repetitive, time-consuming task reduces the efficiency of these professionals and delays the extraction of crucial insights 😫.

So, I've made a CSV Importer for Google Sheets that lets users drag and drop CSV files onto the Google Sheet. The moment they drop the CSV file, they can select which columns to import 🗂️.

**Features**:
- Importing to Sheet – After validation and mapping, data will be populated to chosen google shees, either appending to existing data or creating a new sheet 📥📋.
- Optimization for Large Files – Large datasets are common in analytics. This solution will effectively handle large CSV files (~15MB CSV file) without causing performance issues or prolonged waiting times 📈📦.

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
