import React from "react";
import "./createProduct.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components



//Actions

import { createProductFormDb } from "../redux/actions/productActions";

const RegistScreen = () => {

  const dispatch = useDispatch();

  var regExNumber = /^\d/;


  const createProduct = () => {
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
    window.location = '/adminProducts'
    const createProductData = {
      "imageUrl": document.getElementById("imageUrl").value,
      "name": document.getElementById("name").value,
      "description": document.getElementById("description").value,
      "countInStock": document.getElementById("countInStock").value,
      "price": document.getElementById("price").value,
    }
    dispatch(createProductFormDb(createProductData));

    alert("create successfully");

  };
  return (

    <div class="form-title text-center">
      
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

      <h2 class="text-dark">Add New Product</h2>
      <span class="text-light">Use the below form to create a new product</span>
      <br />
      <br />
      
      <form id="add_user">

        <div class="new_user">
          <div class="form-group">
            <label  class="text-light">ImageUrl</label>
            <input id='imageUrl' type="text"  placeholder="ImageUrl"></input>
          </div>

          <div class="form-group">
            <label  class="text-light">Product Name</label>
            <input id='name' type="text"  placeholder="Product Name"></input>
          </div>

          <div class="form-group">
            <label  class="text-light">Description</label>
            <input id='description' type="text"  placeholder="Description"></input>
          </div>

          <div class="form-group">
            <label  class="text-light">CountInStock</label>
            <input id='countInStock' type="text"  placeholder="CountInStock"></input>
          </div>

          <div class="form-group">
            <label  class="text-light">Price</label>
            <input id='price' type="text"  placeholder="Price"></input>
          </div>

          <div class="form-group">
            <button class="btn text-light update" onClick={(e) => createProduct()} >Save</button>
          </div>
        </div>









        {/* <label>imageUrl</label>
        <input id='imageUrl'></input>
        <br />
        <label>name</label>
        <input id='name'></input>
        <br />
        <label>description</label>
        <input id='description'></input>
        <br />
        <label>countInStock</label>
        <input id='countInStock'></input>
        <br />
        <label>price</label>
        <input id='price'></input>
        <br />
        <button onClick={(e) => createProduct()} >Save</button> */}

      </form>

    </div>
  );
};

export default RegistScreen;
