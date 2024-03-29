const inquirer = require('inquirer')
const fs = require('fs')
const questions = require('./utils/promptQuestions')
const generateMarkdown = require('./utils/generateMarkdown')
const { validateConfig } = require('./utils/config/validateConfig')

const start = async () => {
    console.clear()
    try {
        const answers = await inquirer.prompt(questions)
        const markDown = generateMarkdown(answers)
        writeToFile(markDown)

    } catch (error) {
        throw error
    }
}
const writeToFile = (userData) => {
    const filePath = './output/README.md'
    fs.writeFile(filePath, userData, (error) => {
        if (error) throw error
        console.log(`\nSuccess!\nFind your new README here: ${filePath}\n`)
    })
}

validateConfig() && start()