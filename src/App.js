import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

// Import Components
import Header from './components/Header';
import AllSaves from './components/pages/AllSaves'
import NewSaveForm from './components/pages/NewSaveForm';
import NewSavePreview from './components/pages/NewSavePreview';
import EditSave from './components/pages/EditSave';
import SaveSlot1 from './components/pages/SaveSlot1';
import SaveSlot2 from './components/pages/SaveSlot2';
import SaveSlot3 from './components/pages/SaveSlot3';

function App() {

  return (
    <div className="App">
      <Router>
          <Header />
          <Routes>
            <Route path='/saves' element={<AllSaves />}/>
            <Route path='/new-save' element={<NewSaveForm />}/>
            <Route path='/new-save/preview' element={<NewSavePreview />}/>
            <Route path='/save-slot-1' element={<SaveSlot1 />}/>
            <Route path='/save-slot-2' element={<SaveSlot2 />}/>
            <Route path='/save-slot-3' element={<SaveSlot3 />}/>
            <Route path='/edit' element={<EditSave />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
