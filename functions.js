'use strict';

// 1. isHometown
function isHometown(town){
    //Given a `town`, return `True` if `town` is 'San Francisco'.
    return town === "San Francisco";  
 }



// 2. getFullName
function getFullName(first_name, last_name){
  //Given `first_name` and `last_name`, return a full name.

  return `${first_name} ${last_name}`;
}



// 3. calculateTotal

function calculateTotal(base_price, state, tax=0.05){
    //Return the total price of an item, figuring in state taxes and fees.

   
    const subtotal = base_price * (1 + tax);

    let fee = 0;
    if (state === "CA"){
        fee = 0.03 * subtotal;
    }
    else{
        if (state === "PA"){
        fee = 2;
        }
    
        if (state === "MA"){
            if (base_price <= 100){
                fee = 1;
            }
            else{
            fee = 3;
            }
        }
    } 

    return subtotal + fee;

}
