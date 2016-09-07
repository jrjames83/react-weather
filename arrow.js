var names = ["Jef", "Mica", "Collie"];

// names.forEach(function(val) {
// 	console.log(val);
// })

// // Arrow functions
// names.forEach((name) => {
// 	console.log(name)
// })

// // Even simpler
// names.forEach((name) => console.log(name));


// // When you 
// var returnMe = (name) => name + '!';
// console.log(returnMe("Jeffrey James"));

// var person = {
// 	name: 'Jeff',
// 	greet: function() {
// 		names.forEach(function(name) {
// 			console.log(this.name + ' says hi to ' + name);
// 		})
// 	}
// }

// person.greet(); // this.name = undefined


// var person = {
// 	name: "Jeff",
// 	// Arrow function doesn't update the 'this' keyword
// 	greet: function() {
// 		names.forEach((name) => {
// 			console.log(this.name, name);
// 		})
// 	}
// }


// Challenge - when you need to use a function and not lose the binding of 'this'
// to its parent, arrow functions are a good idea

function add(a,b) {
	return a + b;
}


var add3 = (a,b) => {
	return a + b;
}

var addAgain = (a,b) => a + b;

console.log(add(3,5));
console.log(add3(3,5));
console.log(addAgain(3,5));