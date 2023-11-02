import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './view/Home';
import Contacts from './view/Contacts';
import News from './view/News';
import NewsDetails from './view/NewsDetails';
import './App.css';
import Header from './components/Header/Header';
import NotFound from './view/NotFound';
import Footer from './components/Footer/Footer';
import AutoScroll from './components/AutoScrollToTop/AutoScroll';
import FixedHead from './components/FixHead/FixedHead';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AutoScroll/>
      <FixedHead/>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/News' element={<News />} />
        <Route path='/Newsdetail' element={<NewsDetails />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

