class Person {
    name;
    // name: string;
    age = 30;
    // constructor(public n: string) {
    // 	this.name = n;
    // }
    constructor(name) {
        this.name = name;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user1 = new Person("Max");
user1.greet("Hi there! I am");
export {};
