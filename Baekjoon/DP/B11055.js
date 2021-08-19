/** [Baekjoon] #11053 - 가장 긴 증가하는 부분 수열
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
  const N = Number(input[0]);
  const nums = input[1].split(" ").map(Number);
  solution(N, nums);
});

function solution(N, nums) {
  //dp[i]는 i인덱스까지 증가하는 수의 합?
  let dp = [];
  for (let n of nums) {
    dp.push(n);
  }
  //   let dp = Object.assign([], nums);

  for (let i = 0; i < N; i++) {
    //시작 인덱스부터 현재 인덱스까지 검사한다.
    //이전 값이 현재 값보다 작으면, 현재 dp 값보다 이전 dp 누적값에 +1 한게 더 큰지 확인한다.
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + nums[i]);
      }
    }
  }

  console.log(Math.max(...dp));
}
