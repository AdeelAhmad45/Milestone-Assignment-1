/*Oue8)Inverted right-angled triangle pattern with asterisks
Write a program that takes an integeqr input i and prints an inverted right-angled triangle pattern of asterisks
with i rows.*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (i) => {
  for (let row = i; row >= 1; row--) {
    let pattern = '';
    for (let col = 1; col <= row; col++) {
      pattern += '*';
    }
    console.log(pattern);
  }
  rl.close();
});

/** Output:
Enter a number: 6
******
*****
****
***
**
*
_________________ */
