import React from 'react';
import './Profile.css';
import photo1 from './images/photo1.JPG';
import photo2 from './images/photo2.JPG';
import photo3 from './images/photo3.JPG';
import photo4 from './images/photo4.JPG';
import photo5 from './images/photo5.JPG';
import photo6 from './images/photo6.JPG';
import photo7 from './images/photo7.JPG';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Card from '../Card/Card';

function Profile() {
  return (
    <div id="profile">
      <Card text="This page shows contact information and personal photo gallery"></Card>
    <div id="contact" className="container">
      <h1 class="display-6">Contact Information</h1>
            <table class="table table-striped table-hover caption-top">
                
                <thead>
                  <tr>
                    <th scope="col">※</th>
                    <th scope="col">Type</th>
                    <th scope="col">Info</th>
                    <th scope="col">Enabled</th>
                  </tr>
                </thead>
                <tbody id="myTable">
                  <tr>
                    <th scope="row">1</th>
                    <td>Mobile Phone1</td>
                    <td>123-321-4561</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Mobile Phone2</td>
                    <td>234-564-1236</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Email1</td>
                    <td>xuan.yan@northeastern.edu</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Email2</td>
                    <td>xy15533338451@163.com</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Email3</td>
                    <td>xuan.yan2331@gmail.com</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
              </div>
              <div id="carousel" class="container">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <h1 class="display-6" >Personal Photo Gallery</h1>
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={photo1} className="d-block w-100" alt='...'/>
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Chao Lake</h5>
                      <p>@Photographed by YanXuan</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={photo2} className="d-block w-100" alt='...'/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Charils River</h5>
                        <p>@Photographed by YanXuan</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={photo3} className="d-block w-100" alt='...'/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Northeastern University</h5>
                        <p>@Photographed by YanXuan</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={photo4} className="d-block w-100" alt='...'/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Fenway Park</h5>
                        <p>@Photographed by YanXuan</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={photo5} className="d-block w-100" alt='...'/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Citycruises</h5>
                        <p>@Photographed by YanXuan</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={photo6} className="d-block w-100" alt='...'/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Charils River</h5>
                        <p>@Photographed by YanXuan</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={photo7} className="d-block w-100" alt='...'/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Boston Central Park</h5>
                        <p>@Photographed by YanXuan</p>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
        </div>
          </div>
  )
}

export default Profile
