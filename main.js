'use strict';

var limit = 30;
var a = 0;
var b = 1;

//while (a <= limit) {
//  console.log(a);
//  var temp = a + b;
//  a = b;
//  b = temp;
//}

for (a = 0; a <= limit;) {
  console.log(a);
  var temp = a + b;
  a = b;
  b = temp;
}