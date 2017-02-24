'use strict';
// 변수 a는 블록 스코프 안에서도 밖에서도 재이용할 수 있는 변수입니다. 변수 선언 방법은 (var|let|const) 중에 어느 것을 사용해야 할지 생각해보세요.
let a = 5;
// 변수 b는 재이용할 수 없는 변수입니다. 변수 선언 방법은 (var|let|const) 중에 어느 것을 사용해야 할지 생각해보세요.
const b = process.argv[2];

if (a === 5) {
  // 변수 c는 재이용 가능합니다만, 이 블록 안에서만 유효한 변수입니다. 변수 선언 방법은 (var|let|const) 중에 어느 것을 사용해야 할지 생각해보세요.
  let c = 4;
  console.log(c);  // 4

  // 변수 b는 블록 안에서만 유효한 변수입니다. 변수 선언 방법은 (var|let|const) 중에 어느 것을사용해야 할지 생각해보세요.
  const b = 8;
  console.log(b); // 8
}

console.log(a); // 5
console.log(b);
try {
  // 여기서 c의 값을 변경해 봅시다.
  c = 1000;
} catch (e) {
  // c is not defined 에러가 발생하는 것을 확인해보세요.
  // 저장은 solustion.js 로 해야 마지막 오류가 비교 된다.
  console.log(e);
}
