// not part of the workshop

// ...more powerful stuff with yargs package
// The .command() feature is even powerful enough 
// to infer your required and optional parameters from a string:

'use strict'

const yargs = require('yargs');

yargs.command('login <username> [password]', 'authenticate with the server').argv
