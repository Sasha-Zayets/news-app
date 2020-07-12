import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './router';
import { GlobalStyle } from './styles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
        <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
