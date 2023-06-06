//김서방 찾기
let seoul = ["Jane", "Kim"];

function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      return `김서방은 ${i}에 있다`;
    }
  }
}
console.log(solution(seoul));

//다름사람 코드 , 왜 indexOf를 생각 못했을까..
function findKim(seoul) {
  var idx = seoul.indexOf("Kim");

  return "김서방은 " + idx + "에 있다";
}

console.log(findKim(["Queen", "Tod", "Kim"]));
