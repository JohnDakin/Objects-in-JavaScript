const myObj = {
  a: "tapas",
  b: 32,
};

// console.log(myObj);

const myArray = Object.entries(myObj);
console.log(myArray.flat());


const array = [23, 45, "John", 'Home'];

const myObject = array.entries();

// console.log(myObject);

// myObject.forEach(element => {
//   console.log(element);
// });

const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

const objectEntries = Object.fromEntries(entries);
console.log(objectEntries);

const me = {
  f_name: "John",
  l_name: "Dakin",
  age: 22,
  my_course: "Computer Science",
  message(){
    return `Hi i'm ${f_name} ${l_name} and i love ${this.my_course}`;
  },
  family: {
    father: 'Romlus',
    mother: 'Merab',
    brother: ['Ian', 'Junior', 'Hope'],
    seeblings: 3
  }
}

const {f_name, l_name, family: {brother}, message} = me;

console.log(f_name);
console.log(l_name);
console.log(brother);
console.log(brother.length);
console.log(message.call(me))

// Object.freeze(me);
Object.seal(me);
Object.seal(me.family);
// Object.freeze(me.family);

// console.log(freezing);

me.family.name = "Ochieng";
me.test = true;
me.l_name = "Omondi";

delete me.age;
// delete freezing.age;


console.log(me);
// console.log(freezing);



/*
const array1 = Object.entries(me);
console.log(array1.flat());

const obj = Object.fromEntries(array1);
console.log(obj);

const json = JSON.stringify(obj);
console.log(json)


console.log(me);
*/