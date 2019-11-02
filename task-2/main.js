let str = prompt('Enter a string');

if (str[0] == ' ' && str[str.length - 1] == ' ') {
  console.log(str.slice(1, -1))
} else if (str[0] == ' ') {
  console.log(str.slice(1))
} else if (str[str.length - 1] == ' ') {
  console.log(str.slice(0, -1))
} else {
  console.log(str);
}