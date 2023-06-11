//제일 작은 수 제거하기

function solution(arr) {
  const min = Math.min(...arr);
  console.log(min);
  return arr.length !== 1 ? arr.filter((i) => i !== min) : [-1];
}

console.log(solution([1, 2, 3]));
