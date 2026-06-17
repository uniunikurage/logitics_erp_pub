const name = "최정민";
console.log(typeof name);

const age = 24;
console.log(typeof age);

const 친구들이름 = ["아현", "연수", "양희"];
console.log(typeof 친구들이름);

console.log(친구들이름[0]);
console.log(친구들이름[2]);

const 친구들나이 = [24, 24, 28];
console.log(친구들나이[1]);

const 내정보 = {
  이름: "최정민",
  나이: 24,
};

console.log(내정보.이름);
console.log(내정보.나이);

const 내친구정보 = {
  이름: "안연수",
  나이: 24,
  언제친구: "초3",
};

console.log(내친구정보);

function 함수1(x) {
  const 결과값 = x + 99;

  return 결과값;
}

function 함수2(a) {
  if (a == "man") {
    console.log("남자입니다");
    return "남자입니다";
  } else if (a == "woman") {
    console.log("여자입니다");
    return "여자입니다";
  } else {
    console.log("외계인입니다");
    return "외계인입니다";
  }
}

const 계산한값 = 함수1(1);
console.log(계산한값);

const 성별 = 함수2("man");
const 성별1 = 함수2("woman");
const 성별2 = 함수2("kong");

// if (5 <= 계산한값 && 계산한값 <= 7) {
//   console.log("5이상 7이하입니다");
// } else if (계산한값 < 5) {
//   console.log("5미만 입니다");
// } else if (계산한값 <= 7 && 계산한값 < 10) {
//   console.log("7이상 10미만입니다");
// } else if (계산한값 < 10) {
//   console.log("10미만입니다");
// } else {
//   console.log("알수없는값입니다");
// }

const test = [10, 20, 30, 40];
for (let index = 0; index < test.length; index++) {
  //console.log(test[index]);
}

const お菓子 = test.map((item, index) => {
  if (item <= 20) {
    return "わかい";
  } else {
    return "わかくない";
  }
});

console.log(お菓子);

const 친구들정보리스트 = [
  { 이름: "아현", 나이: 24, 주소: "신현동" },
  { 이름: "연수", 나이: 24, 주소: "장곡동" },
  { 이름: "양희", 나이: 28, 주소: "거모동" },
];
console.log(친구들정보리스트[2].나이);

친구들정보리스트.forEach((item, index) => {
  console.log(item.이름);
  console.log(item.주소);
});
