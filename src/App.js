import React from "react";
import "./App.scss";

// import {BrowserRoute as Router,Route,Routes,Switch} from "react-router";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import MainPage from './components/mainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detial from './components/detial';

const App = (props) => {
  
    return(
      <Router>
        {/* <nav className="nav">
          <Link className="nav-link" to='/'>Main</Link>{" "}
          <Link className="nav-link" to='/detial'>Detial</Link>{" "}
        </nav> */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Main</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/detial">Detial</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        <Routes>
          <Route path='/' element={<MainPage/>}></Route>
          <Route path='/detial' element={<Detial/>}></Route>
        </Routes>
      </Router>
    )
  
}

export default App;