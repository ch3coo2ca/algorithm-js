/** [Baekjoon] #2206 - 벽 부수고 이동하기
 * 각 벽을 뚫었을때 최단경로를 갱신한다?
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
  const [N, M] = info.split(" ").map(Number);
  solution(N, M, arr);
});

class Block {
  constructor(x, y, drill, cost) {
    this.x = x;
    this.y = y;
    this.drill = drill; //드릴 유무 (0: 없음 , 1 :있음)
    this.cost = cost; //방문 비용
  }
}

function solution(N, M, arr) {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  let graph = [];

  //초기화
  for (let row of arr) {
    graph.push(row.split("").map(Number));
  }

  function bfs() {
    let queue = [];
    //x,y좌표와 드릴유무를 관리하는 3차원 배열 생성
    let visited = Array(N)
      .fill()
      .map(() =>
        Array(M)
          .fill()
          .map(() => Array(2).fill(false))
      ); // [x][y][drill]

    queue.push(new Block(0, 0, 1, 0));
    visited[0][0][0] = true;

    let head =0; 
    while (queue.length > head) {
      const { x, y, drill, cost } = queue[head++];

      if (x === N - 1 && y === M - 1) {
        console.log(cost + 1);
        return;
      }
      for (let [dx, dy] of directions) {
        const nx = dx + x;
        const ny = dy + y;

        if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue; //범위 벗어났을때

        //벽을 만나면
        if (graph[nx][ny] === 1) {
          //드릴이 있고, 드릴로 뚫은 적이 없는 벽이면
          if (drill === 1 && visited[nx][ny][0] === false) {
            queue.push(new Block(nx, ny, 0, cost + 1));
            visited[nx][ny][0] = true; //드릴 가지고 뚫음
          }
        } else {
          //지나갈 수 있으면 drill 가지고 지나간다.
          queue.push(new Block(nx, ny, drill, cost + 1));
          visited[nx][ny][drill] = true;
        }
      }
    }

    console.log(-1);
  }

  bfs();
}
