import React from 'react';
import './AddButton.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function AddButton(props) {
  return (
      <div 
      class="rounded-pill"
      id='addbutton'
      onClick={() => props.show(true)}
      >
        <span>{props.text}</span>
        <button type="button" class="btn">
            <i class="bi bi-plus-circle-fill"></i>
        </button>
  </div>
  );
}


