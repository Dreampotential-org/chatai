
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from '@/pages/Home';
import AuthPage from './pages/AuthPage';
import '@/styles/global.css';
import { Providers } from './components/Providers';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const updateState = () => {
    setIsLoggedIn(isLoggedIn===false?true:false)
  }
  return (
    <React.StrictMode>
      <Providers>
        <Router>
          <Routes>
            <Route path="/" element={<Home credential={isLoggedIn} updateState={updateState} />} />
            <Route path="/login" element={<AuthPage updateState={updateState} />} />
          </Routes>
        </Router>
      </Providers>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);




// //Modules
// import React,{useState} from 'react'
// import { useNavigate } from "react-router-dom";
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// //Components
// import Home from '@/pages/Home';
// import AuthPage from "./pages/AuthPage";
// //Style
// import '@/styles/global.css';
// import { Providers } from './components/Providers';
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <Providers>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home credential={isLoggedIn} />} />
//               <Route path="/login"  element={<AuthPage authCredential={isLoggedIn} />} />
//         </Routes>
//       </Router>
//     </Providers>
//   </React.StrictMode>,
// )
