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
  solution(nums);
});

class Pair {
  constructor(num, index) {
    this.num = num;
    this.index = index;
  }
}

function solution(nums) {
  let stack = [];
  let result = [];

  stack.push(new Pair(100_000_001, -1));

  for (let i = 0; i < nums.length; i++) {
    while (stack[stack.length - 1].num < nums[i]) {
      stack.pop();
    }

    result.push(stack[stack.length - 1].index + 1);
    stack.push(new Pair(nums[i], i));
  }

  console.log(result.join(" "));
}
