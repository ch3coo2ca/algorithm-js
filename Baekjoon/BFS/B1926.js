/** [Baekjoon] #1926 - 그림
 * Created by jylee on 2021-08-08
 * 
 * Time Complexity : O(nm)
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
  const [n, m] = info.split(" ").map((s) => parseInt(s));
  solution(n, m, arr);
});

class Pair {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function solution(n, m, arr) {
  let graph = [];
  let maxArea = 0;
  let areaCount = 0;

  for (let row of arr) {
    graph.push(row.split(" ").map((s) => parseInt(s)));
  }

  function bfs(start, end) {
    let count = 1;
    let queue = [];

    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    queue.push(new Pair(start, end));
    graph[start][end] = 0; //방문

    while (queue.length) {
      const { x, y } = queue.shift();

      for (let [dx, dy] of directions) {
        let nx = x + dx;
        let ny = y + dy;

        if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
        if (!graph[nx][ny]) continue;

        queue.push(new Pair(nx, ny));
        graph[nx][ny] = 0;
        count++;
      }
    }

    return count;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!graph[i][j]) continue;
      areaCount++;
      maxArea = Math.max(maxArea, bfs(i, j));
    }
  }

  console.log(areaCount);
  console.log(maxArea);
}
