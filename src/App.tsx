import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Projects from './screens/Projects';
import UpdatedNavbar from './components/UpdatedNavbar';

function App() {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <div>
            <Router>
                <UpdatedNavbar isVisible={isVisible} setIsVisible={setIsVisible}/>
                <Routes>
                    <Route path='/' element={<Home isVisible={isVisible}/>} />
                    <Route path='/about' element={<About isVisible={isVisible}/>} />
                    <Route path='/projects' element={<Projects isVisible={isVisible}/>} />
                    <Route path='/contact' element={<Contact isVisible={isVisible}/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
