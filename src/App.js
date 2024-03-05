import React from 'react';
import './App.css';
import Button from './shared/generic/genericButton';
import { BsFillPlusSquareFill } from 'react-icons/bs';

function App() {
  return (
    <div className="button test">
      <Button
        icon={<BsFillPlusSquareFill  />}
        text={"Ajouter"}
        onClick={''}
      />
    </div>
  );
}

export default App;
