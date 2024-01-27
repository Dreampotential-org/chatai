import React, { useEffect, useState } from "react";
import { Provider } from 'react-redux';
import { store } from "./Store/store";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Providers } from "./ChatAi/components/Providers";
import ReactDOM from "react-dom/client";
import PostVideo from "./PostVideo/Pages/Home/Home";
import ChatAi from "./ChatAi/pages/Home";
import "./ChatAi/styles/global.css";
import { Home, Signup, Login } from "./Pages/index";
import ListVideo from "./PostVideo/Component/ListVideo";
import VeiwVideo from "./PostVideo/Component/ViewVideo";
import VideoSection from "./PostVideo/Component/VideoSection";
import Analytics from "./PostVideo/Component/Analytics";
import Email from "./Email/Pages/Home/Home";
import Settings from "./Pages/Settings/Setting";
import AdminPanel from "./Pages/Adminpanel/Adminpanel";
import Contacts from "./Pages/Contacts/Contacts";
import FAQ from "./ChatAi/pages/FAQ";
import TeacherUI from "./Pages/TeacherUI/TeacherUI";
import VideoNarrator from "./PostVideo/Component/VideoNarrator";
import Fitness from "./Pages/Fitness/Fitness";

const App = () => {
  return (
    <React.StrictMode>
      <Providers>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            <Route path="/chatai" element={<ChatAi />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/postVideo" element={<PostVideo />} />
            <Route path="/postVideo/narrator" element={<VideoNarrator />} />
            <Route path="/postVideo/listVideo" element={<ListVideo />} />
            <Route path="/postVideo/viewVideo" element={<VeiwVideo />} />
            <Route
              path="/postVideo/videoSection/:id"
              element={<VideoSection />}
            />
            <Route path="/postVideo/analytics" element={<Analytics />} />
            <Route path="/mail" element={<Email />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/teacher-ui" element={<TeacherUI />} />
            <Route path="/settings" element={<Settings />} />

            <Route path="/fit" element={<Fitness />} />
          </Routes>
        </Router>
      </Providers>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
