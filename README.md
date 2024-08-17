# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



### Font Awesome Icons Setup

```
1st Install Font Awesome : 

npm i --save @fortawesome/free-solid-svg-icons                                                   
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons

2nd Install Font Awesome : 

npm i --save @fortawesome/fontawesome-svg-core     

3rd Install Font Awesome :

npm i --save @fortawesome/react-fontawesome@latest    

```

### Google Sheets Setup

```

var sheetName = 'Sheet1'
var scriptProp = PropertiesService.getScriptProperties()

function intialSetup () {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost (e) {
  var lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    var sheet = doc.getSheetByName(sheetName)

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    var nextRow = sheet.getLastRow() + 1

    var newRow = headers.map(function(header) {
      return header === 'timestamp' ? new Date() : e.parameter[header]
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}

```

### Contact form setup

```
const formData = new FormData(e.target);
            const scriptURL = '<SCRIPT URL>';

            try {
                  const response = await fetch(scriptURL, { method: 'POST', body: formData });
                  if (response.ok) {
                        alert('Message');
                  } else {
                        alert('Message');
                  }
            } catch (error) {
                  alert('Message');
            }

```

### setup animated alart

-[react-toastify](https://www.npmjs.com/package/react-toastify)



```
1. npm i react-toastify

2. import { ToastContainer, toast } from 'react-toastify';

3. import 'react-toastify/dist/ReactToastify.css';

4. 
  function App(){
    const notify = () => toast("Wow so easy!");

    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }

```