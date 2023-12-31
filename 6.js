/** Oue6) Vowel Counter
We want to count the number of vowels in a person's name. Given a name as input, the program should iterate
through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should be
counted */


function countVowels(name) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    for (let i = 0; i < name.length; i++) {
      if (vowels.includes(name[i].toLowerCase())) {
        vowelCount++;
      }
    }
    return vowelCount;
  }
  
  
  console.log(countVowels('PW Skills')); 
  console.log(countVowels('Hari Nagle')); 
  console.log(countVowels('Indore')); 
  
/**output: 
 * 1
 * 4
 * 3
 * ___________________ */