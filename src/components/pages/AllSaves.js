import React from "react";
import './../style/AllSaves.css';

export default function AllSaves () {
    return (
        <main>
            <h2>Welcome!</h2>
            <div className="all-saves-container">
                <div className="save-slot-container">
                    <h3>Save Slot 1</h3>
                    <h3>50%</h3>
                    <div>
                        <button>
                            <img src="/assets/icons/edit.svg" alt="edit save"/>
                        </button>
                        <button>
                            <img src="/assets/icons/delete.svg" alt="delete save"/>
                        </button>
                    </div>
                </div>
                <div className="save-slot-container">
                    <h3>Save Slot 2</h3>
                    <h3>Empty</h3>
                    <button>New Save!</button>
                </div>
                <div className="save-slot-container">
                    <h3>Save Slot 3</h3>
                    <h3>Empty</h3>
                    <button>New Save!</button>
                </div>
                <div className="save-slot-container">
                    <h3>Save Slot 4</h3>
                    <h3>Empty</h3>
                    <button>New Save!</button>
                </div>
                <div className="save-slot-container">
                    <h3>Save Slot 5</h3>
                    <h3>Empty</h3>
                    <button>New Save!</button>
                </div>
            </div>
        </main>
    )
}