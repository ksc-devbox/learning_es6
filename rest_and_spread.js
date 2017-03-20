var args = process.argv[2].split(",");
args = args.map((arg)=> +arg);

// 여기에 평균을 구하는 avg 함수를 만듦.
// 만들 때 REST 매개변수를 사용해야 함.
var avg = (...args) => {
  return args.reduce((sum, n) => sum + n)/args.length;
};

console.log(avg(...args));
