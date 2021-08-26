/** [Baekjoon] #15665 - N과M(11)
 * Created by jylee on 2021-08-13
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
  const [N, M] = input[0].split(" ").map(Number);
  const nums = input[1].split(" ").map(Number);
  solution(N, M, nums);
});

function solution(N, M, nums) {
  let result = new Set();
  let arr = [];

  nums.sort((a, b) => a - b);

  function go(level) {
    if (level === M) {
      result.add(arr.join(" "));
      return;
    }

    for (let i = 0; i < N; i++) {
      arr.push(nums[i]);
      go(level + 1);
      arr.pop();
    }
  }

  go(0);

  console.log([...result].join("\n"));
}
