console.log('Hello World!');

var message = 'Hello Node!';

var sum = 60 + 9 + ('420');

var commandLineArgs = process.argv;
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);
console.log(commandLineArgs);
console.log(message);
console.log(sum);

// For challenge
// node index.js will be used to call your project
// (https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
// (https://www.npmjs.com/package/inquirer/v/8.2.4)