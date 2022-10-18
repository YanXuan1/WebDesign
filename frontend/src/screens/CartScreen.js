import React from "react";
import "./CartScreen.css";
import axios from "axios"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect} from "react";
// Components
import CartItem from "../components/CartItem";
import StripeCheckout from "react-stripe-checkout";
// Actions
import { addToCart, removeFromCart,clearCart} from "../redux/actions/cartActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CartScreen = () => {
  const dispatch = useDispatch();
  toast.configure()
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };


  const clearCartHandler=() => {
    dispatch(clearCart());
    console.log("?")
  }
  const getUserInfor  = () => {
    return localStorage.getItem('userName');
  };
  const handleToken = (token,address)=>{
    const response = axios.post('http://localhost:5000/checkout',{token,cartItems})
    toast("Success! Check email for details", { type: "success" });
    dispatch(clearCart());
  }
  return (
    <>
    <div id = "cartTotal">
      <div className="cartscreen">
        <div className="cartscreen__left">
          <p id = "cart_title">{getUserInfor()}'s shopping cart</p>

          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/home">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
            
          )}
        </div>

        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          <div>
          {cartItems.length === 0 ? (
              <button type="button" disabled>Nothing to Checkout</button>
          ) : (
            <StripeCheckout 
              className="Checkout"
              stripeKey = "pk_test_51KscaFH9mKk9JlNuFyvBC5raGtRgGmM7SDX5sfcfRpk2iOatbo0tqJZpuX30wmZ4UdYe8eN3gxORO2gIPsxJ5ije00NmFkOdpm"
              token={handleToken}
              amount={getCartSubTotal()*100}
              billingAddress
              shippingAddress
              />
          )}
            <br />
            <br />
            <Link to="/home">
              <button type="button">Continue Shopping</button>
            </Link>
            <br/><br/>
            <button onClick={clearCartHandler}>Clear Cart</button>
          </div>
        </div>


        


      </div>
      {/* <div className="ani">
      <div class="bubble"></div>
        
      </div>
      <div className="ani2">
      <div class="bubble2"></div>
        
      </div>
      <div className="ani3">
      <div class="bubble3"></div>
        
      </div>
      <div className="ani4">
      <div class="bubble4"></div>
        
      </div> */}
      

      <div>
      <div class="fireworks" style={{left: '15%', top: '5%'}}></div>
      <div class="fireworks" style={{right: '30%', top: '13%'}}></div>
      <div class="fireworks" style={{left: '5%', top: '23%'}}></div>
    <div class="fireworks" style={{right: '45%', top: '8%'}}></div>
    {/* <div class="fireworks" style={{right: '30%', top: '13%', animation-delay:'-0.4s'}}></div>
    <div class="fireworks" style="left: 5%; top: 23%; animation-delay: -1.7s;"></div>
    <div class="fireworks" style="right: 45%; top: 8%; animation-delay: -3.1s;"></div> */}
      </div>


      </div>
      
      
    </>
    
  );
};

export default CartScreen;