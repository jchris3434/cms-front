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
import ProjectsList from './pages/ProjectsList';

function App() {
  const [isdarkmode, setDarkMode] = useState(getDarkModeFromLocalStorage());
  
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
        <Route element={<Layout isDarkMode={isdarkmode} setDarkMode={setDarkMode} />}>
           <Route path="projectdashboard" element={<DashboardProject isDarkMode={isdarkmode}/>} />
           <Route path="createPage" element={<CreatePage isDarkMode={isdarkmode}/>} />
           <Route path="mediasList" element={<MediasList isDarkMode={isdarkmode}/>} />
           <Route path="pagesList" element={<PagesList isDarkMode={isdarkmode}/>} />
           <Route path="preview" element={<Preview isDarkMode={isdarkmode}/>} />
           <Route path="projectsList" element={<ProjectsList isDarkMode={isdarkmode}/>} />
         </Route>
       </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
