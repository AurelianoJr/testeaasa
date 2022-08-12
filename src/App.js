import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/pronto-atendimento'>Pronto Atendimento</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pronto-atendimento' element={<ProntoAtendimento />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function ProntoAtendimento() {
  return <h2>Pronto Atendimento</h2>;
}
