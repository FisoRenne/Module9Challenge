// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generatemarkdown.js');

const questions = [
    {
        type:'input',
        name:'title',
        message:'What is the title of the project?'
    },
    {
        type:'input',
        name:'description',
        message:'Enter a description of the project'
    },
    {
        type:'input',
        name:'installation',
        message:'Is there any installation necessary for this project?'
    },
    {
        type:'input',
        name:'usage',
        message:'What is the intended use of this project?'
    },
    {
        type:'input',
        name:'contributions',
        message:'Who contributed to this project?'
    },
    {
        type:'input',
        name:'testing',
        messages:'How should this project be tested?'
    },
    {
        type:'checkbox',
        name:'license',
        message:'Choose a license for the project',
        choices:['MIT','Mozilla-Public','Apache','Common-Development-and Distribution','None']
    },
    {
        type:'input',
        name:'github',
        message:'Enter your Github username'
    },
    {
        type:'input',
        name:'email',
        message:'Please enter your email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Information successfully imported in to the README')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
