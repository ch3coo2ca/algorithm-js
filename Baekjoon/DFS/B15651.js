/** [Baekjoon] #15651 - N과M(3)
 * Created by jylee on 2021-08-12
 * 중복을 허용하면서 1부터 N까지 M개의 숫자 뽑기
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
  function go(level) {
    if (level === M) {
      result.push(arr.join(" "));
      return;
    }

    //중복을 허용하기위해 1부터 다시 뽑는다. 
    for (let i = 1; i <= N; i++) {
      arr.push(i);
      go(level + 1, i);
      arr.pop();
    }
  }

  go(0);
  console.log(result.join('\n'));
}
