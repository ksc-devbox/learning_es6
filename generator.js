const max = process.argv[2];
let FizzBuzz = function*(){
  // 여기에 FizzBuzz의 계산을 적음
  let currentValue = 0;
  while(currentValue < max){
      currentValue++;
      let isThree = false, isFive = false;

      if (currentValue % 3 == 0) isThree = true;
      if (currentValue % 5 == 0) isFive = true;

      if (isThree && isFive){
        yield 'FizzBuzz';
      }
      else if(isThree && !isFive){
        yield 'Fizz';
      }
      else if (!isThree && isFive){
        yield 'Buzz';
      }
      else {
        yield currentValue;
      }
  }
}();

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
