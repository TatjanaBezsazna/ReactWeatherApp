var add = (a, b) => {
	return a+b;
}

console.log(add(3, 4));

var add2 = (a, b) => a + b;

console.log(add2(3, 4));

//Arrow function takes 'this' keyword from the parrent, differently to the anonymous function calls