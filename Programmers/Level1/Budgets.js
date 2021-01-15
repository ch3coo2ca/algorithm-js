/**
 * [프로그래머스] Level1 - 예산
 *  Created by jylee on 2021-01-15
 */

function solution(d, budget) {
    let answer = 0; 
    d.sort((a,b) => a-b); 
    
    for(let i=0; i<d.length; i++) {
        if(budget-d[i] >= 0 ) answer++;
        budget = budget - d[i];
    }

    return answer; 
} 

const d = [1,3,2,5,4]; 
const budget = 9; 
console.log(solution(d,budget)); 