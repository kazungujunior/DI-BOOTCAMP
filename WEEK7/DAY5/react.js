//Exercises XP


//Exercise 1: Function & JSX


//Exercise 2: Creating a functional Component


//Exercise 3: Bootstrap


//Exercise 4: Component Properties


//Exercise 5: Jumbotron


//Solution of all Exercises XP

App.js

import React from "react";
import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import PropTypes from "prop-types";

//Exercises React Function

//1
// WHAT: This function returns a string that will be rendered
const PrintHello = () => {
  return <h1>I Love React</h1>;
};

//2
const PrintHello2 = () => {
  return <h1>I'm a React Component</h1>;
};

//3
const BootstrapCard = () => {
  return (
    <div className="card m-5" style={{ width: "30rem" }}>
      <img
        className="card-img-top"
        src="https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">Bob Dylan</h5>
        <p className="card-text">
          Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American
          singer/songwriter, author, and artist who has been an influential
          figure in popular music and culture for more than five decades.
        </p>
        <a
          href="https://en.wikipedia.org/wiki/Bob_Dylan"
          className="btn btn-primary"
        >
          Go to wikipedia
        </a>
      </div>
    </div>
  );
};

//4

const BootstrapCard2 = (props) => {
  return (
    <div className="card m-5" style={{ width: "30rem" }}>
      <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.buttonUrl} className="btn btn-primary">
          {props.buttonLabel}
        </a>
      </div>
    </div>
  );
};

BootstrapCard2.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  buttonUrl: PropTypes.string,
  buttonLabel: PropTypes.string,
};

//5
const Jumbotron = (props) => {
  return (
    <div class="jumbotron m-5">
      <h1 class="display-4">{props.title}</h1>
      <p class="lead">{props.description}</p>
      <a class="btn btn-primary btn-lg" href="#" role="button">
        {props.buttonLabel}
      </a>
    </div>
  );
};

Jumbotron.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
};


function App() {
  return (
    <div className="App">
      <p>Exercise 1:</p>
      {PrintHello()}

      <p>Exercise 2:</p>
      <PrintHello2 />

      <p>Exercise 3:</p>
      <BootstrapCard />

      <p>Exercise 4:</p>
      <BootstrapCard2
        title="McCartney"
imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg"
        buttonLabel="Go to Wikipedia"
        buttonUrl="https://en.wikipedia.org/wiki/Paul_McCartney"
        description="Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles."
      />

      <p>Exercise 5:</p>
      <Jumbotron
        title="Hello, world!"
        description="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
        buttonLabel="Learn more"
      />

    </div>
  );
}

export default App;


//Exercises XP #2


//Exercise 1: Alert


//Exercise 2: Conditional Rendering


//Exercise 3: Smart Alert


//Exercise 4: More Alert colors


//Solution of all the Exercises XP #2

App.js

import React from "react";
import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import PropTypes from "prop-types";

//Exercises React Function
//6
const Alert = (props) => {
  return (
    <div class="alert alert-danger" role="alert">
      {props.text}
    </div>
  );
};

// Alert.propTypes = {
//   text: PropTypes.string
// }

//7
const Alert2 = (props) => {
  //adding the condition
  console.log("Will show me the property show value", props.show);

  if (props.show === false) {
    return null;
  } else {
    return (
      <div class="alert alert-danger" role="alert">
        {props.text}
      </div>
    );
  }
};


//8
const Alert3 = props => {

  let color = 'alert-primary';

  if(props.color == 'red') color = 'alert-danger';
  else if(props.color == 'orange') color = 'alert-warning';

  return(
    <div className={`alert ${color}`} role='alert'>
      {props.text}
    </div>
  )

}


//9
const Alert4 = props => {

  const colorClasses = {
    red: 'alert-danger',
    orange: 'alert-warning',
    green: 'alert-success'
  };

  if(colorClasses[props.color] === undefined) alert(`The color ${props.color} is not in the List`);

  return (
    <div className={`alert ${colorClasses[props.color]}`} role='alert' >
      {props.text}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <p>Exercise 6:</p>
      <Alert text="OMG! Something really bad has happended!" />

      <p>Exercise 7:</p>
      <Alert2 text="This is a danger alert—check it out!" />

      <p>Exercise 8:</p>
      <Alert3 text="This is a danger alert—check it out!" color='orange' />

      <p>Exercise 9:</p>
      <Alert4 text="OMG! Something really bad has happended!" color='red' />
      <Alert4 text="Well its not that bad after all!" color='orange' />
      <Alert4 text="I'm supposed to be green" color='green' />
      <Alert4 text="What is this color ?" color='blue' />


    </div>
  );
}

export default App;


//Exercises XP GOLD


//Exercise 1: Car
Car.js

import React from 'react';

//Exercise 1 Function Component

function Car() {
    return (
        <div className="App">

            <p>Exercise 1:</p>
            <h2>Hi, I am a Car!</h2>

        </div>
    );
}

export default Car;
App.js

import React from 'react';
import logo from './logo.svg';
import './App.css';

import Car from './Components/Car';


function App() {
  return (
    <div className="App">

     <Car />

    </div>
  );
}

export default App;


//Exercise 2: Class Component
Car.js

import React from 'react';
//Exercise 2 Class Component

class Car extends React.Component{
    render(){

        return (
            <div className="App">

             <p>Exercise 1:</p>
             <h2>Hi, I am a Car!</h2>

            </div>
          );

    }

  }



  export default Car;
