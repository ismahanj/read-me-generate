// const fs = require(fs.writeFile);
const inquirer = require("inquirer");

function generateReadMe(userData){
  return 
  `# title
   ${userData.title}
  # Description ${userData.description}
  # Table of Contents ${userData.contents}
 # Installation ${userData.installations}
  # Usage ${userData.uses}
  # License ${userData.license}
 # Contributing ${userData.contributions}
  # Tests ${userData.tests}
  # Questions ${userData.question}`
}





  // array of questions for user
  
  inquirer.prompt([
    {
      name: "tile", 
      message:"choose a self explaining name for your project", 
      type: "input"
  }, 

  {
    name: "description", 
    message:"briefly describe your project ",  
    type: "input"
},

{
  name: "table of contents", 
  message:"create a table of contents", 
  type: "input"
},

{
  name: "installations", 
  message:"are there any additional installations required to run your program",
  type: "input", 
},

{
  name: "uses", 
  message:"what are some ways users can implement your program",
  type: "input", 
},

{
  name: "license", 
  message:"add in a license", 
  type: "input"
},

{
  name: "contributions", 
  message:"add everyone who contributed to the project", 
  type: "input"
},

{
  name: "tests", 
  message:"include any tests here", 
  type: "input"
},

{
  name: "question", 
  message:"include questions here", 
  type: "input"
},


]).then(function(answer){
      const create = generateReadMe(answer)
      console.log(create)
      fs.writeFile("README.md", generateReadMe, function(err){
        if (err){
          console.log(err)
        }
      })

    })




// function to write README file
// function writeToFile("README.md", data) {
// }
// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
