// 약수 더하기

function solution(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (Number.isInteger(n / i)) sum += i; //  if (num % i === 0) sum += i
  }
  return sum;
}

console.log(solution(5));
console.log(solution(30));

//다른 사람들 코드1 (재귀)
function solution(n, a = 0, b = 0) {
  return n <= a / 2 ? b : solution(n, a + 1, (b += n % a ? 0 : a));
}

//다른 사람들 코드2 (짝 찾으면 바로 더하는 방법)
function solution(n) {
  var answer = 0;
  let i;
  for (i = 1; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      answer += i + n / i;
    }
  }
  i--;
  return i === n / i ? answer - i : answer; // 4의 약수 2 같은 경우 2 + 2 임으로 같은 수 제거하기 위함
}
