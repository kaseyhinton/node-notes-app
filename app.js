const fs = require('fs');
const notes = require('./notes');
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;
// const command = process.argv[2];
console.log(argv);

const command = argv._[0];
switch (command) {
    case 'add':
        notes.add(argv.title, argv.body);
        break;
    case 'read':
        notes.read(argv.id);
        break;
    case 'list':
        notes.list();
        break;
    case 'remove':
        notes.remove();
        break;
    default:
        console.log('Command not recognized.');
        break;
}