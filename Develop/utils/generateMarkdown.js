let readMeProjectTitle = '';
let readMeTableContents = '## Table of Contents \n '
let readMeProjectDescription = '';
let readMeInstallation = '';
let readMeUsage = '';
let readMeContributors = '';
let readMeTesting = '';
let readMeContactMe = '';
let licenseBadge = '';
let licenseSection = '';
let licenseLink = '';

let licenseArray = {
  mit: { badge: 'MIT', name: 'MIT License', link: 'mit' },
  isc: { badge: 'ISC', name: 'ISC License', link: 'isc' },
  apache20: { badge: 'Apache_2.0', name: 'Apache License 2.0', link: 'apache-2.0' },
  gpl30: { badge: 'GPL_3.0', name: 'GNU General Public License v3.0', link: 'gpl-3.0' },
  bsd2clause: { badge: 'BSD_2_Clause', name: 'BSD 2-Clause "Simplified" License', link: 'bsd-2-clause' },
  bsd3clause: { badge: 'BSD_3_Clause', name: 'BSD 3-Clause "New" or "Revised" License', link: 'bsd-3-clause' },
  bsl10: { badge: 'BSL_1.0', name: 'Boost Software License 1.0', link: 'bsl-1.0' },
  cc010: { badge: 'CC0_1.0', name: 'Creative Commons Zero v1.0 Universal License', link: 'cc0-1.0' },
  epl20: { badge: 'EPL_2.0', name: 'Eclipse Public License 2.0', link: 'epl-2.0' },
  agpl30: { badge: 'AGPL_3.0', name: 'GNU Affero General Public License v3.0', link: 'agpl-3.0' },
  gpl20: { badge: 'GPL_2.0', name: 'GNU General Public License v2.0', link: 'gpl-2.0' },
  lgpl21: { badge: 'LGPL_2.1', name: 'GNU Lesser General Public License v2.1', link: 'lgpl-2.1' },
  mpl20: { badge: 'MPL_2.0', name: 'Mozilla Public License 2.0', link: 'mpl-2.0' },
  osl30: { badge: 'OSL_3.0', name: 'Open Software License 3.0', link: 'osl-3.0' },
  unlicense: { badge: 'Unlicense', name: 'The Unlicense', link: 'unlicense' },
  wtfpl: { badge: 'WTFPL', name: 'Do What The F*ck You Want To Public License', link: 'wtfpl' }
}

function renderProjectTitle(name) {
  if (name) {
    console.log(name)
    readMeProjectTitle = `# ${name}`
  } else {
    readMeProjectTitle = ''
  }
}

function renderProjectDescription(description) {
  if (description) {
    readMeProjectDescription = `## Description \n ${description}`
  } else {
    readMeProjectDescription = ''
  }
}

function renderInstallation(install) {
  if (install) {
    readMeInstallation = `## Installation \n ${install}`
    readMeTableContents = readMeTableContents + '- [Installation](#installation) \n'
  } else {
    readMeInstallation = ''
  }
}

function renderUsage(usage) {
  if (usage) {
    readMeUsage = `## Usage \n ${usage}`
    readMeTableContents = readMeTableContents + '- [Usage](#usage) \n'
  } else {
    readMeUsage = ''
  }
}

function renderContributors(contributors) {
  if (contributors) {
    readMeContributors = `## Contributors \n ${contributors}`
    readMeTableContents = readMeTableContents + '- [Contributors](#contributors) \n'
  } else {
    readMeContributors = ''
  }
}

function renderTesting(testing) {
  if (testing) {
    readMeTesting = `## Testing \n ${testing}`
    readMeTableContents = readMeTableContents + '- [Testing](#testing) \n'
  } else {
    readMeTesting = ''
  }
}

function renderContactMe(github, email) {
  readMeContactMe = `## Questions? \n You can contact me by e-mail at ${email} or on Github at https://www.github.com/${github}`
  readMeTableContents = readMeTableContents + '- [Contact Me](#contactMe) \n'
}

function renderLicenseBadge(license) {
  if (license) {
    console.log(licenseArray[license]['badge'])
    licenseBadge = `[![badge](https://img.shields.io/badge/license-${licenseArray[license]['badge']}-green)](https://choosealicense.com/licenses/${licenseArray[license]['link']})`
    licenseLink = `[${licenseArray[license]['name']}](https://choosealicense.com/licenses/${licenseArray[license]['link']})`
    licenseText = `## __License__ \n This project is licensed under the [${licenseArray[license]['name']}](https://choosealicense.com/licenses/${licenseArray[license]['link']}).`
    readMeTableContents = readMeTableContents + '- [License](#license) \n'
  }
  else {
    licenseBadge = ''
    licenseLink = ''
    licenseText = ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  renderProjectTitle(data.projTitle)
  renderProjectDescription(data.projectDescription)
  renderInstallation(data.installation)
  renderUsage(data.usage)
  renderContributors(data.contributors)
  renderTesting(data.testing)
  renderContactMe(data.github, data.email)
  renderLicenseBadge(data.projectLicense)

  let markdown = `
  
  ${readMeProjectTitle}
  
  ${licenseBadge}

  ${readMeProjectDescription}

  ${readMeTableContents}

---

  ${readMeInstallation}

  ${readMeUsage}

  ${readMeTesting}

  ${readMeContactMe}

  ${readMeContributors}

  ${licenseText} `

  return markdown;

}

module.exports = generateMarkdown;
