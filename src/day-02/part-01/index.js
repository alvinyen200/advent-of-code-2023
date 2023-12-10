import fs from 'fs';

/*
    ## Note 1. The thought of the problem of part-01
    - let sumOfResult:number = 0;
    - const maxLimitOfEachColorInEachSubset = { red: 12, green: 13, blue: 14 };
    - read the input file into lines:string[]
    - forEach lines:string[] (each ele. would be like 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green')
        - split line:string with ';', make the 1st ele. as gameIdString: string, make the 2st ele. as leftString:string
        - const gameId:number = Number(gameIdString.split(' ')[1]);
        - split the leftString:string by ';' and make it as cubeSets:string[] (each ele. would be like ' 3 blue, 4 red')

        - let isCubeSetValid = true;
        - forEach cubeSets:string[] (each ele. would be like ' 3 blue, 4 red')
            - split cubeSet:string with ',' and make it as cubesInColors:string[] (each ele. would be like ' 3 blue')
            - Array.every cubesInColors:string[] (each ele. would be like ' 3 blue')
                - split the string with ' ', and make the 2nd elm as countOfColor, the 3rd as color
                    - i.e. [ '', '2', 'green' ]
                - check if countOfColor > maxLimitOfEachColorInEachSubset[color]
                    - if so
                        - isCubeSetValid = false;
                        - return false to break this Array.every
                    - if not 
                        - return ture to keep this Array.every
        - if (
            isCubeSetValid
        ) {
            sumOfResult += gameId;
        }
    - return sumOfResult;
**/

try {
    const maxLimitOfEachColorInEachSubset = { red: 12, green: 13, blue: 14 };
    let sumOfResult = 0;

    // const lines = fs.readFileSync('./example.txt', 'utf8').split('\n');
    const lines = fs.readFileSync('./input.txt', 'utf8').split('\n');
    lines.forEach((line = '') => {
        const [gameIdString, leftString] = line.split(':');
        const gameId = gameIdString.split(' ')[1];
        const cubeSets = leftString.split(';');
        let isCubeSetValid = true;
        cubeSets.forEach((cubeSet = '') => {
            const cubesInColors = cubeSet.split(',');
            cubesInColors.every((cubesInColor = '') => {
                const [, countOfColor, color] = cubesInColor.split(' ');
                if (countOfColor > maxLimitOfEachColorInEachSubset[color]) {
                    isCubeSetValid = false;
                    return false;
                }
                return true;
            });
        });

        if (isCubeSetValid) {
            sumOfResult += Number(gameId);
        }
    });

    console.log('sumOfResult: ', sumOfResult);
} catch (err) {
    console.log(err)
}
