const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {   
        type: 'input',
        message: 'What\'s your github\'s username?\n',
        name: 'username'
    },
    {   
        type: 'input',
        message: 'What\'s your name\'s repository?\n',
        name: 'repo'
    },
    {   
        type: 'input',
        message: 'What\'s your project\'s title?\n',
        name: 'title'
    },
    {   
        type: 'input',
        message: 'What\'s your project\'s slogan?\n',
        name: 'slogan'
    },
    {   
        type: 'input',
        message: 'What\'s your project\'s description?\n',
        name: 'description'
    },
    {   
        type: 'checkbox',
        message: 'What technologies did you use',
        choices: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'SQL', 'MongoDB', 'JQuery', 'Bootstrap' ],
        name: 'resources'
    },
    {   
        type: 'input',
        message: 'Describe how to install your app\n',
        name: 'init'
    },
    {
        type: 'input',
        message: 'Explain how to use your app\n',
        name: 'usage'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   try{

    fs.writeFileSync(fileName, generateMarkdown(data));
    console.log("File written successfully\n"); 

    } catch (err) {
        console.error(err);
    }
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers =>{
        writeToFile('./newReadme/README.md', answers)
    })
    .catch((error)=>{
        console.error(error)
    })
}

// Function call to initialize app
init();
