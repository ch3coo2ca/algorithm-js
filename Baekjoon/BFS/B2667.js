/** [Baekjoon] #2667 - 단지번호붙이기
 * Created by jylee on 2021-03-06
 */

/** <그림 1>과 같이 정사각형 모양의 지도가 있다. 1은 집이 있는 곳을, 0은 집이 없는 곳을 나타낸다.
 * 철수는 이 지도를 가지고 연결된 집의 모임인 단지를 정의하고, 단지에 번호를 붙이려 한다.
 * 여기서 연결되었다는 것은 어떤 집이 좌우, 혹은 아래위로 다른 집이 있는 경우를 말한다.
 * 대각선상에 집이 있는 경우는 연결된 것이 아니다. <그림 2>는 <그림 1>을 단지별로 번호를 붙인 것이다.
 * 지도를 입력하여 단지수를 출력하고, 각 단지에 속하는 집의 수를 오름차순으로 정렬하여
 * 출력하는 프로그램을 작성하시오. */

function solution(arr) {
  let dx = [0, 0, 1, -1];
  let dy = [-1, 1, 0, 0];

  let aparts = [];
  let result = [];
  let count = 1;
  const N = arr.length;

  for (let idx in arr) {
    aparts[idx] = arr[idx].split("");
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (aparts[i][j] == 1) {
        aparts[i][j] = 0;
        count = 1;
        dfs(i, j);
        result.push(count);
      }
    }
  }

  function dfs(x, y) {
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
        if (aparts[nx][ny] == 1) {
          aparts[nx][ny] = 0; //방문처리
          count++;
          dfs(nx, ny);
        }
      }
    }
    return count;
  }

  return result;
}

//test
let arr = [
  "0110100",
  "0110101",
  "1110101",
  "0000111",
  "0100000",
  "0111110",
  "0111000",
];

console.log(solution(arr));
