import React from 'react';
import './App.css';
import logo from './assets/aurelia_jewelry_logo.svg'; 
import heroImage from './assets/hero.png';           
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Collection from './pages/Collection';
import Configurator from './pages/Configurator';
import Contact from './pages/Contact';
function App() {


// const myHeaders = new Headers();
// myHeaders.append("x-access-token", "goldapi-e3d89a7e949a86c26c4167a08ecada11-io");

// fetch("https://www.goldapi.io/api/XAU/INR", {
//   method: "GET",
//   headers: myHeaders,
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("22K Gold Rate:", data.price_gram_22k);

//     document.getElementById("gold").innerText =
//       `₹${data.price_gram_24k.toFixed(2)} / gram (24k)   ,   ₹${data.price_gram_22k.toFixed(2)} /gram(22k) , ₹${data.price_gram_18k.toFixed(2)} /gram (18k)`;
//   })
//   .catch((error) => console.error(error));
  
  return (
    <BrowserRouter>
      <div className="app-container">
        
        {/* PREMIUM NAVIGATION BAR */}
        <header className="main-header">
          <div className="logo-container">
            <Link to="/">
              <img src={logo} alt="Aurelia Jewelry Logo" className="brand-logo" />
            </Link>
          </div>

          <nav className="nav-links">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/collection" className="nav-item">Collection</Link>
            <Link to="/design" className="nav-item">Custom Design</Link>
            <Link to="/contact" className="nav-item">Contact</Link>
            <div className="header-actions">
              <a href="#signin" className="signin-btn">Sign In</a>
            </div>
          </nav>
        </header>
        <div className="rate" style={{diplay:"flex" , justifyContent:"space-around",marginTop:"30px"}} >
        <h2 style={{ color:"gold"}}>Today's  Gold Rates</h2>
        <p id="gold"  style={{color:"gold"}}>Loading...</p>
        </div>

        {/* MAIN DISPLAY AREA */}
        <main className="main-content">
          <Routes>
            
            {/* Main Landing Home Page */}
            <Route 
              path="/" 
              element={
                <div className="hero-showcase">
                  <div className="image-frame">
                    <img 
                      src={heroImage} 
                      alt="Bespoke Fine Jewelry Display" 
                      className="showcase-img" 
                    />
                  </div>
                  <section className="hero-text-content">
                    <h1 className="hero-title">Timeless Elegance, Crafted for You</h1>
                    <p className="hero-description">
                      Exquisite bespoke diamond and gold jewelry, crafted with flawless precision 
                      to celebrate life's most meaningful moments. Explore our classic signatures 
                      and modern custom collections.
                    </p>
                  </section>
                </div>
              } 
            />
            <Route path="/collection" element={<Collection/>}/>
            <Route path="/design" element={<Configurator/>}/>
            <Route path="/contact" element={<Contact/>}/>




          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;