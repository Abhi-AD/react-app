// src/App.js
import React from 'react';
import Navbar from './compoents/Nabar';
import Contact from './compoents/Contact';
import Form from './compoents/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Contact/>
      <Form/>
    </div>
  );
}

export default App;
