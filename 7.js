/* Oue7) Remove Duplicates
In an online shopping application, customers can add multiple items to their cart. ;owever, sometimes
customers accidentally add the same item more than once, resulting in duplicate items in their cart. The
duplicate items not only make it difficult for the customer to track the items they want to purchase but also
affect the accuracy of the purchase order.

To solve this problqm, thq application needs to remove duplicate items from the customer's cart. 
The program should take the customer's cart with duplicates as input, and return a new cart without duplicates.
Write a program to solve the problem of duplicate items in the cart by removing duplicates.*/


function removeDuplicates(cart) {
    // new empty cart to store non-duplicate items
    var newCart = [];
  
    // Loop through each item in the original cart
    for (var i = 0; i < cart.length; i++) {
    // If the current item is not already in the new cart, add it
      if (newCart.indexOf(cart[i]) === -1) {
        newCart.push(cart[i]);
      }
    }
  
   
    return newCart;
  }
  
  var cartWithDuplicates = ["Full Stack Development", "Full Stack Development", "Java", "Java", "DSA"];
  var cartWithoutDuplicates = removeDuplicates(cartWithDuplicates);
  console.log(cartWithoutDuplicates);

/*
Output: [ 'Full Stack Development', 'Java', 'DSA' ]
*/
