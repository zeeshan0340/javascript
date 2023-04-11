/* Write a function that creates a closure and returns a function that can add
a specific number to any number passed to it. For example, if the closure is
created with 5, the returned function should add 5 to any number passed
to it. */



function add(num){
    return function(number) //closure function
    {
        return num + number;
    }
}

const add5 = add(5); //here we create a variable (add5) which store the function add(num) with the by passing value 5 to it 
const result = add5(30); //Call the add5 function with an argument of 30, and store the result in a variable

console.log(result); // The result will be 35 as output 
