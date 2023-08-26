// 1. Arrow function with no arguments and no return value
const greet = () => {
    console.log("Good morning, Today is Tuesday");
  };
  greet();
  
  // 2. Arrow function with 3 arguments and no return value
  const multiply = (a, b, c = 1) => {
    const result = a * b * c;
    console.log(`Multiplication result: ${result}`);
  };
  
  // Calling the multiply function with values 5, 5, 2
  multiply(5, 5, 2);
  
  // Calling the multiply function with values 10, 4 (using the default value of 1 for the third argument)
  multiply(10, 4);
  
  // 3. Arrow function with 5 arguments and return value
  const add = (a, b, c, d, e) => {
    const sum = a + b + c + d + e;
    return sum;
  };
  
  // Calling the add function with values 100, 100, 200, 349, 756
  const result1 = add(100, 100, 200, 349, 756);
  console.log(`Sum result 1: ${result1}`);
  
  // Calling the add function with string values
  const result2 = add("I am", "learning", "ES6", "features", "In depth");
  console.log(`Sum result 2: ${result2}`);




  