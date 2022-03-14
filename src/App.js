import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Landing from './components/Home/Landing/Landing';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Landing />} />
        <Route path='/home' element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;