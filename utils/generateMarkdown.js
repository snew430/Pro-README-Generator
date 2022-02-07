

// TODO: Create a function function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderLicenseBadge = (license) => {};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
renderLicenseLink = (license) => {};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
renderLicenseSection = (license) => {
  if (!license){
    return ''
  }else {
    return `## Licensing
    ${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}
    `
  }
};

// TODO: Create a function to generate markdown for README
generateMarkdown = (data) => {
  return `# ${data.title}
  ## Description 
  * ${data.description}
  ## Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contribution](#contribution)
  -[Test](#test)
  -[Questions](#questions)
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
