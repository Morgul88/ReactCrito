import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './view/Home';
import Contacts from './view/Contacts';
import News from './view/News';
import NewsDetails from './view/NewsDetails';
import './App.css';

import NotFound from './view/NotFound';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/News' element={<News />} />
        <Route path='/Newsdetail' element={<NewsDetails />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
);

