import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import getDarkModeFromLocalStorage from './shared/getDarkModeFromLocalStorage'
import CreatePage from './pages/CreatePage';
import DashboardProject from './pages/DashboardProject';
import Layout from './pages/Layout';
import MediasList from './pages/MediasList';
import PagesList from './pages/PagesList';
import Preview from './pages/Preview';
import Login from './pages/Login';

function App() {
  // Destructuring the useState call into value + setter pair
  const [isDarkMode, setDarkMode] = useState(getDarkModeFromLocalStorage());
  
  return (
    <div className="App" id={isDarkMode === true ? 'appdark':''}>
     <BrowserRouter>
       <Routes>
        {/* Use the Layout component as the parent route */}
        <Route element={<Layout isDarkMode={isDarkMode} setDarkMode={setDarkMode} />}>
           {/* Define the child routes */}
           <Route path="/" element={<Login />} />
           <Route path="/dashboard" element={<DashboardProject isDarkMode={isDarkMode}/>} />
           <Route path="/createPage" element={<CreatePage isDarkMode={isDarkMode}/>} />
           <Route path="/mediasList" element={<MediasList isDarkMode={isDarkMode}/>} />
           <Route path="/pagesList" element={<PagesList isDarkMode={isDarkMode}/>} />
           <Route path="/preview" element={<Preview isDarkMode={isDarkMode}/>} />
         </Route>
       </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
