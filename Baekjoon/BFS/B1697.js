/** [Baekjoon] #1697 - 숨바꼭질
 * Created by jylee on 2021-08-09
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, K] = input[0].split(" ").map((s) => parseInt(s));
  solution(N, K);
});

/**
 * num : 숫자
 * time : 숫자에 도달하는데 걸린 시간
 */
class Pair {
  constructor(num, time) {
    this.num = num;
    this.time = time;
  }
}

function solution(N, K) {
  const LIMIT = 100000;
  let visited = { [N]: 0 };
  let queue = [];

  queue.push(new Pair(N, 0));

  while (queue.length) {
    const { num, time } = queue.shift();

    if (num === K) {
      console.log(time);
      break;
    }

    for (let op of ["-", "+", "*"]) {
      const nextValue = operation(op, num);
      if (nextValue < 0 || nextValue > LIMIT) continue;
      if (visited[nextValue] > 0) continue;

      queue.push(new Pair(nextValue, time + 1));
      visited[nextValue] = time + 1;
    }
  }
}

function operation(type, number) {
  const calculatedResult = {
    "-": number - 1,
    "+": number + 1,
    "*": number * 2,
  };

  return calculatedResult[type];
}
