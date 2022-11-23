import React from 'react';
import { ContextProvider } from './Context/AuthContext';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Main from './components/Main';
import Section from './components/Section';
/* 
import Navbar from './components/Navbar';
import Linecard from './components/Linecard';
import Foods from './components/Foods';
import Cotegory from './components/Cotegory';
import Contact from './components/Contact'; */

function App() {
    return (
        <div>
            {/* <Navbar />
            <Section />
            <Section />
            <Linecard />
            <Foods />
            <Cotegory />
            <Contact /> */}
            <ContextProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </ContextProvider>
        </div>
    );
}

export default App;
