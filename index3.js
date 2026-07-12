//Objects
//Key-value pairs in curly braces
const myObj = {name: "John"};
const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["Eat", "Sleep", "Code"],
  beverage: {
    morning: "Coffee",
    afternoon: "Iced Tea"
  },
  action: function(){
    return `Time for ${this.beverage.morning}`;
  }
};
// console.log(anotherObj["beverage"]["morning"]);
console.log(anotherObj.action());

const vehicle  = {
  wheels: 4,
  engine: function(){
    return "Vroooom!";
  }
}

// I am using the generic vehicle object as a constructor for the truck object
/*
const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels); //Inheritance
console.log(truck.engine());
*/
const car = Object.create(vehicle);
car.doors = 4;
car.engine = function(){
  return "Whoooosh!";
}
console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function(){
  return "Shhhhh......";
}

console.log(tesla.engine());

const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham"
};

// delete band.drums;
// console.log(band.hasOwnProperty("drums")) //false
console.log(Object.keys(band));
console.log(Object.values(band));

for(let job in band){
  console.log(band[job] + "  - " +  job);
}

//destructuring objects
//myVariable, myBass is an alias syntax = {keyName: aliasName}
const {guitar: myVariable, bass: myBass} = band;
console.log(myVariable);
console.log(myBass);

const {vocals, guitar, bass, drums}  = band;
console.log(guitar);
console.log(vocals);


function sings({vocals}){
  return `${vocals} sings!`
}
console.log(sings(band));