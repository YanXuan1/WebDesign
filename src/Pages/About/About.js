import React from 'react'
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../Card/Card';

function About() {
  return (
    <div id="about">
      <Card text="This page shows my skills"></Card>
    <div id="projects" class="container">
        <h1 class="display-6">Project Experiences</h1>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Design of Online Shopping System Project , Nov - Dec 2021
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                  <p>
                    Group Leader of Online Shopping System Project<br/>
                    •	The system provides a platform for multiple companies to cooperate and sell commodities, and simulates the entire process of user ordering and commodity production, as well as the operations of creating, retrieving, updating and deleting objects.<br/>
                    •	Created the MVC structure of the system in Java and JDBC. Used MySQL as the database.
                  </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                University of Science and Technology Beijing RoboCup Robot Design Project , Aug - Sept 2018
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                  <p>
                    Group Member of RoboCup Robot Design Project<br/>
                    •	Completed the action design and visual recognition of the robot NAO using Bhuman's framework in Python.<br/>
                    •	Won the 1st Prize in the final projects' competition.
                  </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                University of Science and Technology Beijing CradleCup Application Design Project , Nov - Dec 2017
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                  <p>
                    Group Member of CradleCup Application Design Project<br/>
                    •	Designed the application named “You Know”, which aims to help students search subject homework and test questions.<br/>
                    •	Designed the user interfaces of the application using Vue framework in JavaScript, HTML5 and CSS.<br/>
                    •	Won the 1st Prize in the final projects' competition.
                  </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
                University of Science and Technology Beijing Innovation and Entrepreneurship Program , Nov 2017 - Dec 2018
              </button>
            </h2>
            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                  <p>
                    Research Member of Healthy Biological Clock System Program<br/>
                    •	Connected traditional Chinese medical science with computer science by designing a system to show how Chinese medicine interprets human changes and performance related to weather and time.<br/>
                    •	Used Spring and MyBatis frameworks in Java to develop the back-end system.<br/>
                    •	Designed the user interface by using HTML5 and CSS.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div id="experience" class="container">
        <h1 class="display-6">Work Experiences</h1>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Jinqun Technology Company, Beijing, Mar - Jun 2021
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                  <p>
                  Intern - Java Background Development and Online Marketing<br/>
                  Research and Design Group<br/>
                    •	Developed an enterprise front-end and back-end interactive system by using SpringBoot and MyBatis frameworks in Java.<br/>
                    •	Modified user interfaces using Bootstrap, jQuery, Ajax in HTML5, CSS and JavaScript.<br/>
                    •	Designed the online marketing of the Pocket Video Storage app in a team, including directing and editing promotional videos, writing social media posts, and creating advertisements.
                  </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Shulian Zhongchuang Technology Company, Jun - Jul 2019
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                  <p>
                  Intern - WeInData Project Programmer<br/>
                  •	Optimized an algorithm for Waste Sorting based on four-layer convolutional neural network with pooling and ReLU.<br/>
                  •	Improved back-end using the Django framework in Python.<br/>
                  •	Created user interface using Bootstrap and Ajax.
                  </p>
              </div>
            </div>
          </div>
          </div>
        
      </div> */}

<div class="container" id="work">
<h1 class="display-6">Work Experiences</h1>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      Jinqun Technology Company, Beijing, Mar - Jun 2021
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <strong>Intern - Java Background Development and Online Marketing</strong><br/>
        Research and Design Group<br/>
        <p>
        •	Developed an enterprise front-end and back-end interactive system by using SpringBoot and MyBatis frameworks in Java.<br/>
        •	Modified user interfaces using Bootstrap, jQuery, Ajax in HTML5, CSS and JavaScript.<br/>
        •	Designed the online marketing of the Pocket Video Storage app in a team, including directing and editing promotional videos, writing social media posts, and creating advertisements.       
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      Shulian Zhongchuang Technology Company, Jun - Jul 2019
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <strong>Intern - WeInData Project Programmer</strong><br/>
        <p>
          •	Optimized an algorithm for Waste Sorting based on four-layer convolutional neural network with pooling and ReLU.<br/>
          •	Improved back-end using the Django framework in Python.<br/>
          •	Created user interface using Bootstrap and Ajax.
        </p>
      </div>
    </div>
  </div>
</div>

<div id="awards" class="container">
<h1 class="display-6">Awards</h1>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Excellent Student Scholarship, 2016 - 2020
          <span class="badge bg-primary rounded-pill">5</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Merit Student, 2017
          <span class="badge bg-primary rounded-pill">1</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Excellent Student Leader, 2018
          <span class="badge bg-primary rounded-pill">1</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          College Computer Design Competence, 3rd Prize
          <span class="badge bg-primary rounded-pill">1</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          RoboCup Competence, 1st Prize
          <span class="badge bg-primary rounded-pill">1</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          APP Design Competence, 1st Prize
          <span class="badge bg-primary rounded-pill">1</span>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default About
