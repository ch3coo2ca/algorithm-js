/** [Baekjoon] #2178 - 토마토
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
  const [M, N] = info.split(" ").map((s) => parseInt(s));
  solution(N, M, arr);
});

class Pair {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
function solution(N, M, nums) {
  let graph = [];
  let queue = [];
  let minDays = -1;
  let dist = [...new Array(N).fill([]).map(() => [...new Array(M)].fill(0))];

  for (let row of nums) {
    graph.push(row.split(" ").map((s) => parseInt(s)));
  }

  let riped = 0;
  let empty = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] === 1) {
        queue.push(new Pair(i, j));
        riped++;
      }

      if (graph[i][j] === 0) dist[i][j] = -1;
    }
  }

  if (riped === N * M) return 0;

  function bfs() {
    const directions = [
      [-1, 0],
      [1, 0],
      [0, 1],
      [0, -1],
    ];

    let head =0; 
    while (queue.length > head) {
      const { x, y } = queue[head++]; 

      for (let [dx, dy] of directions) {
        const nx = dx + x;
        const ny = dy + y;

        if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
        if (graph[nx][ny] === 1 || graph[nx][ny] === -1) continue;

        queue.push(new Pair(nx, ny));
        graph[nx][ny] = 1;
        dist[nx][ny] = dist[x][y] + 1;
      }
    }
  }

  bfs();

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (dist[i][j] === -1) {
        console.log(-1);
        return;
      }

      minDays = Math.max(minDays, dist[i][j]);
    }
  }
  console.log(minDays);
}
