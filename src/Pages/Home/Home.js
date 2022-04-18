import React from 'react'
import photo from './images/06.JPG';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../Card/Card';

function Home() {
  return (
    <div id="home">
      <Card text="This page uses cards"></Card>
      <div id="card" class="card">
      
        <img src={photo} className="card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">Yan Xuan</h5>
          <p class="card-text">Studying in the Northeastern University.<br/>
            Sept 2021 - Expected May 2023.<br/>
            College of Engineering.<br/>
            Master degree of Information Systems.<br/>
            Target Position : Software Development
          </p>
          <a href="https://www.linkedin.com/in/yan-xuan-029375225/" class="btn btn-primary" target="_blank">Go to My Linkedin</a>
        </div>
      </div>
    </div>
    

  )
}

export default Home
