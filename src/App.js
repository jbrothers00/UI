import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import home from './components/pages/home'
import products from './components/pages/products';
import services from './components/pages/services';
import careers from './components/pages/careers';
import about from './components/pages/about';
function App() {
  return (
      <>
      <Router>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' exact Component={home}></Route>
          <Route path='/about' exact Component={about}></Route>
          <Route path='/products' exact Component={products}></Route>
          <Route path='/services' exact Component={services}></Route>
          <Route path='/careers' exact Component={careers}></Route>
        </Routes>
      </Router>
      </>
  );
}

export default App;
