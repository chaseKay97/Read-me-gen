// function to markdown for README
function generateMarkdown(data) {

  var license = data.license.replace(/ /g , "%20");

  return `# ${data.title} 
  ![License](https://img.shields.io/badge/LICENSE-${license}-blue)

  ## DESCRIPTION
  ${data.description}

  ## TABLE OF CONTENTS
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Questions](#questions)

  ## INSTALLATION
  ${data.installation}

  ## USAGE
  ${data.usage}

  ## LICENSE
  ${data.license}

  ## TEST
  ${data.test}

  ## CONTRIBUTION
  ${data.contribution}

  ## QUESTIONS
  For further questions please contact me: 
  GitHub: ${data.username}
  Email: ${data.email}



`;
}

module.exports = generateMarkdown;
