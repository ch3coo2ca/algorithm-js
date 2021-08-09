/** [Baekjoon] #5427 - 불
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
  const [R, C] = info.split(" ").map((s) => parseInt(s));

  solution(R, C, arr);
});

class Pair {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function solution(R, C, arr) {
  let graph = [];
  let fireQueue = [];
  let personQueue = [];
  let fireDist = [...new Array(R)].fill().map(() => [...new Array(C)].fill(-1)); // 각 영역이 불타는 데 걸리는 시간 저장
  let personDist = [...new Array(R)]
    .fill()
    .map(() => [...new Array(C)].fill(-1));

  const directions = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  //초기화
  for (let row of arr) {
    graph.push(row.split(""));
  }

  //불과, 지훈이의 초기 위치를 큐에 각각 넣는다.
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (graph[i][j] === "#") continue;
      if (graph[i][j] === "J") {
        personQueue.push(new Pair(i, j));
        personDist[i][j] = 0;
      }
      if (graph[i][j] === "F") {
        fireQueue.push(new Pair(i, j));
        fireDist[i][j] = 0;
      }
    }
  }

  function bfsFire() {
    while (fireQueue.length) {
      const { x, y } = fireQueue.shift();

      for (let [dx, dy] of directions) {
        const nx = dx + x;
        const ny = dy + y;
        if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;
        //벽이거나 이미 방문한 곳이면 패스
        if (graph[nx][ny] === "#" || fireDist[nx][ny] >= 0) continue;

        fireQueue.push(new Pair(nx, ny));
        fireDist[nx][ny] = fireDist[x][y] + 1; // 걸리는 시간 갱신
      }
    }
  }

  function bfsPerson() {
    while (personQueue.length) {
      const { x, y } = personQueue.shift();

      for (let [dx, dy] of directions) {
        const nx = dx + x;
        const ny = dy + y;

        //범위를 벗어나면 지훈이가 탈출 성공
        if (nx < 0 || ny < 0 || nx >= R || ny >= C) {
          console.log(personDist[x][y] + 1);
          return;
        }
        if (graph[nx][ny] === "#" || personDist[nx][ny] >= 0) continue;

        //동시에 도착하거나, 미리 불이 붙을 경우
        //불이 안퍼진 영역은 제외한다.
        if (fireDist[nx][ny] !== -1 && fireDist[nx][ny] <= personDist[x][y] + 1)
          continue;

        personQueue.push(new Pair(nx, ny));
        personDist[nx][ny] = personDist[x][y] + 1;
      }
    }

    console.log("IMPOSSIBLE");
  }

  bfsFire();
  bfsPerson();
}
