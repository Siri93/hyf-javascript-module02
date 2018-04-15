function foo(func) {
   func();  
}

function bar(foo) {
   console.log('Q14: ' + 'Hello, I am bar!');
}

foo(bar);
