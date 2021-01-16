/**
 * [프로그래머스] Level1 - 다트 게임
 *  Created by jylee on 2021-01-15
 */

function solution(dartResult) {
  //parse result into 3 stages
  const regex = /[0-9]+[S|D|T]\*?\#?/g;
  let stages = dartResult.match(regex);

  const bonusToNum = {
    S: 1,
    D: 2,
    T: 3,
  };

  const options = {
    "*": 2,
    "#": -1,
    '' : 1,
  };

  stages.forEach((stage, i) => {
    const [score, bonus, option] = stage.match(/[0-9]+|[S|D|T]|\*?\#?/g);
    let stageScore = Math.pow(score, bonusToNum[bonus]) * options[option];
    stages[i] = stageScore;

    if (i > 0 && option === "*") stages[i - 1] *= options["*"];
  });

  return stages.reduce((a, b) => a + b);
}

console.log(solution("1S2D*3T")); //37
console.log(solution("1D2S#10S")); //9
console.log(solution("1D2S0T")); //3
console.log(solution("1S*2T*3S")); //23
console.log(solution("1D#2S*3S")); //5
console.log(solution("1T2D3D#")); //-4
console.log(solution("1D2S3T*")); //59
console.log(solution("1D#2D*3D*")); //32
