import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import SigninPage from './pages/SigninPage';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <header className="App-header">

            <div className="brand">
              <button onClick={openMenu}>&#9776;</button>
              <Link to="/">Adfoodio Restaurant </Link>
            </div>

            <div className="header-links">
              <a href="/">Cart</a>
              <a href="/">Sign Up</a>
              <Link to="/signin">Sign in</Link>
            </div>

          </header>

          <aside className="sidebar">
            <h3>Our Menu</h3>
            <button className="sidebar-close-button" onClick={closeMenu} >x</button>
            <ul className="sidebar-menu">
              <li>
                <a href="/">Mains</a>
              </li>

              <li>
                <a href="/">Drinks</a>
              </li>

              <li>
                <a href="/">Desserts</a>
              </li>
            </ul>
          </aside>

          <main className="main">
            <div className="content">
              <Route path="/signin" component={SigninPage}></Route>
              <Route path="/products/:id" component={ProductPage}></Route>
              <Route path="/cart/:id?" component={CartPage}></Route>
              <Route path="/" exact={true} component={HomePage}></Route>
            </div>
          </main>

          <footer className="footer">
              Ronald Pineda
          </footer>

        </div>
      </div>  
    </BrowserRouter>
    
  );
}

export default App;
