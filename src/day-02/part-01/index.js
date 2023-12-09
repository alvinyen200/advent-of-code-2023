import fs from 'fs';

/*
    ## Note 1. The thought of the problem of part-01
    - let sumOfResult:number = 0;
    - forEach lines:string[] (each ele. would be like 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green')
        - const ballsSumOfEachColor:{} = { red: 0, blue: 0, green: 0 }
        - split line:string with ';', make the 1st ele. as gameIdString: string, make the 2st ele. as left:string
        - const gameId:number = Number(gameIdString.split(' ')[1]);
        - split the left:string by ';' and make it as setsOfCubes:string[] (each ele. would be like ' 3 blue, 4 red')
        - forEach setsOfCubes:string[] (each ele. would be like ' 3 blue, 4 red')
            - split theSetOfCubes:string with ',' and make it as cubesOfColors:string[] (each ele. would be like ' 3 blue')
            - forEach cubesOfColors:string[] (each ele. would be like ' 3 blue')
                - split the string with ' ', and make the 1st elm as countOfColor, the 2nd as color
                - ballsSumOfEachColor[color] += countOfColor
        - if (
            ballsSumOfEachColor['red'] < 12 &&
            ballsSumOfEachColor['green'] < 13 &&
            ballsSumOfEachColor['blue'] < 14
        ) {
            sumOfResult += gameId;
        }
    - return sumOfResult;
**/

try {
    const lines = fs.readFileSync('./example.txt', 'utf8');
    console.log(lines);
} catch (err) {
    console.log(err);
}
