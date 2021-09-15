/** [Baekjoon] #15655 - N과M(6)
 * Created by jylee on 2021-08-12
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
  let result = [];
  let arr = [];

  nums.sort((a, b) => a - b);

  function go(level, index) {
    if (level === M) {
      result.push(arr.join(" "));
      return;
    }

    for (let i = index; i < N; i++) {
      arr.push(nums[i]);
      go(level + 1, i + 1);
      arr.pop();
    }
  }

  go(0, 0);
  console.log(result.join("\n"));
}
