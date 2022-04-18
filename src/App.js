import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Profile from './Pages/Profile/Profile';
import ErrorPage from './Pages/ErrorPage';
import Skills from './Pages/Skills/Skills';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <Router>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <Link to = '/'>Home</Link> {"   "}
        <Link to = "/about">About</Link>{"   "}
        <Link to = "/profile">Profile</Link>{"   "}
        <Link to= "/skills">Skills</Link>{"   "}
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
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/profile">Profile</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/skills">Skills</a>
            </li>
          </ul>
          {/* <form class="d-flex">
            <input
              class="form-control me-2"
              id="myInput"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
      <Routes>
      <Route path = "/" element = {<Home/>}></Route>
      <Route path = "/about" element = {<About/>}></Route>
      <Route path = "/profile" element = {<Profile/>}></Route>
      <Route path = "*" element = {<ErrorPage/>}></Route>
      <Route path = "/skills" element = {<Skills/>}></Route>
      </Routes>
      <div id="footer" className="container">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="/" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="/">1</a></li>
          <li class="page-item"><a class="page-link" href="/about">2</a></li>
          <li class="page-item"><a class="page-link" href="/profile">3</a></li>
          <li class="page-item"><a class="page-link" href="/skills">4</a></li>
          <li class="page-item">
            <a class="page-link" href="/" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    </Router>
  );
}

export default App;
