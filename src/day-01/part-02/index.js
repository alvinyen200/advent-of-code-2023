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

    ## Note 2. The thought of the problem of part-02
    - find the first digit
    -- find the first !NaN() with findIndex => A, -1
    -- find the first matched with any of digitsInLetters with indexOf => B, -1
    -- compare A n B to find which is smaller, ''
    - find the last digit
    -- find the last !NaN() with findLastIndex => A, the length
    -- find the last matched with any of digitsInLetters with lastIndexOf => B, the length
    -- compare A n B to find which is greater, ''
**/

try {
    const lines = fs.readFileSync('./example.txt', 'utf8').split('\n');
} catch (err) {
    console.log(err);
}    
