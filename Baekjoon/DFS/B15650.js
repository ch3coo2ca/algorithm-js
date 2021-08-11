/** [Baekjoon] #15650 - N과M(2)
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
  solution(N, M);
});

function solution(N, M) {
  let result = [];

  let arr = [];

  function backtrack(level, index) {
    if (level === M) {
      result.push(arr.join(" "));
      return;
    }

    for (let i = index + 1; i <= N; i++) {
      arr.push(i);
      backtrack(level + 1, i);
      arr.pop();
    }
  }

  backtrack(0, 0);

  console.log(result.join("\n"));
}
