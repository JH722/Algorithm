function solution(numbers) {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7]));

//
function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
