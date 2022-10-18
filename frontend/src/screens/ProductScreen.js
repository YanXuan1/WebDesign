import React from "react";
import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  useNavigate,useParams } from 'react-router-dom';

// Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = ({ match }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams(match);
  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;
  const navigate = useNavigate();
  // console.log(match.params.id)
  console.log(id)
  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    navigate(`/cart`);
  };

  return (
    
    <div className="productscreen">
      {/* <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"></meta> */}
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left__info2">
              <p className="left__name">{product.name}</p>
              <p className="left_price">Price: ${product.price}</p>
              <p className="left_des">Description: {product.description}</p>
              <p className="left_st">
                Status:
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p className="left_qty">
                Qty &nbsp;
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button class="btn2" type="button" onClick={addToCartHandler}>
                  Add To Cart
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </p>
              
            </div>
          </div>
          {/* <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>${product.price}</span>
              </p>
              
            </div>
          </div> */}
          {/* <div class="container">
        <div class="bubble"></div>
        <div class="shadow"></div>
    </div> */}
        </>
      )}
      <div className="ani">
      <div class="bubble"></div>
        {/* <div class="shadow"></div> */}
      </div>
      <div className="ani2">
      <div class="bubble2"></div>
        {/* <div class="shadow"></div> */}
      </div>
      <div className="ani3">
      <div class="bubble3"></div>
        {/* <div class="shadow"></div> */}
      </div>
      <div className="ani4">
      <div class="bubble4"></div>
        {/* <div class="shadow"></div> */}
      </div>
      <div className="ani5">
      <div class="bubble5"></div>
        {/* <div class="shadow"></div> */}
      </div>
    </div>
  );
};

export default ProductScreen;
