import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './router';

function App() {
  return (
    <>
      <Header />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
