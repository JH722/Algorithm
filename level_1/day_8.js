// 시저암호

function solution(s, n) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let befo = s[i];

    let uni = befo.charCodeAt(0);

    if (befo === " ") {
      result += " ";
      continue;
    } else if (befo >= "A" && befo <= "Z") {
      uni = ((uni - 65 + n) % 26) + 65;
    } else if (befo >= "a" && befo <= "z") {
      uni = ((uni - 97 + n) % 26) + 97;
    }
    console.log(uni);

    result += String.fromCharCode(uni);
  }

  return result;
}

console.log(solution("A", 2));

//다른사람 코드
function caesar(s, n) {
  var result = "";

  var car = "";
  for (var i = 0; i < s.length; i++) {
    if (s[i] == " ") result += " ";
    else
      result += String.fromCharCode(
        s.charCodeAt(i) > 90
          ? ((s.charCodeAt(i) + n - 97) % 26) + 97
          : ((s.charCodeAt(i) + n - 65) % 26) + 65
      );
  }

  return result;
}

// 다른사ㅏㄹㅁ 코드 2
function solution(s, n) {
  var chars =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          ";
  return s
    .split("")
    .map((e) => chars[chars.indexOf(e) + n])
    .join("");
}
