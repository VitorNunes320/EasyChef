import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Landing from '../pages/Landing/Landing';
import Header from './Header/Header';
import Footer from './Footer/Footer';

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
                <Footer />
            </footer>
        </>
    );
}

export default App;
