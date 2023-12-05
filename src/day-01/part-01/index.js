import fs from 'fs';

try {
    // const lines = fs.readFileSync('./example.txt', 'utf8').split('\n');
    const lines = fs.readFileSync('./input.txt', 'utf8').split('\n');
    const calibrationValuesSum= lines.reduce((acc, cur) => {
        if (!cur.length) return acc;

        const firstDigit = cur.split('').find((char = '') => !isNaN(char));
        const lastDigit = cur.split('').findLast((char = '') => !isNaN(char));

        // Number('') => 0
        // Number('55') => 55
        const twoDigitNumber = Number(`${firstDigit === undefined ? '' : firstDigit}${lastDigit === undefined ? '' : lastDigit}`);
        return acc += twoDigitNumber;
    }, 0);
    
    console.log('Calibration Values Sum:', calibrationValuesSum);
} catch (err) {
    console.log(err);
}
