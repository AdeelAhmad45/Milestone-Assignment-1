/**14. Calculate the final order price
A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of
objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on
the unit price and quantity of each item. */

const calculateTotalCost = (cart) => {
    let totalCost = 0;
    cart.forEach((item) => {
      totalCost += item.unitPrice * item.quantity;
    });
    return totalCost;
  };
  const cart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 5, quantity: 4 },
    { unitPrice: 2, quantity: 10 },
  ];
  
  const totalCost = calculateTotalCost(cart);
  console.log(totalCost); 
  
  /**Output: 60 */ 