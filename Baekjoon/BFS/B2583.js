/** [Baekjoon] #2583 - 영역 구하기
 * Created by jylee on 2021-08-09
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
  const [info, ...arr] = input;
  const [M, N] = info.split(" ").map(Number);
  solution(M, N, arr);
});

function solution(M, N, arr) {
  let graph = [...new Array(M)].fill([]).map(() => [...new Array(N)].fill(1));
  //초기화
  for (let row of arr) {
    const [x1, y1, x2, y2] = row.split(" ").map(Number);

    for (let i = x1; i < x2; i++) {
      for (let j = y2 - 1; j >= y1; j--) {
        graph[M - j - 1][i] = 0;
      }
    }
  }

  // 영역이 1인 곳을 탐색
  function bfs(start, end) {
    let queue = [];
    let count = 1;
    const directions = [
      [-1, 0],
      [1, 0],
      [0, 1],
      [0, -1],
    ];

    queue.push([start, end]);
    graph[start][end] = 0;

    while (queue.length) {
      const [x, y] = queue.shift();

      for (let [dx, dy] of directions) {
        const nx = dx + x;
        const ny = dy + y;

        if (nx < 0 || ny < 0 || nx >= M || ny >= N) continue;
        if (!graph[nx][ny]) continue;

        queue.push([nx, ny]);
        graph[nx][ny] = 0; //방문
        count++;
      }
    }

    return count;
  }

  let areas = [];
  let areaCount = 0;
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (!graph[i][j]) continue;
      areaCount++;
      areas.push(bfs(i, j));
    }
  }

  console.log(areaCount);
  console.log(areas.sort((a, b) => a - b).join(" "));
}
