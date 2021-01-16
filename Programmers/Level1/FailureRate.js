/**
 * [프로그래머스] Level1 - 실패율
 *  Created by jylee on 2021-01-16
 */

function solution(N, stages) {
  var answer = [];
  let userCount = stages.length;

  for (let i = 1; i <= N; i++) {
    const currentStageUser = stages.filter((num) => num === i).length;
    let failureRate = 0;
    failureRate = currentStageUser / userCount;

    answer.push({ rate: failureRate, stageNum: i }); //현재 단계의 실패율
    userCount -= currentStageUser;
  }

  //실패율 내림차순으로 정렬하되, 실패율이 동일하면 스테이지 번호 오름차순으로 정렬
  return answer
    .sort((a, b) =>
      a.rate === b.rate ? a.stageNum - b.stageNum : b.rate - a.rate
    )
    .map((stage) => stage.stageNum);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); //[3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4])); //[4,1,2,3]
console.log(solution(5, [4, 2])); //[4,1,2,3]
