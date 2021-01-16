/**
 * [프로그래머스] Level2 - 기능개발
 *  Created by jylee on 2021-01-16
 */

function solution(progresses, speeds) {
  var answer = [0];

  const days = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );

  let max = days[0];
  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= max) {
      answer[j] += 1;
    } else {
      max = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
