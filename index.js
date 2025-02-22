
    // 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

// a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
//Do not use numbers to reference the last element, find it programmatically.
//ages[7] - ages[0] is not allowed!
let ages = [3, 9, 23, 64, 2, 8, 28, 93]; 
console.log("Ages: ", ages); 
let lastElement = ages[ages.length - 1] - ages[0]; 
console.log("Last Element: ", lastElement);

//last element minus the first element ages.length - 1 will give you the last element in the array
//ages[ages.length - 1] - ages[0] will give you the difference between the last and first element. 0 based indexing

// b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(100); 
console.log("Ages: ", ages);
let lastElement2 = ages[ages.length - 1] - ages[0];
console.log("Last Element: ", lastElement2);

//push adds a new element to the end of the array, now it has 9 elements. repeat the process above
//I get the answer 97, which is the difference between the last and first element in the array

// c. Use a loop to iterate through the array and calculate the average age.
let sumOfAges = 0; //haven't added anything yet
for(let i=0; i<ages.length; i++) {
//console.log("test");
sumOfAges += ages[i]; //+= means for each iteration
console.log("Index: ",i, "SumOfAges: ",sumOfAges);
}
console.log("Total Sum: ", sumOfAges);
let averageAge = sumOfAges / ages.length;
console.log("Average Age: ", averageAge);


//+= means for each iteration

     // 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

//   2a.   Use a loop to iterate through the array and calculate the average number of letters per name.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log("Names: ", names);
let totalLetters = 0;   //initialize totalLetters to 0          
for(let i=0; i<names.length; i++) {
    totalLetters += names[i].length;
console.log("Index: ",i, "TotalLetters: ",totalLetters);
}
let averageLetters = totalLetters / names.length;
console.log("Average Letters: ", averageLetters);

//   2b.   Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let concatenatedNames = ""; //initialize concatenatedNames to an empty string
for(let i=0; i<names.length; i++) {
concatenatedNames= concatenatedNames.concat(names[i] + " ");
console.log("Concatenated Names: ", concatenatedNames);
}

    // 3. How do you access the last element of any array?
   console.log("Last element of the array:", ages[ages.length - 1]);


    // 4. How do you access the first element of any array?
    console.log("First element: ",ages[0]); //0 based indexing, first element is at index 0

    // 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:

//let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//let nameLengths = [5, 3, 4];             // create a new array

let nameLengths = []; //initialize nameLengths to an empty array
for(let i=0; i<names.length; i++) {
    nameLengths.push(names[i].length);
    console.log("Name Lengths: ", nameLengths);
}
         // 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let charactersTotal = [];
for(let i=0; i<nameLengths.length; i++) {
    charactersTotal += nameLengths[i];
    console.log("Characters Total: ", charactersTotal);
}

          // 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

function concatWords(word, n) { //function with two parameters
    console.log("Word par: ", word, "n par: ",n); //print the parameters
    let concat = word.repeat(n); //repeat the word n times
    console.log(concat); //print the result
} console.log("Hello", 3); //call the function with "Hello" and 3

          // 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function fullName(firstName, lastName) {
    let fullName= firstName + " " + lastName;
    console.log(fullName);
} console.log("Lynn", "Schweer");

         // 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let numbers1 = [100,200,300,400];
let numbers2 = [500,600,700,800];
function sumNumbersArray(array) {
    let total = 0; //initialize total to 0
    for(let i=0; i<array.length; i++) { //iterate through the array
    total += array[i]; //add each element to the total
        console.log("Total: ", total); //`Total: ${total}`
    }
    if(total > 100) {
        console.log("True"); //if the total is greater than 100
    } else {
        console.log("False"); //if the total is not greater than 100
    }
}
sumNumbersArray(numbers1); // Call the function with numbers1
sumNumbersArray(numbers2); // Call the function with numbers2
        // 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

function averageNumbersArray(array) {
    let total = 0;
    for(let i=0; i<array.length; i++) {
    total += array[i];
        console.log("Total: ", total);
    }
    let average = total / array.length;
    console.log("Average: ", average);
}
averageNumbersArray(numbers1); // Call the function with numbers1
averageNumbersArray(numbers2); // Call the function with numbers2

        // 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let numbers3 = [1,2,3];
let numbers4 = [5,6,7];

function twoAverages(array1, array2) {
    console.log("Parameters: ", array1, array2);
    let total1 = 0;
    let total2 = 0;
    for(const number of array1) {
        total1 += number; //add something to it
        console.log("Current Number loop1: ",number, "Total1: ",total1);
    }
        for (const number of array2) {
            total2 += number; //add something to it
            console.log("Current Number loop2: ", number, "Total2: ", total2); 
        }

    let average1 = total1 / array1.length;
    let average2 = total2 / array2.length;
    console.log("Average1: ", average1, "Average2: ", average2);

    if(average1 > average2) {
        console.log("True");
        return true;
    } else if(average1 < average2) {
        console.log("False");
        return false;
    }
}

console.log(twoAverages(numbers3, numbers4)); // Call the function with numbers3 and numbers4



         // 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
    console.log("Parameters: ",isHotOutside,moneyInPocket);
   let buyDrink = isHotOutside===true && moneyInPocket > 10.50;
   console.log("Buy a drink?", buyDrink); 
   return buyDrink;
}
willBuyDrink(true, 15); // Call the function with true and 15



         // 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

// Description: This function takes an array of numbers as input and calculates the sum of all the even numbers in the array.
// Why I created it: Sometimes we need to quickly sum all even numbers from a list of values, and this function helps automate that process.

function sumEvenNumbers(arr) {
    let sum = 0; // Initialize the sum of even numbers to 0
    
    // Loop through each number in the array.
    for (const num of arr) {
        // Check if the number is even (i.e., divisible by 2).
        if (num % 2 === 0) {
            sum += num; // Add the even number to the sum.
        }
    }
    return sum;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Sum of even numbers:", sumEvenNumbers(numbers)); // Output will be 30 (2 + 4 + 6 + 8 + 10)
