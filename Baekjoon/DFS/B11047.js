const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [info, ...arr] = input;
  const [, target] = info.split(" ");
  const costs = arr.map((s) => parseInt(s));
  solution(+target, costs);
});

function solution(target, costs) {
  let count = 0;
  let i = costs.length - 1;
  while (target > 0) {
    for (i; i >= 0; i--) {
      if (target / costs[i] > 0) {
        // 몫 만큼 동전 개수가 들어간다.
        count += Math.floor(target / costs[i]);
        target = target % costs[i];
      }
    }
  }

  console.log(count);
}
