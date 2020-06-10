'use strict';

function multiBracketValidation(input){
  let inputArray = input.split('');
  if(inputArray.length>1){
    let len = inputArray.length;
    for(let i = 0; i<inputArray.length; i++){
      if((input[i]!=='{')&&(inputArray[i]!=='(')&&(inputArray[i]!=='[')&&(inputArray[i]!=='}')&&(inputArray[i]!==')')&&(inputArray[i]!==']')){
        inputArray[i] = 0;
        len--;
      }
    }
    if(inputArray.length){

      if(len%2===0){
        for(let i = 0; i<inputArray.length; i++){            
          if(inputArray[i]==='('){
            inputArray[i] = 0;
            for (let j = 0; j<inputArray.length; j++){
              if(inputArray[j]===')'){
                inputArray[j] = 0;
              }
            }
          }else if(inputArray[i]==='{'){

            inputArray[i] = 0;
            for (let j = 0; j<inputArray.length; j++){   
              if(inputArray[j]==='}'){
                inputArray[j] = 0;
              }
            }
          } else if (inputArray[i]==='['){
            inputArray[i] = 0;
            for (let j = 0; j<inputArray.length; j++){
              if(inputArray[j]===']'){
                inputArray[j] = 0;
              }
            }
          }
        } 
        for(let k = 0; k<inputArray.length; k++){
          if (inputArray[k] !== 0){
            return false;
          }
        }
        return true;
      }else{
        return false;
      }
    }
  } else {
    return false;
  }
}

// let Stack = require('../stacksAndQueues/stacks-and-queues');

// function multiBracketValidation(input){
//   if(input.length>1){
//     let newStack = new Stack();
//     for(let i = 0; i<input.length; i++){
//       if((input[i]==='{')||(input[i]==='(')||(input[i]==='[')||(input[i]==='}')||(input[i]===')')||(input[i]===']')){
//         newStack.push(input[i]);
//       }
//     }
//     if(!newStack.isEmpty()){
//       if(newStack.storage.length%2===0){
//         for(let i = 0; i<newStack.storage.length; i++){

//           if(newStack.storage[i].value==='('){
//             newStack.storage[i].value = 0;
//             for (let j = 0; j<newStack.storage.length-1; j++){
//               if(newStack.storage[j].value===')'){
//                 newStack.storage[j].value = 0;
//               }
//             }
//           }else if(newStack.storage[i].value==='{'){

//             newStack.storage[i].value = 0;
//             for (let j = 0; j<newStack.storage.length-1; j++){
//               if(newStack.storage[j].value==='}'){
//                 newStack.storage[j].value = 0;
//               }
//             }
//           } else if (newStack.storage[i].value==='['){
//             newStack.storage[i].value = 0;
//             for (let j = 0; j<newStack.storage.length-1; j++){
//               if(newStack.storage[j].value===']'){
//                 newStack.storage[j].value = 0;
//               }
//             }
//           }
//         } 
//         for(let k = 0; k<newStack.storage.length; k++){
//           if (newStack.storage[k].value !== 0){
//             return false;
//           }
//         }
//         return true;
//       }else{
//         return false;
//       }
//     }
//     return newStack;
//   } else {
//     return false;
//   }
// }


// function multiBracketValidation(input){
//   var bracketCounter = 0;
//   for (let i = 0; i<input.length; i++){
//     let bracketType = input[i];
//     if(input[i]==='('){
//       bracketType = ')';
//     } else if (input[i]==='{'){
//       bracketType = '}';
//     } else if (input[i] === '['){
//       bracketType = ']';
//     }
//     if((input[i]==='(')||(input[i]==='{')||(input[i]==='{')){
//       bracketCounter ++;
//     } else if (input[i] === bracketType) {
//       bracketCounter --;
//     }
//     if (bracketCounter < 0) return false;
//   }
//   if (bracketCounter>0){
//     return false;
//   }
//   return true;
// }




let case1 = '{}';
let case2 = '{}(){}';
let case3 = '()[[Extra Characters]]';
let case4 = '(){}[[]]';
let case5 = '{}{Code}[Fellows](())';
let case6 = '[({}]';
let case7 = '(](';
let case8 = '{(})'; //check should be false not true
let case9 = '{'; //check undefined?
let case10 = ')'; //check undefined?
let case11 = '[}';

console.log(multiBracketValidation(case1));
console.log(multiBracketValidation(case2));
console.log(multiBracketValidation(case3));
console.log(multiBracketValidation(case4));
console.log(multiBracketValidation(case5));
console.log(multiBracketValidation(case6));
console.log(multiBracketValidation(case7));
console.log(multiBracketValidation(case8));
console.log(multiBracketValidation(case9));
console.log(multiBracketValidation(case10));
console.log(multiBracketValidation(case11));
