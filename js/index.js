// Prevent us from attempting to use variables
// that are not declared
"use strict"

/*

//Looping through an array                  
const array = [1, 2, 3, 4, 5];                         
for (let i = 0; i < array.length; i++) {            
    console.log(array[i]);
}

//Output
1
2
3
4
5


//Looping through an array with for...of
const array2 = [2, 2, 4, 4, 6];

for (const value of array2) {
    console.log(value);
}

//Output
2
2
4
4
6

//Looping an array with forEach
const array3 = [3, 2, 4, 5, 1];

array3.forEach(value => {
    console.log(value);
});

//Output 
3
2
4
5
1

//Looping and assigning new values
const array5 = [1, 2, 3, 4, 5];

for (const value of array5) {
  value = value * 2; // This line caused an error since 'value' is a constant
}
console.log(array5);


const array6 = [1, 2, 3, 4, 5];

array6.forEach((value, index, arr) => {
    arr[index] = value * 2;
});
console.log(array6); 

// Output: [2, 4, 6, 8, 10]
//forEach allows the coder to reassign valiues directly within the array while for...of 
//throws an error.

*/

