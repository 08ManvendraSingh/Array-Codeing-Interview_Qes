//1. Write a JavaScript function to check whether an `input` is an array or not.

var a = "w3resource";
console.log(Array.isArray(a));

var a = [1, 2, 3, 5];
console.log(Array.isArray(a));

// 2.Write a JavaScript function to clone an array.

var a = [1, 2, 3, 4];
// 1'st way
var b = [...a];
console.log(b);

// 2'nd way
var sum = [];
for (i = 0; i < a.length; i++) {
  sum.push(a[i]);
}
console.log(sum);

// 3'rd way
var c = a.map((x, i) => x);
console.log(c);

// 4'th way
var d = a.slice();
console.log(d);

// 3. Write a simple JavaScript program to join all elements of the following array into a string.

var a = ["Red", "Green", "White", "Black"];

// 1'st way
var b = a.toString();
console.log(b);

// 2'nd way
var sum = "";
for (i = 0; i < a.length; i++) {
  sum += a[i];
}
console.log(sum);

// 3'rd way
console.log(...a);

// 4'th way
var b = a.join();
console.log(b);

// 4.Write a JavaScript program to sort the items of an array in assecending order.

var a = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// 1'st way
var b = a.sort((x, y) => x - y);
console.log(b);

// 2'nd way
for (i = 1; i < a.length; i++) {
  for (x = 0; x < i; x++) {
    if (a[i] < a[x]) {
      sum = a[i];
      a[i] = a[x];
      a[x] = sum;
    }
  }
}
console.log(a);

// 5.Write a JavaScript program to sort the items of an array in decending order.

var a = [-3, 8, 27, 6, 5, -4, 3, 2, 1];

// 1'st way
var b = a.sort((x, y) => y - x);
console.log(b);

// 2'nd way
for (i = 1; i < a.length; i++) {
  for (x = 0; x < i; x++) {
    if (a[i] > a[x]) {
      sum = a[i];
      a[i] = a[x];
      a[x] = sum;
    }
  }
}
console.log(a);

// 6.Write a program to reverse an array.

var a = [1, 2, 3, 4, 5, 6, 7];

// 1'st way
var b = a.reverse();
console.log(b);

// 2'nd way
var b = [];
for (i = a.length - 1; i >= 0; i--) {
  b.push(a[i]);
}
console.log(b);

// 3'rd way
var sum = [];
var c = a.map((x) => sum.unshift(x));
console.log(sum);

// 7.Find the length of an array.

var a = [1, 2, 3, 4];

// 1'st way
console.log(a.length);

// 2'nd way
var b = 0;
for (i = 0; i < a.length; i++) {
  b += 1;
}
console.log(b);

// 8.Write a program to empty an array in JavaScript?

var a = [1, 2, 3, 4, 4, 3, 3, 4];

// 1'st way
// a=[];
// console.log(a);

// 2'nd way
// a.splice(0);
// console.log(a);

// 3'rd way
// console.log(a.slice(a.length));

// 4'th way
// a.length=0;
// console.log(a);

// 5'th way
while (a.length > 0) {
  a.pop();
}
console.log(a);

// 9.write a program to square the elements of an array in javascript?

var a = [1, 3, 4, 6, 2];

// 1'st way
var sum = [];
for (i = 0; i < a.length; i++) {
  sum.push(a[i] ** 2);
}
console.log(sum);

// 2'nd way
var b = a.map((x) => x ** 2);
console.log(b);

// 3'rd way
var sum = a.reduce((acc, res) => {
  acc.push(res ** 2);
  return acc;
}, []);
console.log(sum);

// 10.Write a program to find the minimum value in an array in javascript.

var a = [201, 23, 27];

// 1'st way
var sum = a[0];
for (i = 0; i < a.length; i++) {
  if (a[i] < sum) {
    sum = a[i];
  }
}
console.log(sum);

// 2'nd way
var b = a.reduce((acc, res) => Math.min(acc, res));
console.log(b);

// 3'rd way
console.log(Math.min(...a));

// 4'th way
var b = a.sort((x, y) => x - y)[0];
console.log(b);

// 5'th way
for (i = 1; i < a.length; i++) {
  for (x = 0; x < i; x++) {
    if (a[i] < a[x]) {
      sum = a[i];
      a[i] = a[x];
      a[x] = sum;
    }
  }
}
console.log(a[0]);

// 11.Write a program to find the maximum value in an array in javascript.

var a = [20, 23, 27];

// 1'st way
var sum = a[0];
for (i = 0; i < a.length; i++) {
  if (a[i] > sum) {
    sum = a[i];
  }
}
console.log(sum);

// 2'nd way
var b = a.reduce((acc, res) => Math.max(acc, res));
console.log(b);

// 3'rd way
console.log(Math.max(...a));

// 4'th way
var b = a.sort((x, y) => y - x)[0];
console.log(b);

// 5'th way
for (i = 1; i < a.length; i++) {
  for (x = 0; x < i; x++) {
    if (a[i] < a[x]) {
      sum = a[i];
      a[i] = a[x];
      a[x] = sum;
    }
  }
}
console.log(a[a.length - 1]);

// 12.Write a program to remove the duplicate value from an array in javascript.

var a = [20, 23, 27, 21, 23, 24, 27];

// 1'st way
var b = [...new Set(a)];
console.log(b);

// 2'nd way
var c = a.filter((x, i) => a.indexOf(x) == i);
console.log(c);

// 3'rd way
var b = Array.from(new Set(a));
console.log(b);

// 4'th way
var sum = [];
for (i = 0; i < a.length; i++) {
  if (!sum.includes(a[i])) {
    sum.push(a[i]);
  }
}
console.log(sum);

// 13.Write a program to print the duplicate value from an array in javascript.

var a = [20, 23, 27, 21, 23, 24, 27];

// 1'st way
var c = a.filter((x, i) => a.indexOf(x) !== i);
console.log(c);
