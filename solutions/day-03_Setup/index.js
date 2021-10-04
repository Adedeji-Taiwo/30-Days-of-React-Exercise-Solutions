// to import the doSomeMath from the math.js with or without extension
import doSomething from "./maths.js"

// to import the other modules
// since these modules were not exported as default we have to desctructure
import { addTwo, multiply, subtract } from "./maths.js"

// to import everything remaining
import * as everything from "./maths.js"

console.log(addTwo(5, 6));
console.log(doSomething.addTwo(5, 3));
console.log(everything);
