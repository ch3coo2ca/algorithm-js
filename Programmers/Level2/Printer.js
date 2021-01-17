/**
 * [프로그래머스] Level2 - 프린터
 *  Created by jylee on 2021-01-16
 */

function solution(priorities, location) {
  let prints = priorities.map((priority, i) => ({ id: i, priority }));

  let sortedQueue = [];
  while (prints.length > 0) {
    let current = prints[0];
    const hasHigherPriority = prints.find(
      (print) => print.priority > current.priority
    );
    
    //if there is higher priorty item then current
    if (hasHigherPriority) {
      prints.push(prints.shift()); //push it back to the queue.
    } else {
      sortedQueue.push(prints.shift());
    }
  }

  return sortedQueue.findIndex((print) => print.id === location) + 1;
}
console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
console.log(solution([9, 2, 3, 1, 1, 1, 6], 2));
