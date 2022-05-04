import React from 'react';
import './App.css';
import HomePage from './homepage';
import Profile from './profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='profile' element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
