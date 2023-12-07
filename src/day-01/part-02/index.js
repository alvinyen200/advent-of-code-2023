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
    // const lines = fs.readFileSync('./example.txt', 'utf8').split('\n');
    const lines = fs.readFileSync('./input.txt', 'utf8').split('\n');

    const lettersDigitMap = {
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9'
    };
    const digitsInLetters = Object.keys(lettersDigitMap);

    const findFirstDigit = (curLine = '') => {
        if (!curLine) throw new Error('Please specify [curLine] arg. when you apply [findFirstDigit function]');

        // find the first !NaN() with findIndex => A
        const indexOfFirstDigitNonNaN = curLine.split('')
            .findIndex((charOfCurLine = '') => !isNaN(charOfCurLine));

        // find the first matched with any of digitsInLetters with indexOf => B
        let indexOfFirstDigitInLetters = -1;
        let firstDigitInLetters = '';
        digitsInLetters.forEach((theDigitInLetters = '') => {
            const indexOfTheDigitInLetters = curLine.indexOf(theDigitInLetters);
            if (
                (indexOfTheDigitInLetters !== -1) && 
                (
                    (indexOfFirstDigitInLetters === -1) || 
                    (indexOfTheDigitInLetters < indexOfFirstDigitInLetters)
                )
            ) {
                indexOfFirstDigitInLetters = indexOfTheDigitInLetters;
                firstDigitInLetters = theDigitInLetters;
            }
        });

        // compare A n B to find which is smaller, ''
        let returnValue = '';
        if (indexOfFirstDigitNonNaN === -1 && indexOfFirstDigitInLetters === -1) returnValue = '';
        else if (indexOfFirstDigitNonNaN === -1) returnValue = lettersDigitMap[firstDigitInLetters];
        else if (indexOfFirstDigitInLetters === -1) returnValue = curLine[indexOfFirstDigitNonNaN];
        else if (indexOfFirstDigitNonNaN < indexOfFirstDigitInLetters) returnValue = curLine[indexOfFirstDigitNonNaN];
        else if (indexOfFirstDigitInLetters < indexOfFirstDigitNonNaN) returnValue = lettersDigitMap[firstDigitInLetters];

        return returnValue + '';
    };

    const findLastDigit = (curLine = '') => {
        if (!curLine) throw new Error('Please specify [curLine] arg. when you apply [findLastDigit function]');

        // find the last !NaN() with findLastIndex => A, the length
        const indexOfLastDigitNonNaN = curLine.split('')
            .findLastIndex((charOfCurLine = '') => !isNaN(charOfCurLine));

        // find the last matched with any of digitsInLetters with lastIndexOf => B, the length
        let indexOfLastDigitInLetters = -1;
        let lastDigitInLetters = '';
        digitsInLetters.forEach((theDigitInLetters = '') => {
            const indexOfTheDigitInLetters = curLine.lastIndexOf(theDigitInLetters);
            if (
                (indexOfTheDigitInLetters !== -1) && 
                (
                    (indexOfLastDigitInLetters === -1) || 
                    (indexOfTheDigitInLetters > indexOfLastDigitInLetters)
                )
            ) {
                indexOfLastDigitInLetters = indexOfTheDigitInLetters;
                lastDigitInLetters = theDigitInLetters;
            }
        });

        // compare A n B to find which is greather, ''
        let returnValue = '';
        if (indexOfLastDigitNonNaN === -1 && indexOfLastDigitInLetters === -1) returnValue = '';
        else if (indexOfLastDigitNonNaN === -1) returnValue = lettersDigitMap[lastDigitInLetters];
        else if (indexOfLastDigitInLetters === -1) returnValue = curLine[indexOfLastDigitNonNaN];
        else if (indexOfLastDigitNonNaN > indexOfLastDigitInLetters) returnValue = curLine[indexOfLastDigitNonNaN];
        else if (indexOfLastDigitInLetters > indexOfLastDigitNonNaN) returnValue = lettersDigitMap[lastDigitInLetters];

        return returnValue + '';
    };

    const calibrationValuesSum = lines.reduce((acc, curLine = '') => {
        return acc + Number(findFirstDigit(curLine) + findLastDigit(curLine));
    }, 0);

    console.log(calibrationValuesSum);
} catch (err) {
    console.log(err);
}    
