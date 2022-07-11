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