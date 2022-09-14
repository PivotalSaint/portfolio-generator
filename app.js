//added this in 9.3.5
const inquirer = require('inquirer');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ]);
};

promptUser().then(answers => console.log(answers));
// const fs= require('fs');
// const generatePage = require('./src/page-template.js');

// added this mod 9.3.5 for inquirer
// make sure you do .gitignore before installing node mods and add node_modules to .gitignore

// console.log('Hello World!');

// var message = 'Hello Node!';

// old school way
// var sum = 60 + 9 + (commandLineArgs);

// var commandLineArgs = process.argv;
// took this out in mod 9.3.5
// const profileDataArgs = process.argv.slice(2, process.argv.length);

// added this after module 9.2.4
//these two simplified
//const name = profileDataArgs[0];
//const github = profileDataArgs[1];

// simplified version of above 
// took this out in mod 9.3.5
// const [name, github] = profileDataArgs;

//added this console log 9.3.5 to check to see if inquirer is available 
// succesful in running inquirer so removed it
// console.log(inquirer);

// took these all out 9.1.8
// console.log(profileDataArgs);
//console.log(commandLineArgs);
//console.log(message);
//console.log(sum);

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
// const profileDataArgs = process.argv.slice(2);

// const printProfileData = profileDataArr => {
  // This...
  //for (let i = 0; i < profileDataArr.length; i += 1) {
    //console.log(profileDataArr[i]);
  //}

  //console.log('================');

  // Is the same as this...
  //profileDataArr.forEach(profileItem => console.log(profileItem));

// With ES6, we can use a feature called template literals to embed JavaScript expressions into the string.
// Template literals are enclosed by backticks (`) instead of double or single quotes.

//printProfileData(profileDataArgs);

// node app.js function.function 

// Notice that the output is the same as before. The only difference is that instead of hard-wiring the text into the terminal output, 
// we interpolated the text using variables passed into the function that created the output.
// const generatePage = (userName, githubName) => `Name: ${userName} Github: ${githubName}`;

// re-created multi-line input from previous const example above line
// we coded this out and did an html for the below line
//const generatePage = (userName, githubName) => {
  //return `
    //Name: ${userName}
   // GitHub: ${githubName}
 // `;
//};

// we cut this generate page function and moved it to page-template.js
//updated generatePage function 9.2.4



// added this console log in 9.2.4 
// console.log(name, github);

// in terminal write node app 'pivotal' 'pivotal saint' 
// this acts as arg 1 and arg 2 but instead of hardcoding our names in js
// we coded them as variables, and created dynamic paging in term with arguments passed
// console.log(generatePage(name, github));

// added this 9.2.5
// When an arrow function has one argument, parentheses are optional. 
// However, when there are no arguments—or more than one—parentheses are necessary.
// fs.writeFile('index.html', generatePage(name, github), err => {
  // if (err) throw err;

  // console.log('Portfolio complete! Check out index.html to see the output!');
// });

// added package lock.json and pack.json in mod 9.3.4

// For challenge
// node index.js will be used to call your project
// (https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
// (https://www.npmjs.com/package/inquirer/v/8.2.4)