const fs = require('fs');
const notes = require('./notes');
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;
console.log(argv);

const command = argv._[0];
switch (command) {
    case 'add':
        notes.add(argv.title, argv.body);
        break;
    case 'read':
        notes.read(argv.title);
        break;
    case 'list':
        notes.list(argv.title);
        break;
    case 'remove':
        notes.remove(argv.title);
        break;
    default:
        console.log('Command not recognized.');
        break;
}