import "./SideBar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import React from 'react';

const SideBar = ({ click }) => {
  
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getUserInfor  = () => {
    return localStorage.getItem('userName');
  };


  return (
    <div class="page">
        <div class="list1">
            <div class="list2">
                <div class="tit">Contact Us</div>
                    <ul>
                        <li>
                            Phone Number
                            <div class="list3">
                                <div class="child">
                                    <a href="tel:8556964123">Phone1</a>
                                </div>
                                <div class="child">
                                    <a href="tel:15537338451">Phone2</a>
                                </div>
                            </div>
                        </li>
                        <li>Email
                            <div class="list3">
                                {/* <div class="child">
                                    <a href="mailto:xuan.yan@northeastern.edu">school.edu</a>
                                </div> */}
                                <div class="child">
                                    <a href="mailto:xuan.yan2331@gmail.com">gmail.com</a>
                                </div>
                                <div class="child">
                                    <a href="mailto:xy15533338451@163.com">163.com</a>
                                </div>
                            </div>
                        </li>
                        <li>Website
                            <div class="list3">
                                <div class="child">
                                    <a href="https://www.linkedin.com/in/yan-xuan-029375225/">Facebook</a>
                                </div>
                                <div class="child">
                                    <a href="https://weibo.com/u/7432330949">Twitter</a>
                                </div>
                            </div>
                        </li>
                    </ul>
            </div>
            <div class="list2">
                <div class="tit">Connemt</div>
                <ul>
                    <li>Great</li>
                    <li>Ordinary</li>
                    <li>Dislike</li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default SideBar;