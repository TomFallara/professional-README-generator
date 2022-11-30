

const inquirer = require('inquirer');
const fs = require('fs'); 

const licenseBadgeLinks = {
    MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    Mozzilla: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
    Perl: `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`,
    Unlicense: `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`,
  };
  

  const READMEOutput = (data) => `## ${data.title}
${data.licenseBadge}

## Description

${data.description}
      
## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [Contribution Guidelines](#contributionsGuidelines)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}
 
## Contriubtion Guidelines
 
${data.contributions}
 
## License
 
Click here to see license website ${data.licenseBadge}
 
---
 
## Tests
 
${data.tests}
 
## Questions
 
${data.github}

Questions about this repository? Please contact me at [${data.email}](mailto:${data.email}).`
    
    inquirer
    .prompt([
        {
            type: 'input',
            message: `What is your project's name?`,
            name: 'title',
        },
    {
        type: 'input',
        message: `Describe your project: 
        Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
        - What was your motivation?
        - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
        - What problem does it solve?
        - What did you learn?`,
        name: 'description',
    },
    {
        type: 'input',
        message: `What needs to be installed for your project to work?`,
        name: 'install',
    },
    {
        type: 'input',
        message: `Describe how your project is used:`,
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How can others contribute to the project?',
        name: 'contributions',
    },
    {
        type: 'list',
        message: 'What license would you like?',
        name: 'license',
        choices: [`MIT`, `Mozilla`, `Perl`, `Unliscense`],
    },
    {
        type: 'input',
        message: 'What tests can be run for this project?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your github Url?',
        name: 'github',
    },
    {
        type: 'input',
        message: `What is your email?`,
        name: 'email',
    },
    
])
.then((data) => {
    console.log(data);
    data.licenseBadge = licenseBadgeLinks[data.license];
    const stuff = READMEOutput(data)
    fs.writeFile("README.md", stuff, (err) => {
        console.log(err) ; console.log(`README created!`)
    });
})