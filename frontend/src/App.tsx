import React from 'react';
import './App.css';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }

  return (
    <div className="App">

      <div className="container">
        <header className="App-header">

          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <a href="">Restaurant App</a>
          </div>

          <div className="header-links">
            <a href="">Orders</a>
            <a href="">Sign Up</a>
            <a href="">Sign In</a>
          </div>

        </header>

        <aside className="sidebar">
          <h3>Our Menu</h3>
          <button className="sidebar-close-button" onClick={closeMenu} >x</button>
          <ul className="sidebar-menu">
            <li>
              <a href="">Mains</a>
            </li>

            <li>
              <a href="">Drinks</a>
            </li>

            <li>
              <a href="">Desserts</a>
            </li>
          </ul>
        </aside>

        <main>
          <div className="content">
            <ul className="products">
              <li>
                  <div className="product">
                    <img className="product-image" src="" alt="product" />
                    <div className="product-name">
                      <a href="">Main1</a>
                    </div>
                    <div className="product-price">Price</div>
                  </div>
                </li>
                <li>
                  <div className="product">
                    <img className="product-image" src="" alt="product" />
                    <div className="product-name">
                      <a href="">Main2</a>
                    </div>
                    <div className="product-price">Price</div>
                  </div>
                </li>
                <li>
                  <div className="product">
                    <img className="product-image" src="" alt="product" />
                    <div className="product-name">
                      <a href="">Main3</a>
                    </div>
                    <div className="product-price">Price</div>
                  </div>
                </li>
                <li>
                  <div className="product">
                    <img className="product-image" src="" alt="product" />
                    <div className="product-name">
                      <a href="">Main3</a>
                    </div>
                    <div className="product-price">Price</div>
                  </div>
                </li>
                <li>
                  <div className="product">
                    <img className="product-image" src="" alt="product" />
                    <div className="product-name">
                      <a href="">Main3</a>
                    </div>
                    <div className="product-price">Price</div>
                  </div>
                </li>
                <li>
                  <div className="product">
                    <img className="product-image" src="" alt="product" />
                    <div className="product-name">
                      <a href="">Main3</a>
                    </div>
                    <div className="product-price">Price</div>
                  </div>
                </li>
            </ul>

          </div>
        </main>

        <footer className="footer">
            Ronald Pineda
        </footer>

      </div>
      

      
    </div>
  );
}

export default App;
