#! usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: { name: "USD", rate: 1 },
    EUR: { name: "EUR", rate: 0.9 },
    GBP: { name: "GBP", rate: 0.8 },
    JPY: { name: "JPY", rate: 120 },
    CAD: { name: "CAD", rate: 1.5 },
    AUD: { name: "AUD", rate: 1.3 },
    PKR: { name: "PKR", rate: 278.22 },
};
const userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: Object.values(currency),
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: Object.values(currency),
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    },
]);
const fromCurrency = currency[userAnswer.from];
const toCurrency = currency[userAnswer.to];
const amount = userAnswer.amount;
const baseAmount = amount / fromCurrency.rate;
const convertedAmount = baseAmount * toCurrency.rate;
console.log(`Converted amount: ${convertedAmount}`);
