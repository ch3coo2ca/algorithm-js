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
  solution(input[0]);
});

function solution(str) {
  let stack1 = [];
  let stack2 = [];

  Array.from(str).forEach((s) => {
    if (s === ")") stack2.push(s);
    else stack1.push(s);
  });

  while (stack1.length) {
    const s1 = stack1.pop();
    const s2 = stack2.pop();
    if (s1 === "(") {
      stack2.push(s2);
      stack2.push("*");
    } else {
      //숫자 일때
      if (s2 === ")") {
        //여는 괄호 까지 숫자를 stack2 넣는다.
        let temp = s1;
        while (stack1.length) {
          const top = stack1.pop();
          if (top === "(") {
            stack2.push(temp);
            stack2.push("*");
            break;
          }
          temp += top;
        }
      } else if (s2 === "*") {
        const repeatStr = stack2.pop().repeat(Number(s1));
        stack2.push(repeatStr);
      } else {
        stack2.push(`${s1}${s2}`);
      }
    }
  }
  console.log(stack2.pop().length);
}
