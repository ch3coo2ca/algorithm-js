/** [Baekjoon] #15656 - N과M(7)
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
  let visited = Array(10001).fill(false);

  nums.sort((a, b) => a - b);

  function go(level, index) {
    if (level === M) {
      result.push(arr.join(" "));
      console.log('index',index);
      for (let i = index + 1; i < N; i++) {
          console.log('num',nums[i]);
        visited[nums[i]] = false;
      }
      return;
    }

    for (let i = 0; i < N; i++) {
      if (visited[nums[i]]) continue;

      visited[[nums[i]]] = true;
      arr.push(nums[i]);
      go(level + 1, i + 1);
      arr.pop();
      //   visited[[nums[i]]] = false;
    }
  }

  go(0, 0);
  console.log(result.join("\n"));
}
