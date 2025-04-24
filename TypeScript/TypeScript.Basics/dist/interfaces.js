// interface Person {
// 	name: string;
// 	age: number;
// 	greet(phrase: string): void;
// }
class Person1 {
    n;
    name;
    age = 30;
    constructor(n) {
        this.n = n;
        this.name = n;
    }
    greet(phrase) {
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
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    name;
    age = 30;
    constructor(n) {
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log("Hi!");
        }
    }
}
let user;
user = new Person();
// user1.name = 'Manu';
user1.greet("Hi there - I am");
console.log(user1);
export {};
