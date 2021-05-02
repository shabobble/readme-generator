// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'projectName',
    },
    {
        type: 'input',
        message: 'Please provide a short description of your project.',
        name: 'projectDescription'
    },
    {
        type: 'input',
        message: 'Please provide any installation instructions for your project',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide any usage information for your project.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who else contributed to this project?',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'Please provide testing instructions.',
        name: 'testing',
    },
    {
        type: 'list',
        message: 'Please choose a license.',
        choices: ['MIT License', 'The Unlicense', 'Mozilla Public License 2.0'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your e-mail address?',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
