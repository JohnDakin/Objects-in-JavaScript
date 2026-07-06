let user = {
  name: "tapas",
  age: 40,
  "is admin": true
};

console.log(user.name);
console.log(user.age);

user.isSeniorCitizen = false;
user["movie lover"] = true;

console.log(user);

console.log(user["is admin"])

user.age = 22;
user["movie lover"] = false;

// delete user["movie lover"];
// delete user.age;
console.log(user);

const someKey = "age";

console.log(user[someKey]);
/*
let car = prompt("Which is your fav car?");

let favCars = {
  [car]: 5
};

console.log(favCars);
*/
//Constructor Function

function Car(name, model){
  this.name = name;
  this.model = model;
}

const bmwCar = new Car("BMW", "X1");
const audiCar = new Car("Audi", "A8");
console.log(bmwCar);
console.log(audiCar);


console.log(bmwCar instanceof Car);

const person = new Object();
person.name = "Alpa";
person.age = 76;
console.log(person);

//factory
function createUser(name, age){
  return {
    name,
    age,
    greet(){
      console.log(this.name)
    }
  }
}

const user1 = createUser("John", 22);
console.log(user1);
user1.name;
user1.age;
user1.greet();
const user2 = createUser("Bob", 32);
console.log(user2);

let profile = {
  name: "Dakin",
  company: "CreoWis",
  message: function(){
    console.log(`${this.name} works at ${this.company}`);
  },
  address: {
    city: "Bangalore",
    pin: 56032,
    state: "Karataka",
    country: "India",
    greeting: function(){
      console.log("Welcome to India");
    }
  }
}
console.log(profile.salary);

console.log("salary" in profile);

//for ... in
for(let key in profile){
  console.log(key);
  console.log(profile[key]);
}

console.log(Object.keys(profile));


if(!profile.salary){
  console.log("The salary property doesn't exist")
}


console.log(profile.address.country);
profile.address.greeting();
console.log(profile.name);
console.log(profile.company);

profile.message();

//Object Reference

let fruit = {name: "mango"};
const oneMoreFruit = {name: "mango"};

console.log(fruit == oneMoreFruit);
console.log(fruit === oneMoreFruit);

fruit = oneMoreFruit;

console.log(fruit == oneMoreFruit);
console.log(fruit === oneMoreFruit);

// Static Methods

const target = {p:1, a:2};
const source = {a:3, b:5};

const returnedObj = Object.assign(target, source);
console.log(returnedObj);

const obj = {name: "Dakin"};
const obj2 = Object.assign({}, obj);
console.log(obj2);
console.log(obj === obj2);

const obj3 = {
  a: 1,
  b: {c: 2}
}

const obj4 = Object.assign({}, obj3);
console.log(obj4)
obj4.b.c = 3;

obj4.a = 100;
console.log(obj4.a);
console.log(obj3.a);


console.log(obj4.b.c);
console.log(obj3.b.c);

const obj5 = structuredClone(obj3);

obj5.a = 300;
obj5.b.c = 30;

console.log(obj5.a);
console.log(obj3.a);


console.log(obj5.b.c);
console.log(obj3.b.c);


//entries
const myObj = {
  a: "tapas",
  b: 32,
}

//55:08