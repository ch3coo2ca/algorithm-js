/** [Baekjoon] #2178 - 미로 탐색
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
  const [info, ...arr] = input;
  const [N, M] = info.split(" ").map((s) => parseInt(s));
  solution(N, M, arr);
});

class Pair {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function solution(N, M, arr) {
  let graph = [];

  for (let row of arr) {
    graph.push(row.split("").map((s) => parseInt(s)));
  }

  function dfs() {
    let queue = [];
    const directions = [
      [-1, 0],
      [1, 0],
      [0, 1],
      [0, -1],
    ];

    queue.push(new Pair(0, 0));
    graph[0][0] = 0; //방문

    while (queue.length) {
      const { x, y } = queue.shift();

      for (let [dx, dy] of directions) {
        const nx = dx + x;
        const ny = dy + y;
        if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
        if (graph[nx][ny] !== 1) continue;

        queue.push(new Pair(nx, ny));
        graph[nx][ny] = graph[x][y] + 1; //다음 이동 값 갱신
      }
    }
  }

  dfs();
  console.log(graph[N - 1][M - 1] + 1);
}
