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
  const [N, arr] = input;
  const nums = arr.split(" ").map((s) => parseInt(s));
  solution(N, nums);
});

function solution(N, nums) {
  let min = 2_000_000_000; //두 수 사이의 최소 절대값을 저장

  let start = 0;
  let end = N - 1;
  let liquid1 = nums[start];
  let liquid2 = nums[end];

  nums.sort((a, b) => a - b);
  while (start < end) {
    const sum = nums[start] + nums[end];

    //
    if (Math.abs(sum) < min) {
      min = Math.abs(sum);
      liquid1 = nums[start];
      liquid2 = nums[end];
    }

    if (sum > 0) {
      end--;
    } else {
      start++;
    }
  }
  console.log(`${liquid1} ${liquid2}`);
}
