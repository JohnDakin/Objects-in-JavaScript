//Object Destructuring

const student = {
  'name': 'John Williamson',
  'age': 9,
  'std': 3,
  'subjects': ['Maths', 'English', 'EVS'],
  'parents': {
    'father': 'Brown Williamson',
    'mother': 'Sophia',
    'email': 'john-parent@abcde.com'
  },
  'address':{
    'street': '65/2, brooklyn road',
    'city': 'Carteron',
    'country': 'New Zealand',
    'zip': 5791
  }
}

const {name, age, meal="bread"} = student;
console.log(name,age, meal);

const {subjects, numberOfSubjects = subjects.length} = student;
console.log(numberOfSubjects);
//aliases
const {std: standard} = student;
console.log(standard);

//Nested object destructuring
const {address: {zip}} = student;

console.log(zip);

//destructuring to the function parameters

function sendEmail({parents: {email}}){
  console.log(`Sent an email to ${email}`);
}

sendEmail(student);


//Destructure a functions return value

const getStudent = ()=>{
  return {
    'name': 'John Williamson',
    'age': 9,
    'std': 3,
    'subjects': ['Maths', 'English', 'EVS'],
    'parents': {
      'father': 'Brown Williamson',
      'mother': 'Sophia',
      'email': 'john-parent@abcde.com'
    },
    'address':{
      'street': '65/2, brooklyn road',
      'city': 'Carteron',
      'country': 'New Zealand',
      'zip': 5791
    }
  }
}

const {name: anotherName, subjects: anotherSubs} = getStudent();

console.log(anotherName, anotherSubs);

//Destructuring within the loop

const students = [
  {
    'name': 'William',
    'grade': 'A'
  },
  {
    'name': 'Tom',
    'grade': 'A+'
  },
  {
    'name': 'Bob',
    'grade': 'B'
  }
];

for(let {name, grade} of students){
  console.log(name, grade);
}

//Optional Chaining
const employee = {
  salary: {
    bonus: 300
  }
};

console.log(employee.department); //undefined

// console.log(employee.department.names); //Error

// const name = employee.department && employee.department.name


const names = employee.department?.names; //does not throw an error ?. returns undefined
console.log(names);