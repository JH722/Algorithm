/**
 * 나머지가 1이 되는 수 찾기
 * 자연수 n이 매개변수로 주어집니다.
 * n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요.
 * 답이 항상 존재함은 증명될 수 있습니다
 */

//내 풀이
function solution(n) {
  for (let answer = 0; answer < n; answer++) {
    if (n % answer == 1) {
      return answer;
    }
  }
}

//가장 짧은 풀이
function solution(n, x = 0) {
  return n % x === 1 ? x : solution(n, x + 1);
}

console.log(solution(10));
console.log(solution(12));
