import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Landing from './components/Home/Landing/Landing';
import AddService from './components/Home/AddService/AddService';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Landing />} />
        <Route path='/home' element={<Landing />} />
        <Route path='/addService' element={<AddService/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;