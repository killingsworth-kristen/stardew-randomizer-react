import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

// Import Components
import Header from './components/Header';
import Login from  './components/pages/Login';
import AllSaves from './components/pages/AllSaves'
import NewSaveForm from './components/pages/NewSaveForm';
import NewSavePreview from './components/pages/NewSavePreview';

function App() {

  return (
    <div className="App">
      <Router>
          <Header />
          <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/saves' element={<AllSaves />}/>
            <Route path='/new-save' element={<NewSaveForm />}/>
            <Route path='/new-save/preview' element={<NewSavePreview />}/>
            {/* https://stackoverflow.com/questions/57058879/how-to-create-dynamic-routes-with-react-router-dom */}
            {/* path="/{save-ID}"" for Save view */}
            {/* path="/{save-ID}/edit" for EditSave view */}
          </Routes>
      </Router>
    </div>
  );
}

export default App;
