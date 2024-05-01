const accountId=7890
let accountEmail="Shri@gmail.com"
var accountPassword="1234"
accountCity="Bangalore" //can define variable like this but not a good practice 
let accountState; //-> undefined (data)

// accountId=4
accountEmail="Shriyanshi@gmail.com"
accountPassword="1111"
accountCity="Mumbai"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/* Prefer not to use var 
   because of issues in block and functional scope
*/