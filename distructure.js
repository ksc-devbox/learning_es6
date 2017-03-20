var json = {
  "name": {
    "first": "Yosuke",
    "family": process.argv[2]
  },
  "birth": {
    "year": 1982,
    "month": 12,
    "day": process.argv[3]
  }
};
// 여기서 디스트럭처링을 사용해 name.family를 familyName에,
// birth.day를 birthDay에 넣어 봅시다.
let {name:{family:familyName}, birth: {day:birthDay}} = json;

console.log(familyName);
console.log(birthDay);
