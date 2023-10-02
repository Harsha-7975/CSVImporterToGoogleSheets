const express = require("express");
const { google } = require("googleapis");
const multer = require("multer");
const fs = require("fs");
//const csv = require("csv-parser");

const app = express();
const PORT = process.env.PORT || 1337;

app.set("view engine", "ejs");
//app.use(express.static(__dirname + "/public"));

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Load your Google Sheets credentials
const credentials = require("./creds.json");

app.get("/", async (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("csvFile"), async (req, res) => {

    const spreadsheetId = req.body.spreadsheetId;
    const range = req.body.range;
  
    const auth = new google.auth.GoogleAuth({
        keyFile:"./creds.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",

    });

    const csvData = req.file.buffer.toString();
     const rows = [];
     const values = csvData.split('\n').map(row => row.split(','));
    

    const selectedColumns = req.body.selectedColumns.map(Number);
    const filteredValues = values.map(row => row.filter((_, index) => selectedColumns.includes(index)));



    

    // Create a client instance for auth
    const client = await auth.getClient();

    // Instance of Google Sheets API
    const googlesheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetID = spreadsheetId;

    // Read and parse the CSV file from memory
    //  const csvData = req.file.buffer.toString();
    //  const rows = [];
    //  const values = csvData.split('\n').map(row => row.split(','));
    

    // Write rows to the spreadsheet
    await googlesheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetID,
      range: range,
      valueInputOption: "USER_ENTERED",
      resource: {
        values: filteredValues,
      },
    });

    res.redirect("/success");
  
});

app.get("/success", (req, res) => {
  res.render("success");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});