// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    `[![${license}license](https://img.shields.io/badge/license-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license ==  'MIT') {
    return `https://opensource.org/license/mit/`
  } if (license == 'Mozilla-Public') {
    return `https://www.mozilla.org/en-US/MPL/`
  }
  if (license == 'Apache') {
    return `https://www.apache.org/licenses/LICENSE-2.0`
  }
  if (license =='Common-Development-and-Distribution') {
    return `https://opensource.org/license/cddl-1-0/`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return ` ## Licenses 
    The project is covered under the ${license} license. to learn more information click the license button located above`
  }
}


// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents 
  - [Description]
  - [Installation]
  - [Usgage](#usage)
  - [Contributions]
  - [Testing]
  - [Licenses]
  - [Questions/Contact Us]



## Description 
${data.description}

## Installation 
${data.installation}

## Usage 
${data.usage}

## Contributions
${data.contributions}

## Testing
${data.testing}

# License 
${renderLicenseSection(data.license)}


## Questions/Contact us
Have any questions or input about the project? 
Github: https://github.com/${data.github}
Email: ${data.email}

`;
}

module.exports = generateMarkdown;