Exercises XP


Exercise 1: first react app
App.js

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Hello World!</h1>
    </div>
  );
}

export default App;


Exercise 2: JSX introduction


Exercise 3: no JSX


Exercise 4: Operations in JSX


Exercise 5: JSX and HTML


Exercise 6: JSX and HTML #2


Exercise 7: JSX and Form


Exercise 8: JSX and Variables


Solution Exercise 2 to Exercise 8

App.js

import React from 'react';

import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";

//JSX Exercises:

const myelement = <h1>I Love JSX!</h1>;

const myelement2 = React.createElement('h1', {}, 'I do not use JSX!');

const myelement3 = <h1>React is {5 + 5} times better with JSX</h1>;

const myelement4 = (
  <ul style={{textAlign: 'center', listStylePosition: 'inside'}}>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);


const myelement5 = <input type="text" />;


//Exercise 8

let age = '12';
let name = 'John'

let output = ( 
  <span>
    <strong>{name}</strong> is <strong>{age}</strong> years old
  </span>
);

function App() {
  return (
    <div className="App">

    <h1>JSX EXERCISES:</h1>

    <p>Exercise 1:</p>
     {myelement}

     <p>Exercise 2:</p>
     {myelement2}

     <p>Exercise 3:</p>
     {myelement3}

     <p>Exercise 4:</p>
     {myelement4}

     <p>Exercise 5:</p>
     <h1>I am a Header.</h1>
     <h1>I am a Header too.</h1>

     <p>Exercise 6:</p>
     {myelement5} <br/><br/>

     <p>Exercise 7:</p>
     {output}<br/><br/>


    </div>


  );
}

export default App;


Exercises XP GOLD


Exercise 1 : HTML Tags in React


Exercise 2 : Styling React Using CSS #1


Exercise 3 : Styling React Using CSS #2


Exercise 4 : Styling React Using CSS #3


Exercise 5 : Styling React Using CSS #4


Solution for all the XP GOLD Exercises

MyComponent.js

import React from 'react';

//Exercise 5
import './Mycomponent.css'


//Exercise 3
const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};


//Exercise 4
const mySuperStyles = {
  color: 'yellow',
  fontSize: "16px",
  fontWeight: 'bold',
  border: "1px solid yellow",
  backgroundColor: 'black',
  padding: "5px",
  borderRadius: '8px',
  cursor: 'pointer',
  margin: '10px'
};


function Mycomponent() {
  return (
    <div className="">


      <h1>HTML TAGS EXERCISE:</h1> <br></br>

      <h1>This is a Header</h1> <br></br>

      <p>This is a Paragraph</p> <br></br>

      <a href="#">This is a Link</a> <br></br><br></br>

      <form>
        <h2>This is a Form:</h2>
        <p>Enter your name:</p>
        <input type="text" />
        <input type="submit" value="Submit"></input>
      </form> <br></br>


      <h3>Here is an Image:</h3>
      <img src="https://probella.com/wp-content/uploads/2018/03/React-JS.png" alt="React" width="600" height="400"></img>


      <h4>This is a List:</h4>
      <ul style={{textAlign: 'center', listStylePosition: 'inside'}}>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul> <br></br>

      <h1>CSS EXERCISES:</h1> <br></br>

      <p>Exercise 1:</p>
      <h1 style={{color: "red"}}>Hello Style!</h1>

      <p>Exercise 2:</p>
      <h1 style={{color: "red", backgroundColor: "lightblue"}}>Hello Style!</h1>

      <p>Exercise 3:</p>
      <h1 style={mystyle}>Hello Style!</h1>

      <p>Exercise 4:</p>
      <button style={mySuperStyles}>I'm a stylish button</button>

      <p>Exercise 5:</p>
      <h1 className='newStyle'>Hello Style!</h1>


    </div>
  );
}

export default Mycomponent;
MyComponent.css

.newStyle {
  background-color: #282c34;
  color: white;
  padding: 40px;
  font-family: Arial;
  text-align: center;
}


Exercises XP GOLD #2


