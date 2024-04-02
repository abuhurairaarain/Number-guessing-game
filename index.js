#! /usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 10 + 1);
let answer = await inquirer.prompt([
    {
        name: "guessedGame",
        type: "number",
        message: "Select between 1 to 10 :",
    },
]);
if (randomNumber === answer.guessedGame) {
    console.log("Congratulations!!! You guessed right number");
}
else {
    console.log("You guessed wrong number");
}
