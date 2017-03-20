const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    // 여기에 FizzBuzz의 계산을 적음
    // 힌트:
    // 연산을 계속하고 싶을 때, 즉 종료 조건인 반복 횟수가 max를 넘기지 않는 경우는
    // done: false의 객체를 반환합니다.
    // 반대로 종료조건을 만족했을 경우는 done: true의 객체를 반환합니다.
    let currentValue = 0;

    return {
      next(){
        currentValue++;
        let isThree = false, isFive = false;
        if (currentValue > max) return {done:true};

        if (currentValue % 3 == 0) isThree = true;
        if (currentValue % 5 == 0) isFive = true;

        if (isThree && isFive){
          return {done: false, value:'FizzBuzz'};
        }
        else if(isThree && !isFive){
          return {done: false, value:'Fizz'};
        }
        else if (!isThree && isFive){
          return {done: false, value:'Buzz'};
        }
        else {
          return {done: false, value:currentValue};
        }

      }
    }
  }
}

for (var n of FizzBuzz) {
  console.log(n);
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// ...
}
