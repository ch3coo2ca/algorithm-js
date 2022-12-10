/** [Baekjoon] #2178 - 미로탐색
 * Created by jylee on 2021-03-06
 */

/**
 * 미로에서 1은 이동할 수 있는 칸을 나타내고, 0은 이동할 수 없는 칸을 나타낸다.
 * 이러한 미로가 주어졌을 때, (1, 1)에서 출발하여 (N, M)의 위치로 이동할 때 지나야 하는 최소의 칸 수를
 * 구하는 프로그램을 작성하시오. 한 칸에서 다른 칸으로 이동할 때, 서로 인접한 칸으로만 이동할 수 있다.
 * 위의 예에서는 15칸을 지나야 (N, M)의 위치로 이동할 수 있다.
 * 칸을 셀 때에는 시작 위치와 도착 위치도 포함한다.
 * */

/**
 * 현재 좌표 기준으로 상하좌우를 탐색하되, 1이고 방문되지 않은곳만 dfs로 탐색해서 count 증가
 */

class Pair {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function solution(n, m, arr) {
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  let maze = [];
  let visited = [];

  for (let idx in arr) {
    maze[idx] = arr[idx].split("");
  }

  for (let i = 0; i < n; i++) {
    visited[i] = new Array(m).fill(false);
  }

  function bfs(x, y) {
    let queue = [];
    queue.push(new Pair(x, y));
    visited[x][y] = true;

    while (queue.length > 0) {
      const current = queue.shift();
      for (let i = 0; i < 4; i++) {
        let nx = current.x + dx[i];
        let ny = current.y + dy[i];

        if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
          if (!visited[nx][ny] && maze[nx][ny] == 1) {
            queue.push(new Pair(nx, ny));
            visited[nx][ny] = true;
            maze[nx][ny] = parseInt(maze[current.x][current.y]) + 1;
          }
        }
      }
    }
  }
  bfs(0, 0);

  return maze[n - 1][m - 1];
}

//test
let arr = ["101111", "101010", "101011", "111011"];
console.log(solution(4, 6, arr));
