//x만큼 간격이 있는 n개의 숫자

//for문 말고도 다른 방법에 대해 생각하는 힘을 길러야겠다
function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

//다른사람코드1
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}

console.log(solution(-2, 5));
