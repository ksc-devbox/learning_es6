var inputs = process.argv.slice(2);
var result = inputs.map(x => x[0])
                   .reduce( (sum,x) => sum + x);
console.log(result);
