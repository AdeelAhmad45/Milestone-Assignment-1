/**.10. Correct a bug
You are working on an e-commerce website where customers can add items to their cart. The cart stores the
quantity of each item that the customer wants to purchase in an array of numbers. However, the website is
currently experiencing a bug where the quantity of each item is being recorded incorrectly by reducing it to
half. As a result, you need to write a JavaScript function that can double the quantity of each item in the cart
array to correct the bug */



/* To correct the bug in the e-commerce website, you can write a JavaScript function that takes 
 in the cart array as a parameter and doubles the quantity of each item. Here's an example implementation:*/

 function fixCartBug(cart) {
    for (let i = 0; i < cart.length; i++) {
      cart[i] *= 2; // double the quantity of each item
    }
  }
  
  /**In the above code, the fixCartBug function loops through*/
  
  const cart = [2, 4, 6, 8, 9]; // cart array with incorrect quantities
  fixCartBug(cart); // double quantities to fix bug
  console.log(cart); 
  
  /* Output: [4, 8, 12, 16, 18] */