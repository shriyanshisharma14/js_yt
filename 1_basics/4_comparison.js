/*
Basic Comparisons
console.log(2>1) //=>true
console.log(2<1) //=>false
console.log(2>=1) //=>true
console.log(2<=1) //=>false
console.log(2==1) //=>false
console.log(2!=1) //=>true
*/

//console.log("2">1) //=>true
//console.log("02">1) //=>true

/*
console.log(null>0) //=>false
console.log(null==0) //=>false
console.log(null<=0) //=>true
 Note: Equality check (==) and comparisons <,>,<=,>= work differently.
       Comparisons convert null to a number, treating it as 0 . That's why output are like such.
*/

/*
console.log(undefined>0) //=>false
console.log(undefined==0) //=>false
console.log(undefined<=0) //=>false
Tip: we get false with each comparison in case of undefined
*/

//strict equality (checks datatypes along with value) (doesnt convert any datatype to other)
console.log(2==="2"); //=>false
