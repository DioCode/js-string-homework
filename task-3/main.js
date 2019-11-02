let str = prompt('Write some text');
let substr = prompt('Write another some text');

if (str.slice(0, substr.length) == substr) {
  console.log(true)
} else {
  console.log(false)
}