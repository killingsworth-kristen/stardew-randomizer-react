import React from "react";

export default function NewSaveForm () {
    return (
        <main>
            <h2>New Save Form</h2>
            <div>
                <button>Import Existing File from Google Sheets</button>
                <div>
                    <form>
                        <label for="save-name">Name Your Save (optional):</label>
                        <input type="text" id="save-name" name="save-name"></input>
                    </form>
                </div>
            </div>
        </main>
    )
}