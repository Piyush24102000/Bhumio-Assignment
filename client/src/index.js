import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Assignee from './components/Assignee';
import Issues from './components/Issues';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Assignee' element={<Assignee />} />
        <Route path='/Issues' element={<Issues />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
