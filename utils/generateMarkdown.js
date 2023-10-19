// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // create a conditional to see if license exist
  switch (license.license) {
    case "MIT License":
      return `![Static Badge](https://img.shields.io/badge/license-MIT-blue)`;
      break;
    case "Apache License 2.0":
      return `![Static Badge](https://img.shields.io/badge/license-Apache_License_2.0-blue)`;
      break;
    case "GNU Affero General Public License v3.0":
      return `![Static Badge](https://img.shields.io/badge/license-GNU_Affero_General_Public_License_v3.0-blue)`;
      break;
    case "Mozilla Public License 2.0":
      return `![Static Badge](https://img.shields.io/badge/license-Mozilla_Public_License_2.0-blue)`;
      break;
    default:
      return "";
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  // create a conditional to see if license exist
  // return the physicall link of the license
  switch (license.license) {
    case "MIT License":
      return `https://mit-license.org/`;
      break;
    case "Apache License 2.0":
      return `https://apache.org/licenses/LICENSE-2.0`;
      break;
    case "GNU Affero General Public License v3.0":
      `https://www.gnu.org/licenses/agpl-3.0.en.html`;
      break;
    case "Mozilla Public License 2.0":
      return `https://www.mozilla.org/en-US/MPL/2.0/`;
      break;
    default:
      return "";
  }
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  // create a conditional to see if license exist
  // call renderlicenseBadge function
  // return template literal to format license section
  if (!license.license) {
    return "";
  } else {
    return `This project is covered under the ${
      license.license
    }. For more information about license go to [${renderLicenseLink(
      license
    )}](${renderLicenseLink(license)})`;
  }
}

function generateMarkdown(data) {
  // take answers and plug it in to the template literal as a mark down structure
  // you may call appropiate fuinctions in template literal
  return `# ${data.title} ${renderLicenseBadge(data)}

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

${renderLicenseSection(data)}

## Questions

If there are additional questions, you may contact me at ${
    data.email
  } or visit my [GitHub](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
