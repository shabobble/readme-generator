// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

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
        message: 'Please provide any installation instructions for your project.',
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
        choices: [{ value: '', name: 'None' },
        { value: 'mit', name: 'MIT License' },
        { value: 'isc', name: 'ISC License' },
        { value: 'apache20', name: 'Apache License 2.0' },
        { value: 'gpl30', name: 'GNU General Public License v3.0' },
        { value: 'bsd2clause', name: 'BSD 2-Clause "Simplified" License' },
        { value: 'bsd3clause', name: 'BSD 3-Clause "New" or "Revised" License' },
        { value: 'bsl10', name: 'Boost Software License 1.0' },
        { value: 'cc010', name: 'Creative Commons Zero v1.0 Universal' },
        { value: 'epl20', name: 'Eclipse Public License 2.0' },
        { value: 'agpl30', name: 'GNU Affero General Public License v3.0' },
        { value: 'gpl20', name: 'GNU General Public License v2.0' },
        { value: 'lgpl21', name: 'GNU Lesser General Public License v2.1' },
        { value: 'mpl20', name: 'Mozilla Public License 2.0' },
        { value: 'osl30', name: 'Open Software License 3.0' },
        { value: 'unlicense', name: 'The Unlicense' },
        { value: 'wtfpl', name: 'Do What The F*ck You Want To Public License' }],
        name: 'projectLicense',
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Your new README.md file has been created!')
        );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.
        prompt(questions)
    .then ((response) => {
        console.log(response)
        return response;
    })
    .then(response => {
        let markdown = generateMarkdown(response)
        console.log(markdown)
        writeToFile('sampleREADME.md', markdown)
    })
}

// Function call to initialize app
init();
