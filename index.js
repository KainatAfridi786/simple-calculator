import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your firstnumber", type: "number", name: "firstnumber" },
    { message: "Enter your secondnumber", type: "number", name: "secondnumber" },
    {
        message: "select one operator to perform action",
        type: "list",
        name: "operator",
        choices: ["ADDITION", "SUBSTRACTION", "MULTIPLICATION", "DIVISION"],
    },
]);
//CONDITIONAL STATEMENT
if (answer.operator === "ADDITION") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "SUBSTRACTION")
    console.log(answer.firstnumber + answer.secondnumber);
else if (answer.operator === "MULTIPLICATION")
    console.log(answer.firstnumber + answer.secondnumber);
else if (answer.operator === "DIVISION")
    console.log(answer.firstnumber + answer.secondnumber);
else {
    ("please select correct opperator");
}
