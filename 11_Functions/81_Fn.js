// Without functions — repeated logic

// let score1 = 85;
// let result1 = score1 >= 70 ? "pass" : "fail";
// console.log(result1);

// let score2 = 45;
// let result2 = score2 >= 70 ? "pass" : "fail";
// console.log(result2);

// Define
function getResult(score){
    return score >= 70 ? "pass" : "fail";
}

// Calling
console.log(getResult(85)); // Pass
console.log(getResult(45)); // Fail