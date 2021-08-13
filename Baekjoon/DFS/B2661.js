/** [Baekjoon] #2661 - 좋은 수열
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
  const N = input[0];
  solution(Number(N));
});

function solution(N) {
  let arr = [];

  function check(level) {
    //앞자리와 비교
    if (arr[level - 1] === arr[level]) return false;

    if ([0, 1, 2].includes(level)) return true;

    const max = (level + 1) / 2;

    //문자열 chunck 개수 (2,3,4..개);
    for (let i = 2; i <= max; i++) {
      let isValid = false;
      for (let j = 0; j < i; j++) {
        if (arr[level - j] !== arr[level - j - i]) {
          isValid = true; //단어 chunk의 시작이 동일하지않으면 유효함
          break;
        }
      }
      if (!isValid) return false;
    }

    return true;
  }

  let found = false;
  function backtrack(level) {
    //가장 작은 수의 조합을 찾는 것이기에 found를 true로 만들어서 다음 탐색을 못하게 한다.
    if (level === N) {
      found = true;
      return;
    }

    for (let i = 1; i <= 3; i++) {
      arr.push(i);

      //level 인덱스에 넣은 문자열이 유효한지 검사한다.
      if (!check(level)) {
        arr.pop();
        continue;
      }

      //다음 인덱스에 들어갈 숫자를 탐색한다.
      backtrack(level + 1);
      if (found) break;
      arr.pop();
    }
  }

  //0레벨 부터시작해서 문자열 길이 level 까지 탐색한다.
  backtrack(0);
  console.log(arr.join(""));
}
