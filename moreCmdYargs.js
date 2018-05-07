// not part of the workshop


'use strict'

const argv = require('yargs')
    .command('*', 'the default command handler', () => {}, (argv) => {
        console.log('This function is called by default');
    }).argv;



// to run the program below from the CLI enter
// $ node s3 - tool.js upload--file = my - file.txt--bucket = my - s3 - bucket
