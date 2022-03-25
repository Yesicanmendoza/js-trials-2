'use strict';

// 1. printIndices
function printIndices(items) {
  // Replace this with your code

  let i = 0;

  for (const item of items) {
    console.log(`${i}. ${item}`);

    i += 1;
  }
}
// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  let result = [];
  for (let i = 0; i < items.length; i = i+2){
    result.push(items[i]);
    
  }
  console.log(result);
}

// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
  const new_items = items.sort((a, b) => a - b);
  console.log(new_items.slice(0,n));
  
}
