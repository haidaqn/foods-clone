import React from 'react';
import LineCard from './components/Linecard';

import Navbar from './components/Navbar';
import Section from './components/Section';
import Linecard from './components/Linecard';
import Foods from './components/Foods';
import Cotegory from './components/Cotegory';
import Contact from './components/Contact';

function App() {
    return (
        <div>
            <Navbar />
            <Section />
            <Linecard />
            <Foods />
            <Cotegory />
            <Contact />
        </div>
    );
}

export default App;
