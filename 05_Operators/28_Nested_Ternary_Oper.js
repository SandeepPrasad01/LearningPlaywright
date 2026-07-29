//Nested Ternary Operator is a conditional operator that allows you to evaluate multiple conditions in a single expression.
//  It is a shorthand way of writing if-else statements and can be used to simplify code.
// Multiple Condition

let age = 26;
//   age > 18 -> he will goa, else not else
// drink > 25  yes, else no 
let is_pramod_enjoy = age > 18 ? (age > 26 ? "Drink" : "No") : false;
console.log(`Can pramod Drink? : ${is_pramod_enjoy}`);