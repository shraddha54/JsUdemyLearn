/*
Syntax of naming a variable
let first;
let first_name;
let firstName :- camel case;
all are ok but u can't write a variable name staring with a symbol or number like:- let 3year = 3 (wrong)
but u can use $ and _ at beginning;;
and also with a reservedjs key word new , function u can't name like this;
VALUES:-
values 2 types 1.object, 2.primitive;
7 types of primitive attribute:
1. Number : a floating type include integers and floating points
2. String : let firstName = 'aloo'; u can write in dbl or sgl quote to makeit a string;
3. boolean : boolean is a true or false values;
4. undefunde : a variable declared but value is not assigned; let child; only no value;
5. NULL : it is an empty value;
6. Symbol : it is used for unique ness i.e u can redeclare a same named variable in symbol but it will be considered as unique;
7. Bigint : To represent bigger size number value it is used;
/*--------------------------------------------------------------------------------------------------------*/
/*js has dynamic type i.e. let val = 3 ; it"ll automatically take val as a number ; problem is not variable,it is dynamic so may be possibilities of bugs;
type of(null) = object, typeof(undefined) = undefined;

operators:
Math: - + * /
assignment operator:- =, --, +=,++;
comparison operator: >, >=, <, <=; arithmatic operator has higher precedency than comparasin operator and comparasion has hogher than assignment operator;;
js has type coerction , and type conversion; conversion is converting one data type to another like:- number to string and boolean etc. and coerction is js converts them by itself;
*/
// console.log('I am ' + 23 + ' yeasr old'); 
// It will convert the number 23 to string it is coerction
// console.log('25' - '5' * '9' / 2) :- this will show the whole result as Number
// ans :- 2.5 in console
// but if console.log('25' + '5' + '9' + 2) ans:- 25592 plus will do string concatenation not oher symbols do concatenation; conversion of string to number by Number() function and number to string by string () function is conversion;
//console.log(Number('jons')) is NaN and typeof(NaN) is number i.e. NaN is a invalid number;
// not operator has higher precidency than and , or operator;
// "use strict"; :- this is the string statement used before any code written ; it helps in giving the restriction that if there is any bugs it will point that out;
//FUNCTION DECLARATION:
// function age(birthYear){
//     return 2024 - birthYear;
// }
// let ans1 = age(2001); console.log(ans1);
// //FUNCTION EXPRESSION:
// const func2 = function (birthYear) {
//     return 2024 - birthYear;
// }
// const ans2 = func2(2001);
// console.log(ans2 , ans1);
//ARROW FUNCTION:
// const calc3 = BirthYear => 2024 - BirthYear;
// const ans4 = calc3(2001);
// console.log(ans4);    here we implicitly returned the value; we haven't explicitly written the return key word;here as one line code after the function so no need of curly braces and return key word as well;
//the pattern is like that :- const container = parameterName => return statement or culry BroadcastChannel;
// const retirementYear = birthYear => {
//     const age = 2024 - birthYear;
//     const retireAge = 65 - age;
//     return retireAge;
// }
// console.log(retirementYear(2001)); as here multi line statement coded in return keyword is used;
// ANOTHER EXAMPLE
// const retiredage = (birthYear , firstName) => {
//     const age = 2024 - birthYear;
//     const retirementYear = 65 - age;
//     return `${firstName} has ${retirementYear} years left to retire`;
// }
// console.log(retiredage(2001 , 'Shraddha')); here retiredage is container and birthyr and fstnm are attributes and next are returnstatementslthe 
// a new data flow example i.e. function called insude another function:
//  const nArr = ['ram' , 'shyam' , 'shambhu'];
// const nArr2 = new Array(199,200,201);
// console.log(nArr);
// console.log(nArr2);
// nArr[0] = 'hari';
// console.log(nArr);
// const len = nArr2.push(300); console.log(nArr2)
//  console.log(len); it will give the legth as op if.e, 4 Here ; as push function returns the length of the array ;
//nArr.unshift('Bhola'); //  unshift function adds the value at the 1st index of the array and returns the length of array like the oush function;
// console.log(nArr);
// console.log(nArr.indexOf('Bhola')); shows the index and it is 0 as Bhola is at front;
// const popped_element = nArr.pop(); console.log(popped_element);console.log(nArr);
// const popped = nArr.shift();console.log(popped);console.log(nArr); both act same as removing the initials of the array and returns the removed element;
/* object: where dot and [] notations are used using . wecan access the objects properties i.e keys:values and also the methods(functions);
using [] ,(it takes string as example in below)we can do the same with an extra advantage of accessing them by any expression also;
*/ 
// THIS IS ALL ABOUT OBJECT
// const ssd = {
//     fullName: 'Shraddha Suman Dash',
//     age: 23,
//     location: 'pipili',
//     calc : function(){
//         this.birthYear = 2024 - this.age;   //here it is amethod(function in object is called as method) using this key word yiu can access the elements in the function this means the element in the near or inside the function the keyword is used;
//         return this.birthYear; 
//     }
// };
// console.log(ssd);
// console.log(ssd.fullName , ssd['age']); //op is shraddha suman dash 22;
// console.log(ssd.calc() ); // 2001; 
// console.log(ssd.birthYear , ssd['birthYear']) //2001 2001
//JAVASCRIPT ENGINE:
/*js engine has CALL STACK and HEAP: where call stack:- the execution of the code occured and in heap objects are stored*/
//compilation:- whole code is converted to machinecode and written to a binary file ehich can be run in any computer; file is compiled and made a file but execution is not immediate; like a downloaded app or .exe in our laptop they are already compiled and we run them as execution;
// interpreter executes source code line by line and oldjs is an interpreter lang so it runs slowly a probllem bt not that much slow;
//"Noe the modern js lang is a mix of compilation and interpretation i.e. called as:- JIT:- Just In Time compilation thi means there is execution immediately after compilation , and not a portable file is generated;"
// 1st: parsing :- where the Abstract Syntax Tree is done;this means screening each line of cide and then parting them as per the key words like function const etc;
//2nd: then COMPILATION which takes AST and converts this to machine code it is JIT compilation
//3rd: then execution;:happens in call stack;
// after compilation the code goes for creation of  global execution concept; and in Execution the code 1st goes for global toplevel code execution i.e. the codes that are not functions stored , js always run in execution context , which is an environment where piece of code is executed and all necessary codes for it are stored;
// each js code han only one global execution context box it may be large acc. to the codes; 
//2. after creation of global execution context the code goes for execution of top level code inside the global execution context; then functions are executed;
//let and const are the block scope and var is control scope; types of scopes:- global scope(variables declared ) , function scope(the things or code inside a func can use that variable inside it only) , block scope(if else wala scope);

