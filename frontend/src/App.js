import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react"
// Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/BackDrop";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen"
import LogoutScreen from "./screens/LogoutScreen"
import RegistScreen from "./screens/RegistScreen"
import AdminUsersScreen from './screens/adminUsersScreen'
import AdminProductsScreen from './screens/adminProductsScreen'
import CreateProduct from  './screens/createProduct'
import UpdataProduct from './screens/updateProduct'
import MyInforSCreen from './screens/MyInforSCreen'
import Sidebar from "./components/SideBar"
import { Outlet } from 'react-router-dom';

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  const SidebarLayout = () => (
    <>
      <Navbar click={() => setSideToggle(true)}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
      <Sidebar></Sidebar>
      <Outlet />
    </>
  );
  return (
<Router>
      <div className="container2">
        <Routes>
          <Route element={<SidebarLayout/>}>
          <Route exact path="/home" element={<HomeScreen/>}></Route>
          <Route exact path="/product/:id" element={<ProductScreen/>}></Route> 
          <Route exact path="/cart" element={<CartScreen/>}></Route>
          <Route exact path="/myinfor" element={<MyInforSCreen/>}></Route>
          
          </Route>
          <Route exact path="/logout" element={<LogoutScreen/>}></Route>
          <Route exact path="/" element={<LoginScreen/>}></Route>
          <Route exact path="/regist" element={<RegistScreen/>}></Route>
          <Route exact path="/createProduct" element={<CreateProduct/>}></Route>
          <Route exact path="/adminProducts" element={<AdminProductsScreen/>}></Route>
          <Route exact path="/adminUsers" element={<AdminUsersScreen/>}></Route>
          <Route exact path="/updataProduct/:id" element={<UpdataProduct/>}></Route> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
