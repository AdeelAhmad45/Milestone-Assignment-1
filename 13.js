/**13. Bill splitter
A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of
people sharing it. They require a function that takes in the cost of each dish and the number of people sharing
it and returns an object that contains the total bill and the bill to be paid by each person in the group. */

function calculateBill(costPerDish, numOfPeople) {
    const totalBill = costPerDish * numOfPeople;
    const billPerPerson = totalBill / numOfPeople;
  
    return {
      totalBill,
      billPerPerson
    };
  }
  let costPerDish = 100;
  let numOfPeople = 3; 
  let totalCost = calculateBill(costPerDish, numOfPeople);
  console.log(totalCost); 
  
  /** Output: { totalBill: 300, billPerPerson: 100 } */