/**12. Calculate rental cost
A car rental company needs to calculate the cost of a rental based on the numbqr of days rented and the type
of car. They require a function that takes in the number of days rented and car type and returns the rental cost.
The total cost would be the rental cost multiplied by the number of days rented.
The rental costs are
1) Economy = Rs. 4000 /- per day
2) Midsize = Rs. 10,000 /- per day
3) Luxury = Rs. 20,000 /- per day. */

function calculateRentalCost(numDays, carType) {
    let rentalCost = 0;
    
    if (carType === 'Economy') {
      rentalCost = 4000;
    } else if (carType === 'Midsize') {
      rentalCost = 10000;
    } else if (carType === 'Luxury') {
      rentalCost = 20000;
    }
    
    return rentalCost * numDays;
  }
  
  let numDays = 5;
  let carType = 'Economy';
  let totalCost = calculateRentalCost(numDays, carType);
  console.log(totalCost); 
  
  /*Output: 20000*/