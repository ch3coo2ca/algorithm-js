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
  const [N, K] = input[0].split(" ").map(Number);
  const num = input[1];
  solution(N, K, num);
});

function solution(N, K, num) {
  let stack = [];

  stack.push(num[0]);
  let i = 1;
  while (i < num.length) {
    if (stack[stack.length - 1] <= num[i]) {
      while (stack[stack.length - 1] < num[i] && K > 0) {
        stack.pop();
        K--;
      }
    }
    stack.push(num[i]);
    i++;
  }

  if (K > 0) stack.splice(stack.length - K, K);
  console.log(stack.join(""));
}
