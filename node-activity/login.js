import * as readline from 'node:readline/promises'
import{ stdin as input, stdout as output } from 'node:process'

const scanner = readline.createInterface({ input, output });

const password = await scanner.question('Enter a password: ')

function validatePassword(password) {
    const pattern = /^(?=.*[A-Z])(?=.*[^\w\s]).{6,}$/;

    if (pattern.test(password)) {
        console.log("Password is valid!");
    } else {
        console.log("Password must be at least 6 characters long and contain both uppercase and lowercase letters.");
    }
}

validatePassword(password);

scanner.close()