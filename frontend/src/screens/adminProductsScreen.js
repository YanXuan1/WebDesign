import React from "react";
import "./adminProductsScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../components/adminPruducts";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";
import { deleteProductFormDb } from "../redux/actions/adminAction";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;
  const deleteProduct = (id) => {
    dispatch(deleteProductFormDb(id));
    alert("delete successfully");
    window.location = '/adminProducts'
  };
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div className="form-title text-center">

      {/* <header id="header">
        <nav>
          <div class="container">
            <div class="text-center">
            <a href="/adminUsers" class="nav-brand text-light text-decoration">AdminUsers</a>
            </div>
          </div>
        </nav>
      </header> */}

      <div class="box-nav d-flex justify-between">
        <div class="filter">
          <a href="/"><i class="fas fa-angle-double-left"></i>Logout</a>
        </div>
        <div class="filter">
          <a href="/adminUsers">AdminUsers<i class="fas fa-angle-double-right"></i></a>
        </div>
      </div>


      {/* <div class="box-nav d-flex justify-between">
        <div class="filter">
          <a href="/CreateProduct"><i class="fas fa-angle-double-left"></i> Create New Product</a>
        </div>
        <div class="filter">
          <a href="/CreateProduct"><i class="fas fa-angle-double-left"></i> Create New Product</a>
        </div>
      </div> */}

      {/* <a href="/"><i class="fas fa-angle-double-left"></i>Logout</a> */}

      <h2 className="text-dark">Admin Products</h2>
      <span class="text-light">All the products are listed below</span>
      <br />

      <div class="box-nav d-flex justify-between">
        <div>
        </div>
        <div class="filter">
          <a href="/CreateProduct">Create New Product<i class="fas fa-angle-double-right"></i></a>
        </div>
      </div>

      {/* <main id="site-main"> */}
      <div className="container">
        <table class="table">

          <thead class="thead-dark">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>CountInStock</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>

          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            products.map((product) => (
              <Product
                productId={product._id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
                countInStock={product.countInStock}
                deleteProduct={deleteProduct}
              />
            ))
          )}
        </table>
      </div>
      {/* </main> */}
    </div>
  );
};

export default HomeScreen;
