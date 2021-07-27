import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import { ScaleSequencer } from './components/ScaleSequencer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScaleSequencer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);