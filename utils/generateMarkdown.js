// TODO: Create a function function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderLicenseBadge = (license) => {
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "Apache":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "GNU":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case "ISC":
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
    default:
      ``;
  }
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
renderLicenseLink = (license) => {
  if (!license) {
    return ``;
  } else {
    return `-[License](#license)
    `;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
renderLicenseSection = (license) => {
  if (!license) {
    return ``;
  } else {
    return `## License
    * This project is covered under the ${license} license
    `;
  }
};

// TODO: Create a function to generate markdown for README
generateMarkdown = (data) => {
  return `${renderLicenseBadge(data.license)}
  # ${data.title}
  ## Description 
  * ${data.description}
  ## Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contribution](#contribution)
  -[Test](#test)
  -[Questions](#questions)
  ${renderLicenseLink(data.license)}
  ## Installation
  * ${data.installation}
  ## Usage
  * ${data.usage}
  ## Contribution
  * Made with ♡ by ${data.contribution}
  ## Test
  * ${data.test}
  ${renderLicenseSection(data.license)}
  ## Questions
  * Email with questions @ ${data.email}
  * View my GitHub page @ https://github.com/${data.githubName}
`;
};

module.exports = generateMarkdown;
