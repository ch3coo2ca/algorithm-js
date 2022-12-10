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
  const [testCount, ...arr] = input;

  let head = 0;
  for (let i = 0; i < testCount; i++) {
    let N = arr[head++];
    let nums = [];
    while (N--) {
      nums.push(arr[head++]);
    }
    solution(nums);
  }
});

function solution(nums) {
  nums.sort();

  for (let i = 1; i < nums.length; i++) {
    if (nums[i].startsWith(nums[i - 1])) {
      console.log("NO");
      return;
    }
  }

  console.log("YES");
}
