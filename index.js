// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "Give a brief discription of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "How does the user install your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "How does the user use your project?",
    name: "usage",
  },
  {
    type: "input",
    message: "What are the contribution guidelines?",
    name: "contribution",
  },
  {
    type: "input",
    message: "What are the testing instructions if any?",
    name: "test",
  },
  {
    type: "list",
    message: "What license will you be using?",
    choices: [
      "MIT",
      "Apache License 2.0",
      "GNU Affero General Public License v3.0",
      "Mozilla Public License 2.0",
    ],
    name: "license",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
    validate: function (input) {
      if (!input.includes("@")) {
        return "invalid email format";
      } else return true;
    },
  },
];
// add questions into array with type, name, and message
// add readme sections in questions

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    err ? console.log("error") : console.log("success");
  });
}
// use FS module to write data to readme file, filename

// TODO: Create a function to initialize app
function init() {
  // use inquire to display questions from the quesitons array for user
  // call generate markdown on gathered data
  // take what was returned from generatemarkdown and pass it to writetofile function
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    writeToFile("readme.md", data);
  });
}
// Function call to initialize app
init();
