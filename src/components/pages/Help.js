import React from "react";

import './../style/Help.css';

export default function Help () {
    return (
        <main>
            <h2 className="page-title">Help</h2>
            <section className="faq">
                <div className="page-center">
                    <h3><u><b>FAQ</b></u></h3>
                    <div>
                        <h4><b>Q: How is my information stored?</b></h4>
                        <p>Your data is stored only in your browser and is not sent to a server or anything else. You are in full control of your data.</p>
                    </div>
                    <div>
                        <h4><b>Q: How do I import my file from google sheets?</b></h4>
                        <p>
                            <ol>
                                <li>Go to your copy of Argon's Stardew Randomizer in your Google Drive</li>
                                <li>Navigate to the "List of Goals" Tab at the bottom of the page</li>
                                <img src="assets/images/google_sheets_selection.PNG" alt="visual representation of where to find the selection menu" />
                                <li>Go to File &rarr; Download &rarr; Comma Seperated Values (.csv)</li>
                                <img src="assets/images/google_export_csv.PNG" alt="visual representation of menu navigation to download the csv file from google" width={"500px"}/>
                                <li>On the "Saves" page, start a new save</li>
                                <li>Click on the import CSV file button</li>
                                <li>Upload your Google Sheets CSV file</li>
                            </ol>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}