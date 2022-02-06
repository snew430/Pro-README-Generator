

// TODO: Create a function function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderLicenseBadge = (license) => {};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
renderLicenseLink = (license) => {};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
renderLicenseSection = (license) => {};

// TODO: Create a function to generate markdown for README
generateMarkdown = (data) => {
  return `# ${data.title}
  ## Description 
  *${data.description}
  ## Installation Instructions
  *${data.installation}
  ## Usage
  *${data.usage}
  ## Contribution
  *${data.contribution}
  ## How to test?
  *${data.test}
`;
};

module.exports = generateMarkdown;