Exercise 1: Object


Exercise 2: Bootstrap


Exercise 3: NavBar


Exercise 4: Array & Map


Exercise 5: Array of objects & Map


Exercise 6: Bootstrap #2


Solution Exercises XP GOLD #2

App.js

import React from 'react';

import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";

//JSX Exercises:
//Arrays and Objects

//Exercise 1:

const customer2 = {
  first_name: 'Bob',
  last_name: 'Dylan'
};


//Exercise 2:

const data = {
  image: "https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/",
  cardTitle: "Bob Dylan",
  cardDescription: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
  button: {
    url: "https://en.wikipedia.org/wiki/Bob_Dylan",
    label: "Go to wikipedia"
  }
};


const content = <div className="card m-5" style={{width: '30rem'}}>
<img className="card-img-top" src={data.image} alt="Card image cap" />
<div className="card-body">
  <h5 className="card-title">{data.cardTitle}</h5>
  <p className="card-text">{data.cardDescription}</p>
  <a href={data.button.url} className="btn btn-primary">{data.button.label}</a>
</div>
</div>


//Exercise 3:

const navlinkItems = [
  <li className="nav-item">
    <a className="nav-link" href="#">Link to google.com</a>
  </li>,
  <li className="nav-item">
    <a className="nav-link" href="#">Link to facebook.com</a>
  </li>,
  <li className="nav-item">
    <a class="nav-link" href="#">Link to amazon.com</a>
  </li>
]

const content2 = <ul className='nav'>{navlinkItems}</ul>;



//Exercise 4:

const animals = [ 'Horse', 'Turtle', 'Elephan', 'Monkey' ];

const animals2 = animals.map((item, i) => {

  return <li key={i}>{item}</li>

});



//Exercise 5:

const animals3 = [ { label: 'Horse' }, { label: 'Turtle' }, { label: 'Elephan' }, { label: 'Monkey' } ];

const animals4 = animals3.map((item, i) => {

  return <li key={i}>{item.label}</li>

});


//Exercise 6:

const planets = [ 'Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune' ];

const planets2 = planets.map((planet, i) => {
  return <li key={i} className='list-group-item ' style={{width: '30rem'}}>{planet}</li>
});


function App() {
  return (
    <div className="App">

     <h1>ARRAYS AND OBJECTS EXERCISES:</h1>

     <p>Exercise 1:</p>
     <h1>My name is {customer2.first_name}</h1>
     <h2>My last name is {customer2.last_name}</h2> <br/><br/>

     <p>Exercise 2:</p>
     {content}

     <p>Exercise 3:</p>
     {content2} <br/><br/> <br/><br/>

     <p>Exercise 4:</p> 
     {animals2} <br/><br/>

     <p>Exercise 5:</p> 
     {animals4} <br/><br/>

     <p>Exercise 6:</p> 
     {planets2} <br/><br/>

    </div>


  );
}

export default App;


Exercises XP NINJA


Exercise 1 : Build a Responsive Landing Page with React
<link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.7/css/all.css">
<link rel="stylesheet" href="//use.fontawesome.com/releases/v5.11.1/css/all.css">
<link rel="stylesheet" href="//use.fontawesome.com/releases/v5.3.0/css/all.css">
App.js

import React from "react";
import "./App.css";

export default function App() {
  return(
        <div id='body'>
            <Header/>
            <Card 
                className='section'
                icon='fa fa-building'
                img='./'
                title='About the Company' 
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.'
            />

            <Card 
                className='section bg-grey'
                icon='fas fa-globe-africa'
                img='./' 
                title='Our Values'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.'
            />

            <Card 
                className='section'
                icon='fas fa-landmark'
                img='./' 
                title='Our Mission' 
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.'
            />
            <ContactContainer/>
        </div>
    );
}

const Header = () =>{
    return(
        <div className='header'>
            <span className='header-title'>
                Company
            </span>
            <br/>
            <span className="header-text">
                We specialise in something ...
            </span>
        </div>
    );
}







