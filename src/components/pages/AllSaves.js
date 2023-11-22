import React from "react";
import './../style/AllSaves.css';

import EditDeletePlayBtns from "../EditDeletePlayBtns";
import NewSaveBtn from "../NewSaveBtn";

export default function AllSaves () {
    return (
        <main>
            <h2 className="all-saves-title">Welcome!</h2>
            <div className="grid-wrapper align-items-center">                
                <div className="container">
                    <div className="row" id="row-1">
                        <div className="col">
                            <h3>Save Slot 1</h3>
                        </div>
                        <div className="col">
                            <h3>50%</h3>
                        </div>
                        <EditDeletePlayBtns saveSlotNum={1}/>
                    </div>
                    <div className="row" id="row-2">
                        <div className="col">
                            <div>
                                <h3>Save Slot 2</h3>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <h3>Empty</h3>
                            </div>
                        </div>
                        {/* <NewSaveBtn /> */}
                        <EditDeletePlayBtns saveSlotNum={2}/>

                    </div>
                    <div className="row" id="row-3">
                    <div className="col">
                            <div>
                                <h3>Save Slot 3</h3>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <h3>Empty</h3>
                            </div>
                        </div>
                        {/* <NewSaveBtn /> */}
                        <EditDeletePlayBtns saveSlotNum={3}/>
                    </div>
                </div>
            </div>
        </main>
    )
}