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
    - find the first/last digit
    -- find the first/last !NaN() with findIndex/findLastIndex => A, -1
    -- find the first/last matched with any of digitsInLetters with indexOf/lastIndexOf => B, -1
    -- compare A n B to find which is smaller/greater, ''
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

    const findTargetDigit = (curLine = '', isFindFirstDigit) => {
        if (!curLine) throw new Error('Please specify [curLine] arg. when you apply [findTargetDigit function]');
        if (isFindFirstDigit === undefined) throw new Error('Please specify [isFindFirstDigit] arg. when you apply [findTargetDigit function]');

        // find the first/last !NaN() with findIndex/findLastIndex => A
        const curLineInChars = curLine.split('');
        let indexOfTargetDigitNonNaN = -1;
        if (isFindFirstDigit) {
            indexOfTargetDigitNonNaN = curLineInChars.findIndex((char = '') => !isNaN(char));
        } else {
            indexOfTargetDigitNonNaN = curLineInChars.findLastIndex((char = '') => !isNaN(char));
        }

        // find the first/last matched with any of digitsInLetters with indexOf/lastIndexOf => B
        let indexOfTargetDigitInLetters = -1;
        let targetDigitInLetters = '';
        digitsInLetters.forEach((theDigitInLetters = '') => {
            let indexOfTheDigitInLetters = -1;
            if (isFindFirstDigit) {
                indexOfTheDigitInLetters = curLine.indexOf(theDigitInLetters);
            } else {
                indexOfTheDigitInLetters = curLine.lastIndexOf(theDigitInLetters);
            }

            if (indexOfTheDigitInLetters !== -1) {
                if (isFindFirstDigit) {
                    if (
                        (indexOfTargetDigitInLetters === -1) || 
                        (indexOfTheDigitInLetters < indexOfTargetDigitInLetters)
                    ) {
                        indexOfTargetDigitInLetters = indexOfTheDigitInLetters;
                        targetDigitInLetters = theDigitInLetters;
                    }
                } else {
                    if (
                        (indexOfTargetDigitInLetters === -1) || 
                        (indexOfTheDigitInLetters > indexOfTargetDigitInLetters)
                    ) {
                        indexOfTargetDigitInLetters = indexOfTheDigitInLetters;
                        targetDigitInLetters = theDigitInLetters;
                    }
                }
            }
        });

        // compare A n B to find which is smaller/greather, ''
        let returnValue = '';
        if (isFindFirstDigit) {
            if (indexOfTargetDigitNonNaN === -1 && indexOfTargetDigitInLetters === -1) returnValue = '';
            else if (indexOfTargetDigitNonNaN === -1) returnValue = lettersDigitMap[targetDigitInLetters];
            else if (indexOfTargetDigitInLetters === -1) returnValue = curLine[indexOfTargetDigitNonNaN];
            else if (indexOfTargetDigitNonNaN < indexOfTargetDigitInLetters) returnValue = curLine[indexOfTargetDigitNonNaN];
            else if (indexOfTargetDigitInLetters < indexOfTargetDigitNonNaN) returnValue = lettersDigitMap[targetDigitInLetters];
        } else {
            if (indexOfTargetDigitNonNaN === -1 && indexOfTargetDigitInLetters === -1) returnValue = '';
            else if (indexOfTargetDigitNonNaN === -1) returnValue = lettersDigitMap[targetDigitInLetters];
            else if (indexOfTargetDigitInLetters === -1) returnValue = curLine[indexOfTargetDigitNonNaN];
            else if (indexOfTargetDigitNonNaN > indexOfTargetDigitInLetters) returnValue = curLine[indexOfTargetDigitNonNaN];
            else if (indexOfTargetDigitInLetters > indexOfTargetDigitNonNaN) returnValue = lettersDigitMap[targetDigitInLetters];
        }
        
        return returnValue + '';
    };

    const calibrationValuesSum = lines.reduce((acc, curLine = '') => {
        return acc + Number(findTargetDigit(curLine, true) + findTargetDigit(curLine, false));
    }, 0);

    console.log(calibrationValuesSum);
} catch (err) {
    console.log(err);
}    
