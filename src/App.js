import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import React from 'react';
import Home from "./views/Home";
import DnD from "./views/DnD";
import Deck from "./views/Deck";
import LogIn from "./views/LogIn";
import LogOut from "./views/LogOut";
import SignUp from "./views/SignUp";
import ErrorPage from "./views/ErrorPage";
import { GlobalInfo } from './views/Deck/DeckList';

function App() {
  return (
    <div>
      <GlobalInfo>
        <nav>
          <Link to="/" className='link'>Home</Link>
          <Link to="/DnD5e" className='link'>DnD</Link>
          <Link to="/DeckBuilder" className='link'>Deck</Link>
          <Link to="/LogIn" className='link'>Log in</Link>
          <Link to="/SignUp" className='link'>Sign up</Link>
          <Link to="/LogOut" className='link'>Log out</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DnD5e" element={<DnD />} />
          <Route path="/DeckBuilder" element={<Deck />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/LogOut" element={<LogOut />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </GlobalInfo>
    </div>
  );
}

export default App;
