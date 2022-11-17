
 const licenseBadgeLinks = {
  MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
  Mozzilla: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
  Perl: `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`,
  Unlicense: `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`,
};


function READMEOutput(data) {

// data.licenseBadge = licenseBadgeLinks[data.license];

`# ${data.title}
${data.licenseBadge}

## Description

${data.description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

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

${data.contribution}

## License

Click here to see license website ${data.licenseBadge}

---

## Tests

${data.tests}

##Questions

${data.github}
Questions about this repository? Please contact me at [${data.email}](mailto:${data.email}).;
`;
}

module.exports = READMEOutput;
