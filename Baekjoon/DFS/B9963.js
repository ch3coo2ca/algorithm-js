/** [Baekjoon] #000 - xxx
 * Created by jylee on 2021-08-08
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
  const N = input[0];
  solution(parseInt(N));
});

function solution(N) {
  let graph = [];

  let count = 0;

  function isValidPosition(row) {
    //대각선과 열 검사

    for (let i = 0; i < row; i++) {
      //같은열
      if (graph[i] === graph[row]) return false;
      //같은행
      if (Math.abs(graph[row] - graph[i]) === row - i) return false;
    }

    return true;
  }

  function backtrack(row) {
    if (row === N) {
      count++;
      return;
    }

    for (let i = 0; i < N; i++) {
      graph[row] = i;
      if (!isValidPosition(row)) continue;
      backtrack(row + 1);
    }
  }

  backtrack(0);

  console.log(count);
}