const Card = (props) =>{
    return(
        <div className={props.className} >
            <div className="small-div">
                <i className={props.icon}></i>

                <img src={props.img} width="100" height="100" alt=''/>
            </div>

            <div className="big-div">
                <span className='div-title'>
                    {props.title}
                </span>
                <br/>
                <span>
                    {props.description}
                </span>
            </div>
        </div>
    )
}



const ContactContainer = () => {
    return(
        <div className='contact-container bg-grey'>
            <span className="div-title">Contact us</span>
            <div className='contact-form'>
                <div id='sect1'>
                    <span>Contact us and we will get back to you within 24 hours.</span>
                    <span>
                        <i className="fas fa-map-marker-alt"></i>

                        Company Name
                    </span>
                    <span>
                        <i className="fas fa-mobile-alt"></i>

                        +256 778 800 900
                    </span>
                    <span>
                        <i className="fas fa-envelope"></i>

                        company.gmail.com
                    </span>
                </div>

                <div id='sect2'>
                    <span>
                        Contact
                    </span>

                    <input type="text" placeholder="email address" className="input-field"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="comment"></textarea>
                    <button className="contact-btn">Send</button>
                </div>
            </div>
        </div>
    );

}
App.css

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#body {
  min-height: 30vh;
  min-width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.header {
  background-color: #f4511e;
  color: white;
  width: 100%;
  text-align: center;
  height: 170px;
  padding: 30px;
}

.header-title {
  font-size: 50px;
}

.header-text {
  font-size: 20px;
}

.section {
  flex-flow: row wrap;
  width: 90%;
  display: flex;
  flex-direction: row wrap;
  align-items: center;
  justify-content: center;
}

.section > div {
  padding: 30px;
}

.fa-building{
  font-size: 120px;
  color: #f4511e
}

.fa-globe-africa{
  font-size: 120px;
  color: #f4511e
}

.fa-landmark{
  font-size: 120px;
  color: #f4511e
}

.small-div {
  width: 20%;
}

.big-div {
  width: 80%;
}

.bg-grey {
  background-color: #f6f6f6;
}

.orange {
  color: #f4511e;
}

.div-title {
  font-size: 30px;
  font-weight: 600;
}

.contact-container {
  flex-flow: column;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  width: 80%;
}
.div-title {
  text-align: center;
}

.contact-form {
  display: flex;
  flex-direction: row;
  /*flex-flow: row wrap;*/
  justify-content: space-between;
  width: 100%;
}

#sect1 {
  width: 100%;
}

#sect2 {
  width: 100%;
}

.contact-form > div {
  width: 500px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px;
}

.input-field {
  height: 40px;
  margin: 15px 0;
}

.contact-btn {
  margin-top: 15px;
  height: 40px;
  color: white;
  border: 0;
  background-color: #f4511e;
}

@media only screen and (min-width: 320px) and (max-width: 725px) {
  .contact-form {
    display: flex;
    flex-direction: column;
    /*flex-flow: row wrap;*/
    width: 80%;
  }

  .section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .small-div {
    width: 80%;
  }

  .fa-building{
    display: flex;
    justify-content: center;
  }

  .fa-globe-africa{
    display: flex;
    justify-content: center;
  }

  .fa-landmark{
    display: flex;
    justify-content: center;
  }
}


//Daily Challenge: React Carousel
App.js

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
    margin: 'auto',
    width: '500px'
  };

function App() {
  return (
    <div style={styles}>
        <Carousel>
            <div>
                <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" alt="Hong Kong" />
                <p className="legend">Hong Kong</p>
            </div>
            <div>
                <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" alt="Singapore"/>
                <p className="legend">Macao</p>
            </div>
            <div>
                <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" alt="Japan"/>
                <p className="legend">Japan</p>
            </div>
            <div>
                <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt="Las Vegas"/>
                <p className="legend">Las Vegas</p>
            </div>
        </Carousel>
    </div>
  );
}

export default App;
Introduction To React
Introduction to React
Solution - Exercices JS- W8D1
Create a React app
 Today Guideline - Winner Hackathon
