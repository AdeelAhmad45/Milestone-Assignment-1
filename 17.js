/**15. Calculate the percentage of the discount
A retail store is offering a discount on its products and wants to calculate the percentage of the discount to
show customers how much they can save. Given the original price and the discounted price of a product,
implement an arrow function to calculate the percentage of the discount rounded off to two decimal places.
This function could be useful for the store's marketing team to create promotions and offers that attract
customers. */


// console.log(`The product is discounted by ${discountPercentage}%`);

const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discount = originalPrice - discountedPrice;
    const discountPercentage = (discount / originalPrice) * 100;
    return discountPercentage.toFixed(2);
  };
  
  const originalPrice = 100;
  const discountedPrice = 40;
  const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
  console.log(discountPercentage); 
  
  /* Output: "60.00"*/