// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  return `![GitHub](https://img.shields.io/github/license/${data.username}/${data.repo}?style=for-the-badge)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  return `https://github.com/${data.username}/${data.repo}/blob/main/LICENSE`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
return `${renderLicenseBadge(data)}
This project is under an [License Link](${renderLicenseLink(data)}). See the LICENSE file for more details.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${data.slogan}

## **ABOUT THE PROJECT**
**Overview**

${data.description}

Find the repo [here](https://github.com/${data.username}/${data.repo}).

## Table of Contents
- [Resources](#resources)
- [Usage](#usage)
- [Get Started](#get-started)
- [License](#license)
- [Credits](#credits)

## Resources
Remember to fill out your resources

## Get Started
${data.init}

## Usage
${data.usage}

## License
${renderLicenseSection(data)}

## Credits

This project was created by[${data.username}](https://github.com/${data.username})

`;
}

module.exports = generateMarkdown;
