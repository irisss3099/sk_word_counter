#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    {
        name: "sentences",
        type: "input",
        message: "enter your sentence to count the word:"
    }
]);
const words = answers.sentences.trim().split(" ");
console.log(chalk.yellow(words));
console.log(chalk.bold.cyanBright.italic(`your sentence word is ${words.length} `));
