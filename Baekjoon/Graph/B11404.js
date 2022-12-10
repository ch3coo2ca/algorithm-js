/** [Baekjoon] #11404- 플로이드
 * Created by jylee on 2021-03-06
 */

/** n(2 ≤ n ≤ 100)개의 도시가 있다.
 * 그리고 한 도시에서 출발하여 다른 도시에 도착하는 m(1 ≤ m ≤ 100,000)개의 버스가 있다.
 * 각 버스는 한 번 사용할 때 필요한 비용이 있다. 모든 도시의 쌍 (A, B)에 대해서
 * 도시 A에서 B로 가는데 필요한 비용의 최솟값을 구하는 프로그램을 작성하시오.
 * */

/**
 * 실수한것
 * costs 배열 초기화할때 0 으로하면안된다.. 최대 비용 보다 큰값으로 초기화 해야
 * Math.min() 에서 최소비용을 구할 수 있음
 */
function solution(N, m, arr) {
  let costs = []; //비용 저장
  const INF = 1000001;

  //배열 초기화
  for (let i = 1; i <= N; i++) {
    costs[i] = new Array(N + 1).fill(INF);
  }

  for (idx in arr) {
    const [start, end, cost] = arr[idx].split(" ");
    costs[start][end] = Math.min(costs[start][end], cost);
  }

  //start -> 중간 -> end
  //현재 비용과, 거쳐갔을 때의 비용 중 최소 값을 저장한다.
  for (let k = 1; k <= N; k++) {
    for (let i = 1; i <= N; i++) {
      if (k == i) continue;
      for (let j = 1; j <= N; j++) {
        if (i == j || k == j) continue;
        costs[i][j] = Math.min(costs[i][k] + costs[k][j], costs[i][j]);
      }
    }
  }

  for (let i = 1; i <= N; i++) {
    let row = "";
    for (let j = 1; j <= N; j++) {
      if (costs[i][j] == INF) row += 0 + " ";
      else row += `${costs[i][j]} `;
    }
    console.log(row);
  }
}

//test
let arr = [
  "1 2 2",
  "1 3 3",
  "1 4 1",
  "1 5 10",
  "2 4 2",
  "3 4 1",
  "3 5 1",
  "4 5 3",
  "3 5 10",
  "3 1 8",
  "1 4 2",
  "5 1 7",
  "3 4 2",
  "5 2 4",
];
solution(5, 14, arr);
