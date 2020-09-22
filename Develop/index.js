const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// Questions
function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        name: "description",
        message: "Please input a brief description of your project:"
      },
      {
        type: "input",
        name: "installation",
        message: "Please input instructions on how to install your program:"
      },
      {
        type: "input",
        name: "usage",
        message: "Please input instructions on how to use your program:"
      },
      {
        type: "input",
        name: "contribution",
        message: "Please list all contributors and contributions to your program:"
      },
      {
        type: "input",
        name: "test",
        message: "Please input instructions on how to test your program:"
      },
      {
        type: "list",
        name: "license",
        message: "Please choose a license for your project:",
        choices: ["Academic Free License v3.0", "Apache 2.0", "Creative Commons", "wtfpl", "GPL", "MIT", "NONE", "OTHER"]
      },
      {
        type: "input",
        name: "license",
        when: (answers) => answers.license === "OTHER",
        message: "Please input the name of the license:"
      },
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?"
      },
    ]);
  }

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, "utf8", function(err) {
    if (err) {
      throw err;
    }
  });
};

// function to initialize program
async function init() {
  console.log("Initiation!")
  try {
    const answers = await promptUser();
    generateMarkdown(answers);
    writeToFile("README.md", generateMarkdown(answers));
    console.log("Successfully wrote the readme!");

  } catch(err) {
      console.log(err);
    }
  };


// function call to initialize program
init();
