//JSX-JavaScript XML
//Allows HTML elements to be written in JS codes

//Sample
const jsxElement = <h1>I am a JSX element</h1>
const title = <h2>Getting Started React</h2>

const header = (
    <header>
        <h1>Welcome to 30 Days of React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <p>Asabeneh Yetayeh</p>
        <small>Oct 2, 2020</small>
    </header>
)

//Commenting JSX Element
{
    /*const header = (
        <header>
            <h1>Welcome to 30 Days of React</h1>
            <h2>Getting Started React</h2>
            <h3>JavaScript Library</h3>
            <p>Asabeneh Yetayeh</p>
            <small>Oct 2, 2020</small>
        </header>
    )*/
}

//SOLUTION TO EXERCISES
//What is React?
//React is a JS library for building reusable UIs.


//What is a library?
//Collections of pre-written code snippets that can be used and reused to perform practical tasks. Allows for easy development. 

//What is a single page application?
//Application with a single HTML page.

//What is a component ?
//React components are independent and reusable piece of JSX code. They are the building blocks of any React application.

//What is the latest version of React?
//The current version is 16.13.1 

//What is DOM?
//Document Object Model- is an application programming interface (API) for HTML and XML documents.

//What is React Virtual DOM?
//The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a copy of the DOM, that can be updated without affecting the actual DOM.

//What does a web application or a website(composed of) have?
//A web application, or a website, is made of buttons, links, forms with different input fields, header, footer, sections, articles, texts, images, audios, videos and boxes with different shapes. 

//Why did you chose to use react?
//fast
//modular
//scalable
//flexible
//big community and popular
//open source
//High job opportunity

//What measures do you use to know popularity ?
//One measure of popularity could be GitHub repository stars, watchers and forks.

//What is more popular, React or Vue ?
//React

//What is an HTML element?
//An HTML element has an opening and closing tags, content, and attribute in the opening tag. 

//How to write a self closing HTML element?
//It is an HTML element with no content and closing tag

//What is an HTML attribute? Write some of them
//HTML attributes used inside the opening tag to provide additional information about an element such as title, dimensions, style information etc.
//Examples include href, src, placeholder, target, alt etc.

//What is JSX?
//JSX stands for JavaScript XML. JSX allows us to write HTML elements with JavaScript code.

//What is babel?
//Babel is a library which transpiles JSX to pure JavaScript and latest JavaScript to older version. 

//What is a transpiler?
//converts program written in one language to another language 

//What is a JSX element?
//JSX has a JavaScript and HTML like syntax. JSX element could be a single HTML element or many HTML elements wrapped in a parent HTML element.

//Write your name in a JSX element and store it in a name variable
const myName = (
    <div>Michael</div>
)

//Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable
const user = (
    <h1>Taiwo Adedeji</h1>,
    <p>Nigeria</p>,
    <p>Developer</p>,
    <p>Male</p>,
    <p>dtaiwo45@gmail.com</p>,
    <p>+2349065199898</p>
) 

 //Write a footer JSX element
 const footer = (
     <footer>
          <p className = "footer-wrapper"><small>Copyright 2021</small></p>
     </footer>
     )

 //Create a style object for the main JSX
const mainStyle = {
    color: "red", 
    backgroundColor: "skyblue", 
    fontSize: "20px"
}

const main = (
    <main className = "main-wrapper">
        <div style = {mainStyle}>
            <p>Prerequisite for getting started in {" "} <strong><em>React.js</em></strong>: </p>
            <ul style = {{fontWight: "bolder"}}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
            </ul>
        </div>
    </main>
)

//Create a style object for the footer and app JSX
const footer1 = (
    <p style = {{fontWeight: "smaller", color: "gray"}}>Copyright 2021</p>
)

//Apply different styles to your JSX elements
const main2 = (
    <main className = "main-wrapper">
        <div style = {mainStyle}>
            <p>Prerequisite for getting started in {" "} <strong><em>React.js</em></strong>: </p>
            <ul style = {{fontWight: "bolder", fontStyle: "italic"}}>
                <li style = {{color: "brown"}}>HTML</li>
                <li style = {{color: "green"}}>CSS</li>
                <li style = {{color: "yellow"}}>JS</li>
            </ul>
        </div>
    </main>
)


//Practice how to make JSX element and injecting dynamic data(string, number, boolean, array, object)
const person = {
    firstName: "Adedeji",
    lastName: "Taiwo"
}
 const myCountry = "Nigeria";
 const titles = "Developer";
 const gender = "Male";
 const mail = "dtaiwo45@gmail.com";
 const phone  = "08090194732";
 const isMarried = false;
 const skills = ["HTML", "CSS", "Javascript"]; 
 const skillSet = skills.map((skill) => <li key = {skill}>{skill}</li>);


 const userInfo = (
     <h1>{person.firstName} {person.lastName}</h1>,
     <p>{myCountry}</p>,
     <p>{titles}</p>,
     <p>{gender}</p>,
     <p>{mail}</p>,
     <p>{phone}</p>,
     <p>{isMarried}</p>,
     <ul>{skillSet}</ul>
 )

const app = (
    <div className = "app">
        {header}
        {main2}
        {userInfo}
        {footer1}
    </div>
)

const rootElement = document.querySelector(".root");

ReactDOM.render(app, rootElement);