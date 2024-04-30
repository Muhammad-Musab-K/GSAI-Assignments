#! /usr/bin/env node
import inquirer from "inquirer";
let calculator = async () => {
    let calc = await inquirer.prompt([
        {
            message: "1st number?",
            type: "number",
            name: "first"
        },
        {
            message: "2nd number?",
            type: "number",
            name: "sec"
        },
        {
            message: "method?",
            type: "list",
            name: "operations",
            choices: ["+", "-", "/", "X"]
        },
    ]);
    let result;
    switch (calc.operations) {
        case "+":
            result = calc.first + calc.sec;
            break;
        case "-":
            result = calc.first - calc.sec;
            break;
        case "/":
            result = calc.first / calc.sec;
            break;
        case "X":
            result = calc.first * calc.sec;
            break;
        default:
            console.log("Please select a valid operator.");
            return;
    }
    console.log("Answer: " + result);
};
calculator().catch((error) => {
    console.error("An error occurred:", error);
});
