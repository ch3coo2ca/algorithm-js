/** [Baekjoon] #1541 - 잃어버린 괄호
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
  const str = input[0];
  solution(str);
});

//50-50+40
function solution(str) {
  const nums = str.split("-").map((equation) =>
    equation
      .split("+")
      .map(Number)
      .reduce((acc, n) => (acc += n), 0)
  );

  console.log(nums.reduce((acc, n) => (acc -= n)));
}
