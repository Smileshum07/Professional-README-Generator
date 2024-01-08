// function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
 !\[alt text\](https://img.shields.io/badge/License-${data.license}-green)
 
  ## Sections
  ${data.sections}

  ## Description
  ${data.description}

  ## Table of content
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  This site was built using [GitHub Pages](${data.github})
  
  If you will have some further questions, please, feel free to ask me 
  ${data.email}`;
}

module.exports = generateMarkdown;
