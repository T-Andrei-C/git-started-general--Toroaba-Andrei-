let thisText = ""; //Calling a varriable

function logIntoTerminal(toLog, secondToLog) { //Calling a function and giving it a paramater
    let localText = ""; //creating a variabile inside the function
    console.log(localText); 
    console.log(thisText);
    console.log(toLog);
    console.log(secondToLog);

    function fourthFunction(){ //creating a function inside another function
        console.log("");

    } fourthFunction(); //calling a function inside another function
} 

let a = 3;
function anotherFunction(){ //creating a function to call another function
    logIntoTerminal("", a);
}

let b = 5;
const thirdFunction = function(){ //creating a variabile with the value of a function
    logIntoTerminal("", b);
   
}

let c = 1;
logIntoTerminal("", c);
anotherFunction();
thirdFunction();

function greetings(firstName){ //calling a function and giving it a paramater
    return firstName; 
}

console.log("Greetings: " + greetings("Anna"));
console.log("Greetings: " + greetings("Jake"));
console.log("Greetings: " + greetings("Isabella"));
console.log("Greetings: " + greetings("Andrew"));
console.log("Greetings: " + greetings("Mario"));