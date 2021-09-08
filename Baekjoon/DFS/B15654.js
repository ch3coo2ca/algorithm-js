/** [Baekjoon] #15654 - N과M(5)
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
  let visited = Array(N).fill(false);

  nums.sort((a, b) => a - b);

  function go(level) {
    if (level === M) {
      result.push(arr.join(" "));
      return;
    }

    for (let i = 0; i < N; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      arr.push(nums[i]);
      go(level + 1, i);
      arr.pop();
      visited[i] = false;
    }
  }

  go(0);
  console.log(result.join("\n"));
}
