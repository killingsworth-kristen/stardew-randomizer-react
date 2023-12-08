import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';


// Import Components
import Header from './components/Header';
import Name from './components/pages/Name';
import AllSaves from './components/pages/AllSaves';
import NewSaveForm from './components/pages/NewSaveForm';
import NewSavePreview from './components/pages/NewSavePreview';
import EditSaveSlot1 from './components/pages/EditSaveSlot1';
import EditSaveSlot2 from './components/pages/EditSaveSlot2';
import EditSaveSlot3 from './components/pages/EditSaveSlot3';
import Save from './components/pages/Save';
import SaveSlot1 from './components/pages/SaveSlot1';
import SaveSlot2 from './components/pages/SaveSlot2';
import SaveSlot3 from './components/pages/SaveSlot3';
import Help from './components/pages/Help';
import About from './components/pages/About';

function App() {

  const [current, setCurrent] = useState('');

  useEffect(() => {
    setCurrent(window.location.pathname);
  }, []);

  return (
    <div className="App">
      <Router>
          <Header current={current} setCurrent={setCurrent}/>
          <Routes>
            <Route path='/name' element={<Name />}/>
            <Route path='/' element={< AllSaves />} />
            <Route path='/new-save' element={<NewSaveForm />}/>
            <Route path='/new-save/preview' element={<NewSavePreview />}/>
            <Route path='/save-slot-1' element={<SaveSlot1 />}/>
            <Route path='/save-slot-2' element={<Save />}/>
            <Route path='/save-slot-3' element={<SaveSlot3 />}/>
            <Route path='/edit/save-slot-1' element={<EditSaveSlot1 />}/>
            <Route path='/edit/save-slot-2' element={<EditSaveSlot2 />}/>
            <Route path='/edit/save-slot-3' element={<EditSaveSlot3 />}/>
            <Route path='/help' element={<Help />}/>
            <Route path='/about' element={<About />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
