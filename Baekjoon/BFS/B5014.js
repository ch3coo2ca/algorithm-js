/** [Baekjoon] #000 - xxx
 * Created by jylee on 2021-08-08
 */
const { toASCII } = require("punycode");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [total, start, target, up, down] = input[0].split(" ").map(Number);
  solution(total, start, target, up, down);
});

class Pair {
  constructor(floor, steps) {
    this.floor = floor; //현재 층
    this.steps = steps; //이동 수
  }
}
function solution(total, start, target, up, down) {
  let queue = [];
  let visited = new Set();

  queue.push(new Pair(start, 0)); //start층에서 시작
  visited.add(start);

  const directions = [+up, -down];
  function bfs() {
    while (queue.length) {
      let { floor, steps } = queue.shift();

      if (floor === target) {
        return steps;
      }

      for (let i = 0; i < 2; i++) {
        const nextFloor = floor + directions[i];
        if (nextFloor < 0 || nextFloor > 1000001) continue;
        if (visited.has(nextFloor)) continue;
        queue.push(new Pair(nextFloor, steps + 1));
        visited.add(nextFloor);
      }
    }
    return "use the stairs";
  }

  console.log(bfs());
}
