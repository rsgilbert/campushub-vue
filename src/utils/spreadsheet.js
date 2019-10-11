// const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');



var my_credentials = '{"installed":{"client_id":"308113504185-o9f1rq07dksolvkuamnsetlhbcgfn4ik.apps.googleusercontent.com","project_id":"quickstart-1570693005325","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"V8Iba_XUNOQKQ47HZ1UwlPAv","redirect_uris":["urn:ietf:wg:oauth:2.0:oob","http://localhost"]}}'
var my_token = '{"access_token":"ya29.Il-bB469f946iEQtm5egY339jxIc4tkA9sHJBFGv47R0HP8ei5rwd4cq0D90YWizBgHIOIveCWmf8haa1zU84MoJcItUazDXYWsbEAmlkHUorPoGRdokdsFV9_5o3T2mkw","refresh_token":"1/dJIEtTE1SmxI3lqNHL1MDg8H4aNxFRTYxps24vdno1o","scope":"https://www.googleapis.com/auth/spreadsheets.readonly","token_type":"Bearer","expiry_date":1570702037522}'


var myclient_id = '308113504185-o9f1rq07dksolvkuamnsetlhbcgfn4ik.apps.googleusercontent.com'
var my_client_secret = 'V8Iba_XUNOQKQ47HZ1UwlPAv'


// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

// function exported
exports.getRecords = getRecords()

function getRecords () {
    // Load client secrets from a local file.
    // fs.readFile('credentials.json', (err, content) => {
    //     if (err) return console.log('Error loading client secret file:', err);
    //     // Authorize a client with credentials, then call the Google Sheets API.
    //     authorize(JSON.parse(content), listMajors);
    // });
    authorize(JSON.parse(my_credentials), listMajors)
}

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function listMajors(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.get({
    // spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
    spreadsheetId: '1XY86vH01LVfA8CiSMFYhABrficbVytOdS0FojJDbsrE',
    // range: 'Class Data!A2:B',
    range: 'Sheet1!A:C',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    var records = []
    rows.forEach((row) => {
        records.push({
            name: row[0],
            price: row[1],
            src: row[2]
        })
    })
    console.log(records)
    return records
  });
}