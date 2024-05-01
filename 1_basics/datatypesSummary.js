/* Datatypes are classified into 2 categories : 
   On the basis of how data is stored in memory and how to retrieve it :
   1.Primitive 2.Non-Primitive (a.k.a derived datatype / reference datatype) 
*/
//Primitive: 7 types => string,number,bigint,boolean,null,undefined,symbol
//Non-Primitive: 3 types=> array,object,functions

/* Note: JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.*/

/*
//primitive examples
const temp=null; //doesn't mean 0 just means null
let userEmail; // is equal to (let userEmail=undefined ;) //undefined
const id=Symbol('123')
const id2=Symbol('123')
console.log(id===id2) //false (this is the function of symbol even if we pass same value then also they are different/unique)
const bigNo=12345678901234567890n; //use 'n' to convert to bigint
*/

/*
Non-Primitive examples


const heroes=["Ironman","Bheem","Ben"] //array
let myObj=  
{
   name: "Shri",
   age: 20
} //object

const myFunc= function(){
  // console.log("hello");
} //function

console.log(typeof heroes); //object
console.log(typeof myObj); //object
console.log(typeof myFunc); //function (but this is function object only if we go into details)
/*Note: Every 3 non-primitive datatypes are of object type*/

//console.log(typeof id); //symbol
 
//*******************************************************************************//

/* Memory allocation */
//Stack -> Primitive ......Heap-> Non-Primitive
/*stack (once copy of name is given to name2 so any change in name2 doesnt affect name)
Thus it is {call by value} 

let name="Riyansh"
let name2=name;
name2="Shruti"
console.log(name);
console.log(name2);
*/

/* Heap (here copy isn't given but reference is passed) */
let user1 ={
   email:"abc@gmail.com",
   upi:"123@sbi"
}
let user2=user1
user2.email="def@gmail.com"

console.log(user1.email)
console.log(user2.email);