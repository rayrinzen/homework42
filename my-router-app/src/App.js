import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Головна</Link>
                        </li>
                        <li>
                            <Link to="/about">Про нас</Link>
                        </li>
                        <li>
                            <Link to="/contact">Контакти</Link>
                        </li>
                    </ul>
                </nav>

                {/* <Switch> is replaced with <Routes> in version 6 */}
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}



export default App;