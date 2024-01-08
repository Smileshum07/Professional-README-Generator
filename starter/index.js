const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "sections",
    message: "What are the sections entitled?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of the project",
  },
  {
    type: "input",
    name: "installation",
    message: "How to install your app?",
  },
  {
    type: "input",
    name: "usage",
    message: "How will this project be used?",
  },
  {
    type: "input",
    name: "license",
    message: "What licenses are required with this project?",
  },
  {
    type: "input",
    name: "contributing",
    message: "Who were the contributors to this project?",
  },
  {
    type: "input",
    name: "tests",
    message: "What is the test process for this project?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the user link to your github?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the user github email address?",
  },
];

function askQuestion() {
  inquirer.prompt(questions).then((answers) => {
    // console.log(answers);
    const newMarkdown = generateMarkdown(answers);
    // console.log(newMarkdown);
    writeToFile("README.md", newMarkdown);
  });
}
// function to write README file
function writeToFile(file, data) {
  fs.writeFile(file, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Your README.md file has been generated");
  });
}

// function to initialize program
function init() {
  console.log("Welcome to my readme generator");
  askQuestion();
}

// function call to initialize program
init();
