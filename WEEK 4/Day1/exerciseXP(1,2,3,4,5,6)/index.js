//*ex1
// #1.1
// The value of 'a' inside the funcOne function will be 3.
// This is because 'a' is initially assigned a value of 5,
// but then the condition of the if statement is met,
// so 'a' is assigned a new value of 3.

// #1.2
// If 'a' is declared with const instead of let,
// it will result in a TypeError because the value of
// a cannot be reassigned since it is a constant.

// #2.1
// The first call to funcThree will output "inside the funcThree function 0",
// since 'a' is initially assigned a value of 0. After that, funcTwo is called
// and sets the value of 'a' to 5. The second call to funcThree will output
// "inside the funcThree function 5", since 'a' has been reassigned to 5.

// #2.2
// If 'a' is declared with const instead of let,
// it will result in a TypeError because the value of
// 'a' cannot be reassigned since it is a constant.

// #3.1
// The function funcFour sets the global variable 'a' to the string "hello".
// The function funcFive then reads the value of 'a' and outputs it as part of
// a string. Therefore, the output of the second function will be "inside the funcFive function hello".

// #4.1
// The function funcSix defines a local variable 'a' with a value of "test",
// which is different from the global variable 'a' with a value of 1.
// The output of the function will be "inside the funcSix function test".

// #4.2
// If 'a' is declared with const instead of let,
// it will result in a SyntaxError because the value of 'a'
// cannot be reassigned since it is a constant.

// #5.1
// The first alert inside the if block will output "in the if block 5"
// because 'a' is assigned a value of 5 inside the if block.
// The second alert outside the if block will output "outside of the if block 2"
// because the value of 'a' assigned outside the if block is still 2.

// #5.2
// If 'a' is declared with const instead of let,
// it will result in a SyntaxError because the value of 'a'
// cannot be reassigned since it is a constant.

//ex2

const winBattle = () => {
    return true;
  }
  
  const experiencePoints = winBattle() ? 10 : 1;
  
  console.log(experiencePoints);
  
  //ex3
  
  const isString = value => typeof value === 'string' ? true : false;
  
  console.log(isString('hello')); //true
  console.log(isString([1, 2, 4, 0])); //false
  
  //ex4
  
  const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
  
  // loop through the colors array and display each color with its corresponding number
  for (let i = 0; i < colors.length; i++) {
  console.log(`${i + 1}# choice is ${colors[i]}.`);
  }
  
  // check if the array contains the value "Violet"
  if (colors.includes("Violet")) {
  console.log("Yeah");
  } else {
  console.log("No...");
  }
  
  //ex5}
  
  const ordinal = ["th", "st", "nd", "rd"];
  
  // loop through the colors array and display each color with its corresponding ordinal number
  for (let i = 0; i < colors.length; i++) {
  let num = i + 1;
  let ord = num % 10;
  let suffix = ord >= 1 && ord <= 3 && (num < 10 || num > 20) ? ordinal[ord] : ordinal[0];
  console.log(`${num}${suffix} choice is ${colors[i]}.`);
  }
  //ex6
  
  let bankAmount = 5000; // initial bank amount
  const VAT = 0.17; // VAT percentage
  const expenses = ["+200", "-100", "+146", "+167", "-2900"]; // monthly expenses
  
  // loop through the expenses array and apply VAT to each expense
  for (let i = 0; i < expenses.length; i++) {
  let expense = parseInt(expenses[i]); // convert expense string to integer
  let taxedExpense = expense + (expense * VAT); // calculate taxed expense
  expenses[i] = taxedExpense.toString(); // update expense in the array
  }
  
  // loop through the expenses array and update bank amount
  for (let i = 0; i < expenses.length; i++) {
  let expense = parseInt(expenses[i]); // convert expense string to integer
  bankAmount += expense; // update bank amount with taxed expense
  }
  
  console.log("Bank amount at the end of the month:", bankAmount.toFixed(2)); // display bank amount with 2 decimal places