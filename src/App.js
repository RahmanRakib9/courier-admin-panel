import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Landing from './components/Home/Landing/Landing';
import AddService from './components/Home/AddService/AddService';
import ProceedEdit from './components/Home/EditService/ProceedEditjs/ProceedEdit';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Landing />} />
        <Route path='/home' element={<Landing />} />
        <Route path='/addService' element={<AddService />} />
        <Route path='/proceedEdit' element={<ProceedEdit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;