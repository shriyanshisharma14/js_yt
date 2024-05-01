//Conversion to numbers
/*
let score=90;
console.log(typeof score); //=>number
//console.log(typeof (score)); //same as upper line
let valueInNumber=Number(score)
console.log(typeof valueInNumber); //=> number
console.log(valueInNumber); //=> 90
*/

/*
let score="90";
console.log(typeof score); //=>string
let valueInNumber=Number(score)
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //=>90 
*/

/*
let score="90abc";//we can get any kind of input when we fetch data from frontend or any form so converting it to number will show its type as number but actually contain NaN
console.log(typeof score);//=>string
let valueInNumber=Number(score)
console.log(typeof valueInNumber);//number
console.log(valueInNumber); //=> NaN (Not a number)
*/

/*
let score=null;
console.log(typeof score);//=>object
let valueInNumber=Number(score)
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//=>0
*/

/*
let score=undefined;
console.log(typeof score);//=>undefined
let valueInNumber=Number(score)
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//=>NaN
*/

/*
let score=true;
console.log(typeof score);//=>boolean
let valueInNumber=Number(score)
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//=> 1
*/

/*
let score=false;
console.log(typeof score);//=>boolean
let valueInNumber=Number(score)
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//=> 0
*/

//Conversion to boolean
/*
let isLoggedIn=1;
console.log(typeof isLoggedIn);//=>number
let valueInBool=Boolean(isLoggedIn)
console.log(typeof valueInBool);//boolean
console.log(valueInBool);//=>true
*/

/*
let isLoggedIn="abc";
console.log(typeof isLoggedIn);//=>string
let valueInBool=Boolean(isLoggedIn)
console.log(typeof valueInBool);//boolean
console.log(valueInBool);//=>true
*/

/*
let isLoggedIn="";
console.log(typeof isLoggedIn);//=>string
let valueInBool=Boolean(isLoggedIn)
console.log(typeof valueInBool);//boolean
console.log(valueInBool);//=>false
*/

//Conversion to string
/* 
let num=33
console.log(typeof num);//=>number
let valueInString=String(num);
console.log(typeof valueInString); //string
console.log(valueInString);//=>"33"
*/

/*
let value=7
let negativeValue=-value;
console.log(negativeValue); //=> -7
//basic arithmetic operations
//console.log(2+2)
//console.log(2-2)
//console.log(2*2)
//console.log(2**3)
//console.log(2/3)
//console.log(2%3)
*/

/*
//string concatenation
let str1="hello"
let str2=" world"
let str3=str1 + str2
console.log(str3);//=> hello world
*/

/*
console.log(1+"2"); //=> 12
console.log("1"+2); //=>12
console.log("1"+2+3);//=>123
console.log(1+2+"3");//=>33
console.log(2+3*2%7); //not readable, use parenthesis =>8
console.log(true);//=>true
console.log(+true)//=>1 ('+' changes to numeric value)
console.log(+"")//=>0
*/
/*
let counter=100
counter++;
console.log(counter);//=>101

let counter=100
++counter;
console.log(counter); //=>101
*/

//link to read type conversion
//https://tc39.es/ecma262/#sec-abstract-operations
