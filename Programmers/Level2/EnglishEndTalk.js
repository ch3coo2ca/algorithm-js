/**
 * [프로그래머스] Level2 - 영어 끝말 잇기
 *  Created by jylee on 2021-08-06
 */

function solution(n, words) {
    let lastWord = words[0]; 
    let answers = new Set();  
    answers.add(lastWord); 
    
    for(let i=1; i<words.length; i++) {
        const lastWordEnd = lastWord.slice(-1); 
        const currentWordStart =words[i].slice(0,1); 
        if(lastWordEnd !== currentWordStart || answers.has(words[i])) {
            return [i % n +1, Math.ceil( (i + 1)/ n)];
        }
        answers.add(words[i]);
        lastWord = words[i];
        
    }
    
    return [0,0];
    
}