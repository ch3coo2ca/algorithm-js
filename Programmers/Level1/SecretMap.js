/**
 * [프로그래머스] Level1 - 비밀지도
 *  Created by jylee on 2021-01-15
 */
function solution(n, arr1, arr2) {
  return arr1.map((a, i) =>
    (a | arr2[i]) //do OR operation
      .toString(2) //decimal to binary
      .padString(n, 0) //make string length n and fill empty spaces with 0 from beginning
      .replace(/0/g, " ") //replace 0 with space , 1 with #
      .replace(/1/g, "#")
  );
}
