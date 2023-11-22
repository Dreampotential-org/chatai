
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Providers } from './ChatAi/components/Providers';
import ReactDOM from 'react-dom';
import PostVideo from "./PostVedio/Pages/Home";
import ChatAi from './ChatAi/pages/Home';
import './ChatAi/styles/global.css';
import { Home,Signup,Login } from "./Pages/index";

const App = () => {
  return (
    <React.StrictMode>
      <Providers>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chatai" element={<ChatAi />} />
            <Route path="/postVideo" element={<PostVideo />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Providers>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);