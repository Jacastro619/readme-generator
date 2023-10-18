// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];
// add questions into array with type, name, and message
// add readme sections in questions

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
// use FS module to write data to readme file, filename

// TODO: Create a function to initialize app
function init() {
  // use inquire to display questions from the quesitons array for user
  // call generate markdown on gathered data
  // take what was returned from generatemarkdown and pass it to writetofile function
}

// Function call to initialize app
init();
