
import inqurier from "inquirer";
// 1)computer will generate a random nummber -done
// 2)user input for guessing nummber
// 3)compare user input with computer generated number and show result
const randomNumber = 13;
const asnwers = await inqurier.prompt([
    {
        name: "userguessnumber",
        type: "number",
        message: "please guess a number",
    },
]);
if (asnwers.userguessnumber === "randomNumber") {
    console.log("contratulation you guessed rightnumber");
}
else {
    console.log("you guessed wrong number");
}
