// Factory Function
function createComic(name, issue, year) {
		return {
				name,
				issue,
				year,
				info() {
						console.log(`${name} #${issue} from ${year}`);
				}
		};
}
const batman1 = createComic('Batman', 1, 1940);
batman1.info();

// Constructor Function
function CreateComic(name, issue, year) {
		this.name = name;
		this.issue = issue;
		this.year = year;
		this.info = function() {
				console.log((`${name} #${issue} from ${year}`));
		}
}

const Batman1 = new CreateComic('Batman', 1, 1940, false);
Batman1.info();

///////////////////////////////////////////////////////////

function CreateProduct(name, price, img_url){
		this.name = name;
		this.price = price;
		this.img_url = img_url;
		this.info = function(){
				console.log(`${name} is $${price}`);
		}
}

const product1 = new CreateProduct('Shirt', 20, 'shirt.jpg');
const product2 = new CreateProduct('Pants', 30, 'pants.jpg');

document.getElementById('h1').innerHTML = product1.name;
document.getElementById('p').innerHTML = product1.price;

document.getElementById('h12').innerHTML = product2.name;
document.getElementById('p2').innerHTML = product2.price;

///////////////////////////////////////////////////////////

const address = {
		street: '1 Main St',
		city: 'Boston',
		zipCode: '02129'
};

function showAddress(address) {
		for (let key in address){
				console.log(`${key}: ${address[key]}`);
		}
}

showAddress(address);

///////////////////////////////////////////////////////////

const blogPost = {
		title: 'a',
		body: 'b',
		author: 'c',
		views: 10,
		comments: [
				{author: 'a', body: 'b'},
				{author: 'c', body: 'd'}
		],
		isLive: true
}

console.log(blogPost);

function BlogPost(title, body, author){
		this.title = title;
		this.body = body;
		this.author = author;
		this.views = 0;
		this.comments = [];
		this.isLive = false;
}

const blogPost1 = new BlogPost('a', 'b', 'c');
console.log(blogPost1);

///////////////////////////////////////////////////////////

const numbers = [1, 2, 3, 4];

console.log(numbers.includes(1));

console.log(includes(numbers, 1));

function includes(array, searchElement){
		for (let element of array)
				if (element === searchElement)
				return true;
		return false;
}

///////////////////////////////////////////////////////////

const numbers2 = [1, 2, 3, 4, 1, 1];

console.log(except(numbers2, [1,4]));

function except(array, excluded){
		const output = [];
		for (let element of array)
			if (!excluded.includes(element))
				output.push(element);
		return output;	
}

///////////////////////////////////////////////////////////