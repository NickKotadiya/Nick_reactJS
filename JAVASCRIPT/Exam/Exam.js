/*******  1  ******/
let createHelloWorld = function () {
    return function () {
        return "Hello World"
    }
}

console.log(createHelloWorld);

/*****  2  *****/


function order(str) {
    return str.split('').sort().join('');
}
  console.log(order("hello"));

/******* 3  *******/
