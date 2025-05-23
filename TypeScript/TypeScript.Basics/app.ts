interface Greetable {
	name: string;
	greet(phrase: string): void;
}

class Person implements Greetable {
	// name: string;
	age = 30;

	// constructor(public n: string) {
	// 	this.name = n;
	// }

	constructor(public name: string) {}

	greet(phrase: string) {
		console.log(phrase + " " + this.name);
	}
}

let user1 = new Person("Max");

user1.greet("Hi there! I am");