// const ageagain = function(byear){
//     const age = 2024 - byear;
//     console.log(` hey! ${fname} you are ${age} years old;`);
//     if(byear >=2003 & byear <= 2010){
//         const str = 'ohaiyo! ssd san ';
//         var smile = true;
//         console.log(`common ${fname} you are only a child of ${age}`);
//     }
//    // console.log(str);// it wont run as it is out of the block scope;
//    console.log(smile);// it will display the result as true because var is a function scope not a block scope as it is declared inside the function(inside the if block but will be considered as it is in the function also)
// }

// const fname = 'ssd';
// ageagain(2001)//it will use the global variable though it is in function scope;
// ageagain(2005)// it will use the global variable though it is inside the block scope;

/*-----------------------------------------------------------------------------------------------------------*/
//HOISTING IN JS
//in hoisting the variables are usable or accesed before it is declared;
//in hoisting if you use var as the declaration type then also hoisting works here as like function i.e. func(abc); call before function expression and declaration can be possible means you express func(abc){}
//after that will work smooth; same goes for var but while printing that var declared elment you will get output as undefined only not the actual answer;
// but let and const variables are not hoisting variables as we cant access the variable before its declaration in let and const;

//TDZ TEMPORAL DEAD ZONE:
// const myName = 'ssd';
// if(myName === 'ssd'){
//     console.log(`ssd is an ${job}`);//it will show an referrence error as job is declared later as a const declared variable it is in the TDZ so we can't access the job as it is declared after;
//     const age = 2024 - 2001;
//     console.log(age);
//     const job = 'engineer';
//     console.log(x);
// }
//this is the work of tdz as it is helpful in avoiding errors,bugs; because the declaration of variables after its call can be a very proned action for bugs;
// console.log(me);//  o/p = undefined
// console.log(job);// o/p = reference error can't access job before initialization
// console.log(role);// o/p = reference error as mentioned above these are the examples of tdz and hoisting
// var me = 'hii';
// const job = 'teach';
// let role = 'play'; // variables declared in var will be in the properties of window but not for let and const
/*-----------------------------------------------------------------------------------------------------*/

//THIS KEY WORD:
//lets say about 4 diff ways a func can be called:

// 1. call the function as a method i.e. function is atteched to an object; when we'l call a method this keyword in it will point to the object;
//this = <object that is calling the method>
// const ssd = {
//     name: 'shraddha',
//     age : 23,
//     location : 'pipili',
//     calcAge : function(){
//         return 2024 - this.age;// here this refers to object ssd i.e. ssd,age === this.age
//     }  
// };
// console.log(ssd.calcAge());

//2. simple function call; this = simply undefined the above example if it is not a method then it won't take this key word.value as it will take this as a global variable but in strivt mide it will work;
//3. arrow function; the arroe func donot get ots own this keyword so din't recomended here;
//4. if it is an event listener : this key word is = <refer to the DOM element the handler is attached to>
// this key word in global is a window object;
// 'use strict';
// console.log(this);//op is a window global key wrod;
// const calcAge = function(Y){
//     console.log(2024 - Y);
//     console.log(this);
// }
// calcAge(2001);

// const calcAgeArrow = (Y) =>{
//     console.log(2024 - Y);
//     console.log(this);
// }
// calcAgeArrow(2000);
