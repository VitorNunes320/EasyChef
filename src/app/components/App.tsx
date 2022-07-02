import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Landing from '../pages/Landing/Landing';
import Header from './Header/Header';

function App() {
  return (
    <>
      <header>
        <Header/>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </main>

      <footer>
        
      </footer>
    </>
  );
}

export default App;
