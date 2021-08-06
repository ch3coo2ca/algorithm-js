const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [info, arr] = input;
  const [L, N] = info.split(" ").map((s) => parseInt(s));
  const letters = arr.split(" ");
  solution(L, N, letters);
});

function checkRules(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  let vowel = 0;
  let consonant = 0;

  for (let s of Array.from(str)) {
    if (vowels.includes(s)) vowel++;
    else consonant++;
  }

  if (vowel >= 1 && consonant >= 2) return true;

  return false;
}

function solution(L, N, letters) {
  let result = [];
  let arr = [];
  let visited = [...new Array(N)].fill(false);

  letters.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

  function dfs(level) {
    if (level === L) {
      if (checkRules(arr.join(""))) result.push(arr.join(""));
      return;
    }

    for (let i = level; i < N; i++) {
      const letter = letters[i];
      if (visited[letter]) continue;
      if (
        arr.length &&
        arr[arr.length - 1].charCodeAt(0) > letter.charCodeAt(0)
      )
        continue;
      visited[letter] = true;
      arr.push(letter);
      dfs(level + 1);
      arr.pop();
      visited[letter] = false;
    }
  }

  dfs(0);
  result.map((word) => console.log(word));
}
