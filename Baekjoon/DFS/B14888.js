const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const nums = input[1].split(" ").map((s) => parseInt(s));
  const operators = input[2].split(" ").map((s) => parseInt(s));
  solution(nums, operators);
});

function operation(n1, n2, operator) {
  switch (operator) {
    case 0:
      return n1 + n2;
    case 1:
      return n1 - n2;
    case 2:
      return n1 * n2;
    case 3:
      return n1 < 0 ? -Math.floor(-n1 / n2) : Math.floor(n1 / n2);
  }
}

function solution(nums, operators) {
  let min = 1000000000;
  let max = -1000000000;

  function dfs(index, result, usedOperators = [0, 0, 0, 0]) {
    if (index === nums.length) {
      min = Math.min(min, result);
      max = Math.max(max, result);
      return;
    }

    const n2 = nums[index];
    for (let i = 0; i < 4; i++) {
      if (usedOperators[i] === operators[i]) continue;
      usedOperators[i]++;
      dfs(++index, operation(result, n2, i), [...usedOperators]);
      index--;
      usedOperators[i]--;
    }
  }

  dfs(1, nums[0]);

  console.log(max || 0);
  console.log(min || 0);
}
