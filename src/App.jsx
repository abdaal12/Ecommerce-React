import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home/Home.jsx';
import Shop from './pages/Shop.jsx';
import Product from './pages/Product.jsx';
import Contact from './pages/Contact';
import Cart from './pages/cart.jsx';
import Modal from './pages/Model.jsx';
import SignUp from './pages/signUp.jsx';
import SignIn from './pages/signIn.jsx';

import SignInPage from './pages/compo/SignInPage.jsx';
import SignUpPage from './pages/compo/SignUpPage.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import ProductPage from './pages/singleProduct/ProductPage.jsx';
import SingleCart from './pages/cart/Cart.jsx';
import CheckoutPage from './pages/cart/CheckoutPage.jsx';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false); // For mobile menu toggle
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen); 
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>   
      <Router>
        <header className="flex justify-between items-center p-5 bg-white shadow-lg">
          <div className="text-2xl font-bold">3legant.</div>
          
          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              🍔 {/* Use an icon here, such as from Font Awesome */}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className={`flex-col md:flex-row md:flex md:space-x-6 absolute md:static bg-white md:bg-transparent transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'top-16 left-0 right-0' : '-top-64'
          }`}>
            <ul className="flex flex-col md:flex-row gap-5 p-5 md:p-0">
              <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/shop" onClick={toggleMenu}>Shop</Link></li>
              <li><Link to="/product" onClick={toggleMenu}>Product</Link></li>
              <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
            </ul>
          </nav>

          {/* Search, Cart, and User Profile */}
          <div className="flex space-x-4 items-center">
            <button>🔍</button>
            <button onClick={toggleCart}>🛒</button>
            <div className="relative">
              <button onClick={toggleDropdown} className="focus:outline-none">👤</button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-white border rounded-lg shadow-lg">
                  <ul className="text-left">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <NavLink to="/SignInPage">Sign In</NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <NavLink to="/admin">Admin</NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/SignInPage" element={<SignInPage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/cart" element={<SingleCart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
      
      {isCartOpen && <Cart toggleCart={toggleCart} />} 
    </>
  );
}

export default App;
