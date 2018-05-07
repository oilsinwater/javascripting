// not part of the workshop


// Calling this program with the "upload" command will invoke the
// function you passed to it, which in this case just prints to the command line.
// However, I'm sure you can imagine passing a much more capable function that 
// uses the parsed argv object to determine what file to send where.

'use strict'

const argv = require('yargs')
    .command('upload', 'upload a file', (yargs) => {}, (argv) => {
        console.log('Uploading your file now...');

// Do stuff here
}).argv;
