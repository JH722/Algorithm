function solution(numbers) {
  const allNumbers = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const presentNumbers = new Set(numbers);

  let sum = 0;

  for (let num of allNumbers) {
    if (!presentNumbers.has(num)) {
      sum += num;
    }
  }

  return sum;
}

console.log(solution([1, 3, 4, 5, 6, 8]));
