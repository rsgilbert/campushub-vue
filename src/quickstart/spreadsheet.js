var GoogleSpreadsheet = require('google-spreadsheet')
var async = require('async')

var doc = new GoogleSpreadsheet('1XY86vH01LVfA8CiSMFYhABrficbVytOdS0FojJDbsrE')
var sheet


var my_credentials = '{"installed":{"client_id":"308113504185-o9f1rq07dksolvkuamnsetlhbcgfn4ik.apps.googleusercontent.com","project_id":"quickstart-1570693005325","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"V8Iba_XUNOQKQ47HZ1UwlPAv","redirect_uris":["urn:ietf:wg:oauth:2.0:oob","http://localhost"]}}'
var my_token = '{"access_token":"ya29.Il-bB469f946iEQtm5egY339jxIc4tkA9sHJBFGv47R0HP8ei5rwd4cq0D90YWizBgHIOIveCWmf8haa1zU84MoJcItUazDXYWsbEAmlkHUorPoGRdokdsFV9_5o3T2mkw","refresh_token":"1/dJIEtTE1SmxI3lqNHL1MDg8H4aNxFRTYxps24vdno1o","scope":"https://www.googleapis.com/auth/spreadsheets.readonly","token_type":"Bearer","expiry_date":1570702037522}'


async.series([
    function setAuth(step) {
        var creds_json = {
            client_email: "",
            private_key: "",
        }
        doc.useServiceAccountAuth(creds_json, step)
    },
    function getInfoAndWorksheets(step) {
        doc.getInfo(function(err, info) {
            console.og("Loaded doc: " + info.title + ' by ' + info.author.email)
            sheet = info.worksheets[0]
            console.log('sheet 1: ' + sheet.title + ' ' + sheet.rowCount + " x " + sheet.colCount)
            step()
        });
    },
    function workingWithRows(step) {
      // google provides some query options
      sheet.getRows({
        offset: 1,
        limit: 20,
        orderby: 'col2'
      }, function( err, rows ){
        console.log('Read '+rows.length+' rows');
   
        // the row is an object with keys set by the column headers
        rows[0].colname = 'new val';
        rows[0].save(); // this is async
   
        // deleting a row
        rows[0].del();  // this is async
   
        step();
      });
    },
    function workingWithCells(step) {
      sheet.getCells({
        'min-row': 1,
        'max-row': 5,
        'return-empty': true
      }, function(err, cells) {
        var cell = cells[0];
        console.log('Cell R'+cell.row+'C'+cell.col+' = '+cell.value);
   
        // cells have a value, numericValue, and formula
        cell.value == '1'
        cell.numericValue == 1;
        cell.formula == '=ROW()';
   
        // updating `value` is "smart" and generally handles things for you
        cell.value = 123;
        cell.value = '=A1+B2'
        cell.save(); //async
   
        // bulk updates make it easy to update many cells at once
        cells[0].value = 1;
        cells[1].value = 2;
        cells[2].formula = '=A1+B1';
        sheet.bulkUpdateCells(cells); //async
   
        step();
      });
    },
    function managingSheets(step) {
      doc.addWorksheet({
        title: 'my new sheet'
      }, function(err, sheet) {
   
        // change a sheet's title
        sheet.setTitle('new title'); //async
   
        //resize a sheet
        sheet.resize({rowCount: 50, colCount: 20}); //async
   
        sheet.setHeaderRow(['name', 'age', 'phone']); //async
   
        // removing a worksheet
        sheet.del(); //async
   
        step();
      });
    }
  ], function(err){
      if( err ) {
        console.log('Error: '+err);
      }
  });