const fs = require('fs')

const note = {
    title: 'Grocery List',
    body: 'Eggs, Ham, Cheese'
}

fs.writeFileSync('notes.json', JSON.stringify(note));

const noteString = fs.readFileSync('notes.json');

console.log(JSON.parse(noteString));