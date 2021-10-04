//Inline Styling

/*
// importing the react and react-dom package
import React from 'react';
import ReactDOM from 'react-dom';



const headerStyles = {
  backgroundColor: "#61dbfb",
  fontFamily: "Helvetica Neue",
  padding: 25,
  lineHeight: 1.5
}


//jsx element header
const header = (
  <header style = {headerStyles}>
    <div className = "header-wrapper">
    <h1>Welcome to 30 Days of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
    </div>
  </header>
)



const mainStyles = {
  backgroundColor: "#f3f0f5"
}

//jsx element main
const main = (
  <main style = {mainStyles}>
    <div className = "main-wrapper">
    <p>Prerequisite to get started {" "} <strong><em>react.js</em></strong>:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
    </div>
  </main>
)


const footerStyles = {
  backgroundColor: "#61dbfb"
}


//JSXelement footer
const footer = (
  <footer style = {footerStyles}>
    <p>Copyright 2020</p>
  </footer>
)


//JSX element app-container
const app = (
  <div className = "app">
    {header}
    {main}
    {footer}
  </div>
)




const rootElement = document.getElementById("root")

ReactDOM.render(app, rootElement);

*/



// Internal Styling & Data Injection
import React from 'react'
import ReactDOM from 'react-dom'
import deji from "./images/deji.png"
import countryList from './module'
import frontend_technonlogies from "./images/frontend_technologies.png"



// To get the root element from the HTML document

// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li key = {tech}>{tech}</li>)


//Injecting media 
const user = (
  <div className = "image-wrapper">
    <img src = {deji} alt ="deji" /> 
  </div>
)


// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {user}
    </div>
  </main>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)





// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)



//Exercise
//What is module?
//Single or multiple functions contained in a file which can be imported or exported.

//What is package
//It is a module or aggregation of modules.

//What is the difference between a module and a package.
//modules are functions while package is a module which is a collection of functions.

//What is NPM? Node package manager-helps to consume js modules, create packages as well as distribute them.

//What is Webpack?
//webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser,

//How do you create a new React project?
//By running any of the following command in the cli
//npx create-react-app name-of-your-project
//pm install -g create-react-app

//Try to make a different custom module in a different file and import it to index.js.
console.log(countryList)


//Import and render the following images
const frontend = (
  <div className = "frontend-wrapper">
    <img src = {frontend_technonlogies} alt = "frontend"/>
  </div>
)

const apps = (
  <div className='app'>
    {header}
    {main}
    {frontend}
    {footer}
  </div>
)

const rootElements = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(apps, rootElements)


//Use h1, p, input and button HTML elements to create the following design using JSX

const topic = "Subscribe";
const subTopic = "Sign up with your email address to recieve news and update"
const type = "text";
const placeholder1 = "First name";
const placeholder2 = "Second Name";
const placeholder3 = "Email";


const input1 = (
  <div style = {{marginTop: "5px", display: "flex", flexWrap: "wrap", gap: "5px", justifyContent: "center"}}>
    <input type = {type} placeholder = {placeholder1} style = {{outline: "none", border: "none", padding: " 5px",  marginBottom: "5px", fontSize: "10px"}}/>
    <input type = {type} placeholder = {placeholder2} style = {{outline: "none", border: "none", padding: " 5px",  marginBottom: "5px", fontSize: "10px"}}/>
    <input type = {type} placeholder = {placeholder3} style = {{outline: "none", border: "none", padding: " 5px",  marginBottom: "5px", fontSize: "10px"}}/>
  </div>
)


const main2 = (
  <div style = {{backgroundColor: "#c2e6f4", width: "100%", display: "flex", flexDirection:"column", justifyContent: "center", gap: "20px", alignItems: "center", paddingTop: " 20px",  paddingBottom: " 20px"}}>
    <h1 style = {{fontSize: "18px", textTransform: "uppercase", fontWeight: "bold"}}>{topic}</h1>
    <p style = {{textAlign: "center", fontSize: "14px"}}>{subTopic}</p>
    <div>{input1}</div>
    <button style = {{backgroundColor: "#f37474", outline: "none", border: "none", color: "#fff", width: "170px", paddingTop: " 5px",  paddingBottom: " 5px", borderRadius: "3px"}}>{topic}</button>
  </div>
)



const app2 = (
  <div className='app'>
    {header}
    {main}
    {main2}
    {frontend}
    {footer}
  </div>
)

const rootElement2 = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app2, rootElement2)



//Design the following user card.
const user3 = (
    <img src = {deji} alt = "dj" style = {{width: "100px", height: "100px", borderRadius: "50%"}}/>
)

