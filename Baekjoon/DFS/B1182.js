/** [Baekjoon] #1182 - 부분수열의 합
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
  const [N, S] = input[0].split(" ").map(Number);
  const nums = input[1].split(" ").map(Number);
  solution(N, S, nums);
});

function solution(N, S, nums) {
  let count = 0;

  function go(index, sum) {
    sum +=nums[index]; 
    if (index === N) return;

    if (sum === S) {
      count++;
    }

    go(index + 1, sum - nums[index]); //안더함
    go(index + 1, sum); //더함
  }

  go(0, 0);

  console.log(count);
}
