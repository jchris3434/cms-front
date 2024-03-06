import React from 'react';
import './App.css';
import HeaderButton from './shared/components/HeaderButton';
import { BsFillPlusSquareFill } from 'react-icons/bs';
const darkmode = true;

function App() {
  return (    
  <div className="button test">
      <Button icon={<BsFillPlusSquareFill  />} text={"Ajouter"}onClick={''}/>
    <HeaderButton darkmode={darkmode.toString()} icon='bi-tools' text='text' redirect='https://fondespierre.com/'/>
     </div>



  );
}

export default App;
