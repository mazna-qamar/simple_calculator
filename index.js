#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumer" },
    { message: "Enter your second number", type: "number", name: "secondNumer" },
    { message: "Select one of operator to perform action",
        type: "list",
        name: "operator",
        choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVITION"],
    },
]);
// CONDITIONAL STATEMENT
if (answer.operator === "ADDITION") {
    console.log(answer.firstNumer + answer.secondNumer);
}
else if (answer.operator === "SUBTRACTION") {
    console.log(answer.firstNumer - answer.secondNumer);
}
else if (answer.operator === "MULTIPLICATION") {
    console.log(answer.firstNumer * answer.secondNumer);
}
else if (answer.operator === "DIVISION") {
    console.log(answer.firstNumer / answer.secondNumer);
}
else {
    console.log("please select valid operator");
}
