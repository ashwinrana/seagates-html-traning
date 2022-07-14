// alert("hello");
document.getElementById('demo').innerHTML = "Hello Before Edit";

function showDataAndTime(message) {
    document.getElementById('demo').innerHTML =  message + ' ' + Date();
}

function addedNumbers (firstNumber, secondNumber) {
    document.getElementById('demo').innerHTML = this.add(firstNumber, secondNumber);
}

function add (firstNumber, secondNumber) {
    return firstNumber + secondNumber; 
}

/**
 * Operators
 * +
 */

console.log("You can only see this in Console");
/**
if(a>=80 and a <= 90) {
    Distinction
} else if (a>=70 and a<= 79) {
    First Division
} else if (a>=69 and a <= 59) {
    Second Division
} else {
    fail
}

switch( a ) {
    case a 50
    // statement
    break;

    default:
        fail

}

for // staring, condition, increment or decrement
while // condition
do while // do condition

function name() {
    // statement
}
*/




// var and let scope

var globalVariable = "You can use me throughout js execution.";

function test() {
    let scopedVariable = "You can use me only in this function."
}


/**
 * Operator
 * 
 * = for assign
 * == for checking equal value
 * === for checking equal value with same data type
 * != for checking both value are not equal
 * !== for checking both value are not equal with the same data type
*/

/**
 * Array and Object
 */
var MyFirstArray = [1, 2, 3];

console.log(MyFirstArray); // Display All data of array
console.log(MyFirstArray[1]); // Display the data of Array index 1

var MyFirstObject = {"kona" : { color: "red", model: "EV", seatCapacity: 4, battery: { model: "P200", maxCapacity: "1000 KW"} } };

console.log(MyFirstObject); // Display the whole object's properties
console.log(MyFirstObject.model); //Display which property you need to access.

var person = {
    firstName: "John",
    lastName: "Doe",
    id: 1234,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

var carName = "Toyota \n Wow";

// Get string length
carName.length;

//Slice
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13); //Banana

//String Replace
part.replace("Banana", "orange");

// To upper and to lower function
part.toUpperCase();
part.toLowerCase();

// Joint two string or more.
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat( " ", text2);
let text4 = text1 + ' ' + text2;

// trim
let whiteSpacedWord = "             Hello World             ";
console.log(whiteSpacedWord.trim());

//Padstart padend
let mo = "36";
console.log(mo.padStart(10, "X"));

let mo2 = "98";
console.log(mo2.padEnd(10, "X"));

//charAt
let charWord = "lorem ipsum";
console.log(charWord.charAt(0));

//split

let WholeName = "Jhon Doe";
console.log(WholeName.split(" "));

//indexOf, search and charAt

let word = "Please Locate me in this string.";
console.log( word.indexOf("me"));

console.log( word.search("me"));