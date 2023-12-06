import fs from 'fs';

/*
    ## Note 1. The path arg. of fs.readFileSync
    - the path arg. of fs.readFileSync depends on where you execute this file
    - i.e. the output would be different when you execute like the below
    - 1. node ./index.js
    - 2. node ./src/day-01/part-02/index.js
    - you would get the error like the below 
    - "Error: ENOENT: no such file or directory, open './example.txt'"
    - i.e. const lines = fs.readFileSync('./example.txt', 'utf8').split('\n');
**/

try {
    const lines = fs.readFileSync('./example.txt', 'utf8').split('\n');
} catch (err) {
    console.log(err);
}    
