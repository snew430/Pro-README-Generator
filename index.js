// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");
const { file } = require("tmp");

const questions = [
  {
    type: "confirm",
    name: "fileNameConfirm",
    message:
      "Would you like you file name to be something other than 'README'?",
    default: false,
  },
  {
    type: "input",
    name: "fileName",
    message: "Please enter a file name...",
    default: "README",
    when: ({ fileNameConfirm }) => {
      if (fileNameConfirm) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "githubName",
    message: "What is your GitHub username? (Required)",
    validate: (githubName) => {
      if (githubName) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your perferred email for people to contact you with questions? (Required)",
    validate: (email) => {
      if (email) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project... (Required)",
    validate: (description) => {
      if (description) {
        return true;
      } else {
        console.log("Please enter a description!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions... (Required)",
    validate: (installInput) => {
      if (installInput) {
        return true;
      } else {
        console.log("Please enter installation instructions!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information for the project... (Required)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter usage information!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter contributor(s) for the project... (Required)",
    validate: (contributionInput) => {
      if (contributionInput) {
        return true;
      } else {
        console.log("Please enter any and all contributors!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "Enter test instructions for the project... (Required)",
    validate: (test) => {
      if (test) {
        return true;
      } else {
        console.log("Please enter test instructions!");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "licenseConfirm",
    message:
      "Lastly, would you like to add a license to your project?",
    default: false,
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to add to your project?",
    choices: [
      "MIT",
      "Apache",
      "GNU",
      "ISC"
    ],
    when: ({ licenseConfirm }) => {
      if (licenseConfirm) {
        return true;
      } else {
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
writeToFile = (fileName, data) => {
  if (fileName === undefined){
    fileName = "README"
  }
  fs.writeFile(`./dist/${fileName}.md`, generateMarkdown(data), (err) => {
    if (err) {
      reject(err);
      return;
    }
    console.log("README created!");
  });
};

// TODO: Create a function to initialize app
init = () => {
  return inquirer.prompt(questions).then((readMeData) => {
    writeToFile(readMeData.fileName, readMeData);
  });
};

// Function call to initialize app
init();

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
