
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Providers } from './ChatAi/components/Providers';
import ReactDOM from 'react-dom';
import PostVideo from "./PostVideo/Pages/Home/Home";
import ChatAi from './ChatAi/pages/Home';
import './ChatAi/styles/global.css';
import { Home, Signup, Login } from "./Pages/index";
import ListVideo from "./PostVideo/Component/ListVideo";
import VeiwVideo from "./PostVideo/Component/ViewVideo";
import VideoSection from "./PostVideo/Component/VideoSection";
import Analytics from "./PostVideo/Component/Analytics";
// element={<VideoSection />

const App = () => {
  // const id = localStorage.getItem("VideoID");
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
            <Route path="/postVideo/listVideo" element={<ListVideo />} />
            <Route path="/postVideo/viewVideo" element={<VeiwVideo />} />
            <Route path="/postVideo/videoSection/:id" element={<VideoSection />} />
            <Route path="/postVideo/analytics" element={<Analytics />} />
          </Routes>
        </Router>
      </Providers>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);