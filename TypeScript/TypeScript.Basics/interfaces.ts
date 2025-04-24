// interface Person {
// 	name: string;
// 	age: number;
// 	greet(phrase: string): void;
// }

interface Greetable1 {
	name: string;
	greet(phrase: string): void;
}

class Person1 implements Greetable1 /*, AnotherInterface */ {
	name: string;
	age = 30;

	constructor(public n: string) {
		this.name = n;
	}

	greet(phrase: string) {
		console.log(phrase + " " + this.name);
	}
}

// let user1: Person;
// let user1: Greetable;

// user1 = {
// 	name: "Max",
// 	age: 30,
// 	greet(phrase: string) {
// 		console.log(phrase + " " + this.name);
// 	},
// };

let user1 = new Person1("Max");

user1.greet("Hi there! I am");

// type AddFn = (a: number, b: number) => number;
interface AddFn {
	(a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
	return n1 + n2;
};

interface Named {
	readonly name?: string;
	outputName?: string;
}

interface Greetable extends Named {
	greet(phrase: string): void;
}

class Person implements Greetable {
	name?: string;
	age = 30;

	constructor(n?: string) {
		if (n) {
			this.name = n;
		}
	}

	greet(phrase: string) {
		if (this.name) {
			console.log(phrase + " " + this.name);
		} else {
			console.log("Hi!");
		}
	}
}

let user: Greetable;

user = new Person();
// user1.name = 'Manu';

user1.greet("Hi there - I am");
console.log(user1);
