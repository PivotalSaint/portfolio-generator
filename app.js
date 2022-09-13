console.log('Hello World!');

var message = 'Hello Node!';

// old school way
// var sum = 60 + 9 + (commandLineArgs);

var commandLineArgs = process.argv;
// const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);
console.log(commandLineArgs);
console.log(message);
console.log(sum);
// notice the lack of parentheses around the `profileDataArr` parameter?

// const printProfileData = profileDataArr => {
    // for (let i < 0)
    // console.log(profileDataArr);
// };

// printProfileData(profileDataArgs);

// Using Function expression syntax
// const addNums = function(numOne, numTwo) {
    // return numOne + numTwo;
// };

// Using new arrow function syntax
// const addNums = (numOne, numTwo) => {
    // return numOne + numTwo;
// };
const profileDataArgs = process.argv.slice(2);

const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // Is the same as this...
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);

// node app.js function.function 


// For challenge
// node index.js will be used to call your project
// (https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
// (https://www.npmjs.com/package/inquirer/v/8.2.4)