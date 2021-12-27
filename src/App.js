import React from 'react';
import './App.css';
import Navbar from './components/nav/nav.component';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header.component';
import Home from './pages/home/home.component';
import Footer from './pages/footer/footer.component';
function App() {
  return (
    <BrowserRouter>
        <Navbar></Navbar>  
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
