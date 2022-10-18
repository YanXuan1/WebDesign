import React from "react";
import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';

// Actions
import { getProductDetails } from "../redux/actions/productActions";
import { updataProductFormDb } from "../redux/actions/productActions";

var regExNumber = /^\d/;
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
    if (product != undefined && product._id != undefined) {
      document.getElementById("imageUrl").value = product.imageUrl;
      document.getElementById("name").value = product.name;
      document.getElementById("description").value = product.description;
      document.getElementById("countInStock").value = product.countInStock;
      document.getElementById("price").value = product.price;
    }
  }, [dispatch, match, product]);

  const updataProduct = () => {
    if(document.getElementById("imageUrl").value==""){
      alert("imageUrl cann't be empty");
      return false;
    }
    if(document.getElementById("name").value==""){
      alert("product Name cann't be empty");
      return false;
    }
    if(document.getElementById("description").value==""){
      alert("description cann't be empty");
      return false;
    }
    if(document.getElementById("countInStock").value==""){
      alert("countInStock cann't be empty");
      return false;
    }
    if(document.getElementById("price").value==""){
      alert("price cann't be empty");
      return false;
    }
    if(!document.getElementById("countInStock").value.match(regExNumber)){
      alert("countInStock must be numbers");
      return false;
    }
    if(!document.getElementById("price").value.match(regExNumber)){
      alert("price must be Decimal");
      return false;
    }
    const updataProductData = {
      "imageUrl": document.getElementById("imageUrl").value,
      "name": document.getElementById("name").value,
      "description": document.getElementById("description").value,
      "countInStock": document.getElementById("countInStock").value,
      "price": document.getElementById("price").value,
      "id": product._id,
    }
    dispatch(updataProductFormDb(updataProductData));
    alert("update successfully");
    window.location = '/adminProducts'
  };


  return (
    <div className="form-title text-center">

      {/* <header id="header">
        <nav>
          <div class="container">
            <div class="text-center">
              <a href="/" class="nav-brand text-light text-decoration">Return To Home Page</a>
            </div>
          </div>
        </nav>
      </header> */}

      <div class="box-nav d-flex justify-between">
        <div class="filter">
          <a href="/"><i class="fas fa-angle-double-left"></i>Logout</a>
        </div>
        <div class="filter">
          <a href="/adminProducts">AdminProducts<i class="fas fa-angle-double-right"></i></a>
        </div>
      </div>

      <h2 class="text-dark">Update The Product</h2>
      <span class="text-light">Use the below form to edit the product</span>
      <br />
      <br />






      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <form id="add_user">

            <div class="new_user">
              <div class="form-group">
                <label class="text-light">ImageUrl</label>
                <input id='imageUrl' type="text" placeholder="ImageUrl"></input>
              </div>

              <div class="form-group">
                <label class="text-light">Product Name</label>
                <input id='name' type="text" placeholder="Product Name"></input>
              </div>

              <div class="form-group">
                <label class="text-light">Description</label>
                <input id='description' type="text" placeholder="Description"></input>
              </div>

              <div class="form-group">
                <label class="text-light">CountInStock</label>
                <input id='countInStock' type="text" placeholder="CountInStock"></input>
              </div>

              <div class="form-group">
                <label class="text-light">Price</label>
                <input id='price' type="text" placeholder="Price"></input>
              </div>

              <div class="form-group">
                <button class="btn text-light update" onClick={(e) => updataProduct()} >Updata</button>
              </div>
            </div>




            {/* <label>imageUrl</label>
                <input type='text' id='imageUrl'></input>
                <label>name</label>
                <input type='text' id='name' ></input>
                <label>description</label>
                <input type='text' id='description'></input>
                <label>countInStock</label>
                <input type='text' id='countInStock' ></input>
                <label>price</label>
                <input type='text' id='price'></input> */}
            {/* <button onClick={(e) => updataProduct()} >updataProduct</button> */}
          </form>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
