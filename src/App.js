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
  const [isdarkmode, setDarkMode] = useState(getDarkModeFromLocalStorage());
  
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
        {/* Use the Layout component as the parent route */}
        <Route element={<Layout isDarkMode={isdarkmode} setDarkMode={setDarkMode} />}>
           {/* Define the child routes */}
           <Route path="/" element={<Login />} />
           <Route path="/dashboard" element={<DashboardProject isDarkMode={isdarkmode}/>} />
           <Route path="/createPage" element={<CreatePage isDarkMode={isdarkmode}/>} />
           <Route path="/mediasList" element={<MediasList isDarkMode={isdarkmode}/>} />
           <Route path="/pagesList" element={<PagesList isDarkMode={isdarkmode}/>} />
           <Route path="/preview" element={<Preview isDarkMode={isdarkmode}/>} />
         </Route>
       </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
