import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Link} from "react-router-dom";
import Project1 from './components/pages/Project1';

ReactDOM.render(
  <React.StrictMode>
 <App />
    <BrowserRouter path="/project1">
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
