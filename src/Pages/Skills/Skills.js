import React from 'react';
import './Skills.css';
import Card from '../Card/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import photo1 from './images/01.jpg';
import photo2 from './images/02.jpg';
import photo3 from './images/03.jpg';
import photo4 from './images/04.jpg';
import photo5 from './images/05.jpg';
import photo6 from './images/06.jpg';
import photo7 from './images/07.jpg';
import photo8 from './images/08.jpg';
import photo9 from './images/09.jpg';
import photo10 from './images/10.jpg';
import photo11 from './images/11.jpg';
import photo12 from './images/12.jpg';


const skillName1 = {Python: photo1, Java: photo2, "C++":photo3, C:photo4};
const skillName2 = {IDEA:photo5,PyCharm:photo6,Eclipse:photo7,VSCode:photo8};
const skillName3 = {Spring:photo9,Django:photo10,React:photo11,Vue:photo12};

const createCard1 = Object.entries(skillName1).map(([key,value]) =>
<div class="col">
<div class="card">
<img src={value} class="card-img-top" alt="..."/>
<div class="card-body">
  <h5 class="card-title">{key}</h5>
  <p class="card-text"></p>
</div>
</div>
</div>
);

const createCard2 = Object.entries(skillName2).map(([key,value]) =>
<div class="col">
<div class="card">
<img src={value} class="card-img-top" alt="..."/>
<div class="card-body">
  <h5 class="card-title">{key}</h5>
  <p class="card-text"></p>
</div>
</div>
</div>
);

const createCard3 = Object.entries(skillName3).map(([key,value]) =>
<div class="col">
<div class="card">
<img src={value} class="card-img-top" alt="..."/>
<div class="card-body">
  <h5 class="card-title">{key}</h5>
  <p class="card-text"></p>
</div>
</div>
</div>
);

function Skills(){
    return(
        <div id="skills">
            <div className="container">
               <Card text="This page uses react map() to create cards"></Card>
               <h1 class="display-6">Technical Skills</h1>
               <div class="row" align="center">{createCard1}</div>
               <h1 class="display-6">Framework Skills</h1>
               <div class="row" align="center">{createCard3}</div>
               <h1 class="display-6">Software Skills</h1>
               <div class="row" align="center">{createCard2}</div>
            </div>
            
            
        </div>
        

    )
}

export default Skills