const names = "TAIWO ADEDEJI";
const level = "Junior Developer, Nigeria";
const section = "SKILLS";

const name = (
  <div style = {{display: "flex", alignItems: "center"}}>
      <p style = {{marginRight: "7px", fontWeight: "500"}}>{names}</p>
      <p style = {{color: "#fff", backgroundColor: "#2acfcf", borderRadius: "50%", width: "11px", height:"11px", display:"flex", justifyContent: "center", alignItems: "center"}}><span style = {{fontSize: "8px"}}>&#128504;</span></p>
  </div>
)

const skills = (
  <div>
    <p style = {{fontWeight: "500", fontSize: "12px", marginBottom: "10px"}}>{section}</p>
    <p style = {{display: "flex", gap:"5px", flexWrap: "wrap"}}>
      <span style = {{color: "#fff", backgroundColor: "#2acfcf", fontSize: "10px", padding: "3px", borderRadius: "3px" }}>HTML</span>
      <span style = {{color: "#fff", backgroundColor: "#2acfcf", fontSize: "10px", padding: "3px", borderRadius: "3px" }}>CSS</span>
      <span style = {{color: "#fff", backgroundColor: "#2acfcf", fontSize: "10px", padding: "3px", borderRadius: "3px" }}>Sass</span>
      <span style = {{color: "#fff", backgroundColor: "#2acfcf", fontSize: "10px", padding: "3px", borderRadius: "3px" }}>JS</span>
      <span style = {{color: "#fff", backgroundColor: "#2acfcf", fontSize: "10px", padding: "3px", borderRadius: "3px" }}>React</span>
      <span style = {{color: "#fff", backgroundColor: "#2acfcf", fontSize: "10px", padding: "3px", borderRadius: "3px" }}>Redux</span>
      <span style = {{color: "#fff", backgroundColor: "#2acfcf", fontSize: "10px", padding: "3px", borderRadius: "3px" }}>Node</span>
      <span style = {{color: "#fff", backgroundColor: "#2acfcf", fontSize: "10px", padding: "3px", borderRadius: "3px" }}>MongoDb</span>
      <span style = {{color: "#fff", backgroundColor: "#2acfcf", fontSize: "10px", padding: "3px", borderRadius: "3px" }}>Python</span>
      <span style = {{color: "#fff", backgroundColor: "#2acfcf", fontSize: "10px", padding: "3px", borderRadius: "3px" }}>Flask</span>
      <span style = {{color: "#fff", backgroundColor: "#2acfcf", fontSize: "10px", padding: "3px", borderRadius: "3px" }}>Django</span>
      <span style = {{color: "#fff", backgroundColor: "#2acfcf", fontSize: "10px", padding: "3px", borderRadius: "3px" }}>NumPy</span>
      <span style = {{color: "#fff", backgroundColor: "#2acfcf", fontSize: "10px", padding: "3px", borderRadius: "3px" }}>Pandas</span>
      <span style = {{color: "#fff", backgroundColor: "#2acfcf", fontSize: "10px", padding: "3px", borderRadius: "3px" }}>Data Analysis</span>
      <span style = {{color: "#fff", backgroundColor: "#2acfcf", fontSize: "10px", padding: "3px", borderRadius: "3px" }}>MYSQL</span>
      <span style = {{color: "#fff", backgroundColor: "#2acfcf", fontSize: "10px", padding: "3px", borderRadius: "3px" }}>GraphQL</span>
      <span style = {{color: "#fff", backgroundColor: "#2acfcf", fontSize: "10px", padding: "3px", borderRadius: "3px" }}>D3.js</span>
      <span style = {{color: "#fff", backgroundColor: "#2acfcf", fontSize: "10px", padding: "3px", borderRadius: "3px" }}>Gatsby</span>
      <span style = {{color: "#fff", backgroundColor: "#2acfcf", fontSize: "10px", padding: "3px", borderRadius: "3px" }}>Docker</span>
      <span style = {{color: "#fff", backgroundColor: "#2acfcf", fontSize: "10px", padding: "3px", borderRadius: "3px" }}>Git</span>
    </p>
  </div>
)


const main3 = (
  <div style = {{padding: "20px"}}> 
    <div style = {{}}>{user3}</div>
    {name}
    <p style = {{fontSize: "10px", marginBottom: "10px"}}>{level}</p>
    {skills}
  </div>
)






const app3 = (
  <div className='app'>
    {header}
    {main}
    {main2}
    {main3}
    {frontend}
    {footer}
  </div>
)

const rootElement3 = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app3, rootElement3)