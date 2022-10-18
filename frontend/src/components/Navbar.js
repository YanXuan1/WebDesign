import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import React from 'react';

const Navbar = ({ click }) => {
  
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getUserInfor  = () => {
    return localStorage.getItem('userName');
  };


  return (
    <nav className="navbar2">
      
      <ul className="navbar__links2">
      <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
      </ul>

      <div className="navbar__logo">
        <h1>&nbsp;&nbsp;&nbsp;Welcome, {getUserInfor()} </h1>
      </div>
      <ul className="navbar__links">
        
        <li>
          <Link className="shop__link" to="/home">&nbsp;&nbsp;&nbsp;&nbsp;Home</Link>
        </li>
        <li>
        <Link className="logout__link" to="/logout"> &nbsp;&nbsp;Logout </Link>
        </li>
        <li>

        <Link className="user_info" to="/myinfor"> &nbsp;&nbsp;&nbsp;MyInfo </Link>

       

        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
