//Object literals

const blogs = [
  {title: 'why mac & cheese rules', likes: 30},
  {title: '10 things to make with marmite', likes: 50}
];

// console.log(blogs);

let user = {
  name: "crystal",
  age: 30,
  email: 'Crystal@gmal.co.uk',
  location: 'berlin',
  blog: [{title: 'why mac & cheese rules', likes: 30},
         {title: '10 things to make with marmite', likes: 50}
        ],
  login(){
    console.log('the user loggged in');
  },
  logout(){
    console.log('the user logged out');
  },
  logBlogs(){
    // for(let i = 0; i < this.blog.length; i++){
    //     console.log(this.blog[i]);
    // }
    console.log('this user has written the following blogs');
    this.blog.forEach((element, index, array) => console.log(index, array[index].title, array[index].likes));
  }
};
// user.login();
// user.logout();
user.logBlogs();
// console.log(this);

const name = 'mario';
let upper = name.toUpperCase();
// console.log(upper);

/*
console.log(user);
console.log(user.name);


// user.age = 35;
console.log(user.age);

// const key = 'location';

// console.log(user[key]); // user['location']
console.log(user['location']);
user["name"] = "chun-li";
console.log(user["name"]);

console.log(typeof user);
*/

//Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);


const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random numbers

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100));

//primitive values

/*
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);
*/

// reference values

const userOne = {name: 'ryu', age: 30};
const userTwo = userOne;

console.log (userOne, userTwo);

userOne.name = "chun-li";
console.log (userOne, userTwo);
