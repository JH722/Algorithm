//핸드폰 번호 가리기

function solution(n) {
  let len = n.length;
  let q = [];
  let nArr = n.split(""); // 문자열을 배열로 변환

  for (let i = 0; i < len - 4; i++) {
    nArr[i] = "*"; // 해당 인덱스의 값을 '*'로 변경
  }

  q = nArr.join(""); // 배열을 문자열로 변환
  return q;
}

console.log(solution("01012345678"));
