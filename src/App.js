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

function App() {
  const [isdarkmode, setDarkMode] = useState(getDarkModeFromLocalStorage());
  
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
       <Route element={<Layout isDarkMode={isdarkmode} setDarkMode={setDarkMode} />}>
           <Route path="/" element={<DashboardProject />} />
           <Route path="createPage" element={<CreatePage />} />
           <Route path="mediasList" element={<MediasList />} />
           <Route path="pagesList" element={<PagesList />} />
           <Route path="preview" element={<Preview />} />
         </Route>
       </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
