import React from 'react';
import { ContextProvider } from './Context/AuthContext';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import { UserManagement } from './Context/AuthContext';
import LogInSuccessfully from './components/LogInSuccessfully';

function App() {
    return (
        <div>
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
