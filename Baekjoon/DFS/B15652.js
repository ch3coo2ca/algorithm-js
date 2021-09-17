/** [Baekjoon] #15652 - N과M(4)
 * Created by jylee on 2021-08-12
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
   function go(level,index) {
     if (level === M) {
       result.push(arr.join(" "));
       return;
     }
 
     //index부터 다시 시작하면서 큰 수를 넣는다.
     for (let i = index; i <= N; i++) {
       arr.push(i);
       go(level + 1, i);
       arr.pop();
     }
   }
 
   go(0,1);
   console.log(result.join('\n'));
 }
 