App.js

import React from 'react';
import logo from './logo.svg';
import './App.css';

import Car from './Components/Car';


function App() {
  return (
    <div className="App">

     <Car />

    </div>
  );
}

export default App;


//Exercise 3: Component Constructor
Car.js

import React from 'react';

class Car extends React.Component{

    //Exercise 3 Constructor
    constructor() {
        super();
        this.state = {
            color: "red"
        };
      }

    render(){

        return (
            <div className="App">

             <p>Exercise 3:</p>
             <h2>Hi, I am a {this.state.color} Car!</h2>

            </div>
          );

    }

  }



  export default Car;
Same App.js as above



Exercise 4: Components in Components:
Garage.js

import React from 'react';


class Garage extends React.Component {

  render() {

    return (
      <div>
        <h1>Who lives in my Garage?</h1>
      </div>

    );
  }
}


export default Garage;
Car.js

import React from 'react';

import Garage from './Garage';

class Car extends React.Component{

    //Exercise 3 Constructor
    constructor() {
        super();
        this.state = {

            color: "red"
        };
      }

    render(){

        return (
            <div className="App">

                <p>Exercise 4:</p>
                <Garage />
                <h2>Hi, I am a Car!</h2>

            </div>
          );

    }

  }



  export default Car;
Same App.js as above



//Exercise 5: React Props:
Garage.js

import React from 'react';


class Garage extends React.Component {

  render() {

    return (
      <div>
        <h1>Who lives in my {this.props.size} Garage?</h1>
      </div>

    );
  }
}


export default Garage;
App.js

import React from 'react';
import logo from './logo.svg';
import './App.css';

import Garage from './Components/Garage'

function App() {
  return (
    <div className="App">

     <p>Exercise 5:</p>
     <Garage size="small" />

    </div>
  );
}

export default App;


Exercise 6: Car Info
Info.js

import React from 'react';



class Info extends React.Component {

  render() {

    return (
      <div>

        <h2>I am a {this.props.brand.model}!</h2>


      </div>

    );
  }
}


export default Info;
App.js

import React from 'react';
import logo from './logo.svg';
import './App.css';

//Exercise 6
import Info from './Components/Info'

//Exercise 6:
const carinfo = {name: "Ford", model: "Mustang"};


function App() {
  return (
    <div className="App">

     <p>Exercise 6:</p>
     <Info brand={carinfo} />

    </div>
  );
}

export default App;


//Exercise 7: Props in the Constructor
Hobby.js

import React from 'react';


class Hobby extends React.Component {

    constructor(props) {
        super(props);
      }

  render() {

    return (
      <div>

        <h2>I love to {this.props.hobby}!</h2>


      </div>

    );
  }
}


export default Hobby;
App.js

import React from 'react';
import logo from './logo.svg';
import './App.css';

//Exercise 7:
import Hobby from './Components/Hobby'


function App() {
  return (
    <div className="App">

     <p>Exercise 7:</p>
     <Hobby hobby='race' />

    </div>
  );
}

export default App;


Exercise 8: React State


Exercise 9:Changing the state Object


Solution Exercise 8 & 9

Phone.js

import React from 'react';


class Phone extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
          };
      }

      //Exercise 9
      changeColor = () => {
        this.setState({color: "blue"});
      }

  render() {

    return (
      <div>

        <h1>My phone is a {this.state.brand}</h1>
        <p>It is a {this.state.color} {this.state.model} from {this.state.year}</p>

        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>

      </div>

    );
  }
}


export default Phone;
App.js

import React from 'react';
import logo from './logo.svg';
import './App.css';

//Exercise 8:
import Phone from './Components/Phone'


function App() {
  return (
    <div className="App">

     <p>Exercises 8:</p>
     <Phone />

    </div>
  );
}

export default App;


//Daily Challenge : Voting App
App.js

import React,{Component} from 'react';
import './App.css';

class App extends Component{

    constructor(props){
    super(props);

        this.state = {
            languages : [
                {name: "Php", votes: 0},
                {name: "Python", votes: 0},
                {name: "JavaSript", votes: 0},
                {name: "Java", votes: 0}
            ]
        }

    }

    vote (i) {
        let newLanguages = [...this.state.languages];
        newLanguages[i].votes++;

        this.setState({languages: newLanguages});

    }

    render(){
        return(
            <div>
                <h1>Vote Your Language!</h1>
                <div className="languages">
                    {
                        this.state.languages.map((lang, i) => 
                            <div key={i} className="language">
                                <div className="voteCount">
                                    {lang.votes}
                                </div>
                                <div className="languageName">
                                    {lang.name}
                                </div>
                                <button onClick={this.vote.bind(this, i)}>Click Here</button>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}
export default App;
App.css

*{
  margin: 0;
  padding: 0;
}

body {
  text-align: center;
  color: #222;
  font-size: 24px; 
  font-family: sans-serif;
}

h1 {
  margin: 30px;
}

.languages {
  height: 400px;
  width: 400px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
}

.language {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  background-color: blanchedalmond;
  border: 1px solid #222;
  margin: 2px;
}

.voteCount {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.language button {
  color: green;
  background-color: #0000;
  border: none;
  font-size: 30px;
  outline: none;
  cursor: pointer;
}
React components & State
Solution - Exercises - JS - W8D2
