let str = prompt('Enter a string');

if (str[0] == ' ') {
  console.log(str.slice(1, str.length - 1));
} else if (str[str.length - 1] == ' ') {
  console.log(str.slice(0, str.length - 1));
} 