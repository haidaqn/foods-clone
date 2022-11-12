import React from 'react';
import LineCard from './components/Linecard';

import Navbar from './components/Navbar';
import Section from './components/Section';
import Linecard from './components/Linecard';
import Foods from './components/Foods';

function App() {
    return (
        <div>
            <Navbar />
            <Section />
            <Linecard />
            <Foods />
        </div>
    );
}

export default App;
