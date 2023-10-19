// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
// create a conditional to see if license exist

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
// create a conditional to see if license exist
// return the physicall link of the license

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
// create a conditional to see if license exist
// call renderlicenseBage and renderLicenseBage functions
// return template literal to format license section

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // take answers and plug it in to the template literal as a mark down structure
  // you may call appropiate fuinctions in template literal
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contribution}

## Tests

${data.test}

## License 

${data.license}

## Questions

If there are additional questions, you may contact me at ${data.email} or visit my [GitHub](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
