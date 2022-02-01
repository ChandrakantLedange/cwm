//var, let and const

//var - global scope/ function
// function sayHello(){
//     for(var i = 0; i<5; i++){
//         console.log("inner",i);
//     }
//     console.log("outer",i);
// }

// sayHello();
//---------------------------------
//let - block scope 

// function sayHello(){
//     for(let i = 0; i<5; i++){
//         console.log("inner",i); //0,1,2,3,4
//     }
//     console.log("outer",i); // i is not defined.
// }

// sayHello();

//--------------------------------

//const :  block scope 
//reassign is not allowed
//const is read only

const a = 10;
// a=20; //1.js:30 Uncaught TypeError: Assignment to constant variable.
 console.log(a);

 //---------------------------------

 //object

 const person = {
     name : 'Ganesh',
     walk : function (){
         console.log("walk");
     },
     talk(){
         console.log("talk");
     }
 }

const obj =  person.talk();
console.log(obj);

//----------------------------------------

//this keyword - refers to the current object
const person2 = {
    name:'Mahesh',
    speak(){
        console.log("speak:",this);
    }
}

person2.speak(); // name & speak function

const newPerson = person2.speak;
newPerson(); // we are calling standalone / outof object- will get window object 

//in react by default strict mode activated

//----------------------------------------

//Arrow function
//shorthand of normal function 

//normal function
const square = function(num){
    return num * num;
}

console.log(square(10));

//arrow function
// const newSquare = (num)=>{
//     return num * num;
// }

// console.log(newSquare(20));

//if arrow function return one parameter and one statement
const newSquare = num => num* num;
console.log(newSquare(2));


//------------------------------------
//arrow function with this keyword

const man = {
    walk(){
        setTimeout(() => {
            console.log(this);
        }, 1000);
    }
}

man.walk();

//--------------------------------------
//Array map
//map method returns new array

const colors = ['red','black','pink','orange','white'];
const items = colors.map((color)=>{
    return `<li> ${color} </li>`;
});

console.log(items);

//--------------------------------------
//Object Destructuring 

const addres = {
    street:'maharashtra',
    city:'Nanded',
    country:'India'
};

// const street = addres.street; 
// const city = addres.city;
// const country = addres.country;

const {street,city,country} = addres;
console.log(city);

//if we want to change key as alias

// const {street : st} = addres;
// console.log(st);


//-------------------------------------------------
//spred operator

//array
 const classA = ['A',"B",'C'];
 const classB = ['D',"E",'F'];

//  const combine = classA.concat(classB);

// const combine = [...classA,...classB]
// const combine = [...classA,'G',...classB]

//  console.log(combine);

//object

const stu1 = {name1:'Ganesh'}
const stu2 = {name2:'Mahesh'}

const combineObj = {...stu1,...stu2};
console.log(combineObj);


//--------------------------------------------------------
//class

//suppose if we want repeate method

// const person = {
//     name:'Ganesh',
//     walk(){
//         console.log("walk");
//     }
// }
// const person2 = {
//     name:'Ganesh',
//     walk(){
//         console.log("walk");
//     }
// }

//at this moment we can use class

class Person{
    constructor(name){
        this.name = name; //this refers to the current object
    }

    run(){
        console.log("running");
    }
}

//create class object 

const person1  = new Person('Mahesh');
person1.run();
console.log(person1.name);

//-----------------------------------------------------
//Inheritance

class Parent {
    constructor(name){
        this.name = name;
    }

    pDemo(){
        console.log("pDemo running");
    }
}
class Child extends Parent {
    constructor(name,sname){
       super(name);
       this.sname = sname;
    }

    cDemo(){
        console.log("cDemo running");
    }
}

const ChildObj = new Child('Ganesh','Ledange');
ChildObj.pDemo();
ChildObj.cDemo();
console.log(ChildObj.name);
console.log(ChildObj.sname);
