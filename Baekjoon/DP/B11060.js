/** [Baekjoon] #11060 - 점프 점프
 * Created by jylee on 2021-03-14
 */

function solution(maze) {
  const size = maze.length;

  //각 칸의 방문 횟수 저장
  let visitCount = new Array(size).fill(-1);

  //시작하는 칸은 0으로 초기화
  visitCount[0] = 0;

  for (let i = 0; i < size; i++) {
    if (visitCount[i] === -1) continue;

    for (let j = 1; j <= maze[i]; j++) {
      if (size < i + j) continue;

      if (visitCount[i + j] === -1) {
        //다음 이동할 칸이 방문한 적이 없다면
        visitCount[i + j] = visitCount[i] + 1;
      } else {
        //다음 이동할 칸이 방문한 적이 있다면 최소 값으로 갱신
        visitCount[i + j] = Math.min(visitCount[i + j], visitCount[i] + 1);
      } 
    }
  }
  console.log(visitCount)

  return visitCount[size - 1];
}

//test
const maze = [1, 2, 0, 1, 3, 2, 1, 5, 4, 2];
console.log(solution(maze));
