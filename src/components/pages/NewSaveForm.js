import React, { useState } from "react";

import NewSavePreview from "./NewSavePreview.js";

export default function NewSaveForm () {

    const [file, setFile] = useState();
    const [array, setArray] = useState([]);
  
    const fileReader = new FileReader();
  
    const handleOnChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const csvFileToArray = string => {
      const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
      const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
  
      const array = csvRows.map((string, i) => {
        const values = string.split(",");
        const obj = csvHeader.reduce((object, header, index ) => {
          object[header] = values[index];
          let newObject = {...object, key: i}
          delete newObject.Image;
          newObject["complete"] = newObject["Complete?\r"];
          if (newObject.complete === "Y\r") {
            newObject.complete = true;
            var currentdate = new Date(); 
            var dateTime = 
                "Imported at "
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getDate() + "/"
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + ((currentdate.getSeconds() < "10")?"0":"") + currentdate.getSeconds();
            newObject.completeDate = dateTime;
            console.log(newObject.completeDate);
          } else {
            newObject.complete = false;
            newObject.completeDate = null;
          }
          delete newObject["Complete?\r"];
          return newObject;
          // return object;
        }, {});
        return obj;
      });
      // console.log(array);
      setArray(array);
    };
  
    const handleOnSubmit = (e) => {
      e.preventDefault();
  
      if (file) {
        fileReader.onload = function (event) {
          const text = event.target.result;
          csvFileToArray(text);
        };
  
        fileReader.readAsText(file);
      }
    };
  
    // const headerKeys = Object.keys(Object.assign({}, ...array));
  
    return (
        <main>
            <h2>New Save Form</h2>
            <div>
                <form onSubmit={handleOnSubmit}>
                    <input type="file" id="csv-file" onChange={handleOnChange}></input>
                    <button type="submit">Import Existing File from Google Sheets</button>
                </form>
                <NewSavePreview array={array}/>
                {/* <table>
                    <thead>
                    <tr key={"header"}>
                        {headerKeys.map((key) => (
                        <th>{key}</th>
                        ))}
                    </tr>
                    </thead>

                    <tbody>
                    {array.map((item) => (
                        <tr key={item.key}>
                        {Object.values(item).map((val) => (
                            <td>{val}</td>
                        ))}
                        </tr>
                    ))}
                    </tbody>
                </table> */}
                <div>
                    <form>
                        <label htmlFor="save-name">Name Your Save (optional):</label>
                        <input type="text" id="save-name" name="save-name"></input>
                    </form>
                </div>
            </div>
        </main>
    )
}