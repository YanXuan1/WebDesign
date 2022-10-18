import React from "react";
import "./adminUsersScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Componentssafasf

import User from "../components/User";

//Actions
import { getProducts as listProducts } from "../redux/actions/userActions";
import { deleteUserFormDb } from "../redux/actions/adminAction";



const HomeScreen = () => {
  const dispatch = useDispatch();

  const getUsers = useSelector((state) => state.getUsers);
  const { products, loading, error } = getUsers;
  const deleteUser = (id) => {
    dispatch(deleteUserFormDb(id));
    alert("delete successfully");
    window.location = '/adminUsers'
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
              <a href="/adminProducts" class="nav-brand text-light text-decoration">AdminProducts</a>

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

      <h2 className="text-dark">Admin Users</h2>  
      <span class="text-light">All the users are listed below</span>
      <br />

      <div className="container">
        <table class="table">
          <thead class="thead-dark">
            
            <tr>
              <td>Name</td>
              <td>Password</td>
              <td>Email</td>
              <td>User's Id</td>
              <td>Delete</td>
            </tr>
          </thead>

          {loading ? (
            <h2>Loading...</h2>

          ) : error ? (
            <h2>{error}</h2>
          ) : (
            products.map((product) => (

              <User
                name={product.userName}
                password={product.userPass}
                email={product.userEmail}
                id={product._id}
                deleteUser={deleteUser}
              />

            ))

          )}

        </table>

      </div>
    </div>
  );
};

export default HomeScreen;
