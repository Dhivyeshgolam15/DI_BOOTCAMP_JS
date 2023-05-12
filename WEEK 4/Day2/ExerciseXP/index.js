//ex1

const addNumbers = (num1, num2) => num1 + num2;

//ex2

function convertToGrams(weightInKg) {
    return weightInKg * 1000;
    }
    
    // Invoking function declaration
    console.log(convertToGrams(3)); // Output: 3000
    
    // Function Expression
    const convertToGramsExpression = function(weightInKg) {
    return weightInKg * 1000;
    };
    
    // Invoking function expression
    console.log(convertToGramsExpression(2.5)); // Output: 2500
    
    // One-line arrow function
    const convertToGramsArrow = (weightInKg) => weightInKg * 1000;
    
    // Invoking one-line arrow function
    console.log(convertToGramsArrow(2.5)); // Output: 2500
    
    // The difference between function declaration and function expression is that function declarations are hoisted to the top of the scope, meaning they can be called before they are defined in the code, while function expressions are not hoisted and must be defined before they are called.
    

    
    //EX3
    (function(numberOfChildren, partnerName, geographicLocation, jobTitle) {
        const sentence = "You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.";
        document.getElementById("output") = sentence4;
      })(2, "DG", "LONDON", "Software Engineer");
      {
        console.log(sentence)
      }


//ex4//it has its own file 


//ex5//it has its own file

    
    
    
    
    
    