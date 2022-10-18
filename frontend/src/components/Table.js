import "./Table.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Table = ({ click }) => {
  
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getUserInfor  = () => {
    return localStorage.getItem('userName');
  };


  return (
    <div className="tablenow">
        <h1 class="display-6">Open Hours of Our Dessert Shop</h1>
            <table class="table table-striped table-hover caption-top">
                
                <thead>
                  <tr>
                    <th scope="col">※</th>
                    <th scope="col">From</th>
                    <th scope="col">To</th>
                    <th scope="col">DeliveryAvailable</th>
                  </tr>
                </thead>
                <tbody id="myTable">
                  <tr>
                    <th scope="row">Workdays</th>
                    <td>9:00 AM</td>
                    <td>9:00 PM</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <th scope="row">Weekends</th>
                    <td>10:00 AM</td>
                    <td>5:00 PM</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <th scope="row">Holidays</th>
                    <td>1:00 PM</td>
                    <td>8:00 PM</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <th scope="row">Specialdays</th>
                    <td>10:00 AM</td>
                    <td>5:00 PM</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
              
    </div>
  );
};

export default Table;