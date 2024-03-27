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
js has dynamic type i.e. let val = 3 ; it"ll automatically take val as a number ; problem is not variable is dynamic so may be possibilities of bugs;
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
const ssd = {
    fullName: 'Shraddha Suman Dash',
    age: 23,
    location: 'pipili',
    calc : function(){
        this.birthYear = 2024 - this.age;   //here it is amethod(function in object is called as method) using this key word yiu can access the elements in the function this means the element in the near or inside the function the keyword is used;
        return this.birthYear; 
    }
};
console.log(ssd);
console.log(ssd.fullName , ssd['age']); //op is shraddha suman dash 22;
console.log(ssd.calc() ); // 2001; 
console.log(ssd.birthYear , ssd['birthYear'])
