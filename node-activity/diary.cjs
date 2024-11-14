const fs = require('fs').promises;
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const DIARY_FILE = 'diary.txt';

function askQuestion(question) {
    return new Promise(resolve => rl.question(question, resolve));
}

async function askAction() {
    const answer = await askQuestion('Do you want to (R)ead or (W)rite in your diary? ');

    if (answer.toUpperCase() === 'W') {
        await writeToDiary();
    } else if (answer.toUpperCase() === 'R') {
        await readDiary();
    } else {
        console.log('Invalid choice! Please enter "R" to read or "W" to write.');
        askAction();
    }
}

async function writeToDiary() {
    const entry = await askQuestion('Enter your diary entry: ');

    const date = new Date().toLocaleString(); 
    const entryWithDate = `[${date}] ${entry}\n`;

    try {
        await fs.appendFile(DIARY_FILE, entryWithDate);
        console.log('Your diary entry has been saved!');
    } catch (err) {
        console.log('Error writing to the diary:', err);
    } finally {
        rl.close();
    }
}

async function readDiary() {
    try {
        const data = await fs.readFile(DIARY_FILE, 'utf8');
        if (data) {
            console.log('Your Diary Entries:\n');
            console.log(data); 
        } else {
            console.log('No entries found in your diary.');
        }
    } catch (err) {
        console.log('Error reading the diary:', err);
    } finally {
        rl.close(); 
    }
}

askAction();
