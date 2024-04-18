// Q1
// var arr1 = ["shehroz", "usman", "talha"]
// var arr2 = ["shehroz2", "usman2", "talha2"]
// var arr3 = ["shehroz3", "usman3", "talha3"]
// var multiDi = [arr1, arr2, arr3]

// Q2
// var arr = [0,1,2,3]
// var arr2 = [1,0,1,2]
// var arr3 = [2,1,0,1]
// var arrMultiDi = [arr, arr2, arr3]

// for (var i = 0; i < arrMultiDi.length; i++) {

// for(var j = i ; j <= i ; j++) {
//     document.write( arrMultiDi[j] + "<br>")
// }

// }

//Q3
// for (var i=1; i <= 10; i++){
//     document.write(i + "<br>")
// }

// Q4
// var alphabet = "abcdefghijklmnopqrstuvwxyz";
// var flag = false ;
// var userInput = prompt("Enter a number");
// var userTableLength = prompt("Enter your table length")
// for (var i = 1; i <= alphabet.length; i++) {
//    if (alphabet[i] === userInput.toLowerCase()) {
//     document.write("not a number");
//     flag = true
//     break;
//    }
//    else {
//    flag = false;
        
//     }
// }
// if (!flag){
// for (let i = 1; i <= userTableLength; i++) {
//     document.write(`${userInput} x ${i} = ${userInput*i} <br>`);
    
// }
// }

// Q5
// fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     document.write(`${fruits[i]} </br>`)
// }
// for (var i = 0; i < fruits.length; i++) {
//     document.write(`Element at index ${i} is  ${fruits[i]}</br>`);
// }

// Q6
// document.write(`Counting : `)
// for(var i = 1; i <= 15; i++)   {
//     document.write(`${i}, `);
// }

// document.write(`<hr/><br>`);

// document.write(`Reverse counting : `)
// for(var i = 10; i >= 1; i--)   {
//     document.write(`${i}, `);
// }

// document.write(`<hr/> <br>`);

// document.write(`Even : `);
// for (var i=0; i<=20; i+=2) {
//     document.write(`${i}, `);
// }

// document.write(`<hr/> <br>`);

// document.write(`Odd : `);
// for (var i=1; i<=20; i+=2) {
//     document.write(`${i}, `);
// }

// document.write(`<hr/> <br>`);

// document.write(`Series : `)
// for(var i=2; i<=20; i+=2) {
//     document.write(`${i}k, `);
// }

// document.write(`<hr/> <br>`);

// Q7
// A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userInput = prompt( "Enter a food item to search for: ");
// flag = false;
// for (var i=0; i< A.length ; i++){
//     if (userInput === A[i]){
//         document.write(`${userInput} is <b>available</b> at index ${i}`);
//         flag = true;
//         break;
//     }
// }
// if (!flag){
//     document.write(`${userInput} is not found in the list`);
// }

// Q8
// A = [24, 53, 78, 91, 12];
// B = A[0];
// for(var i=0 ; i< A.length; i++) {
//     document.write( ` ${A[i]}, &nbsp;` );
//     if(B < A[i]){
//         B = A[i];
//     }
// }
// document.write(`<br>The largest number is ${B}`)

// Q9
// A = [24, 53, 78, 91, 12];
// B = A[0];
// for(var i=0 ; i< A.length; i++) {
//     document.write( ` ${A[i]}, &nbsp;` );
//     if(B > A[i]){
//         B = A[i];
//     }
// }
// document.write(`<br>The largest number is ${B}`)

// Q10
// for (var i=5; i <= 100; i+=5) {
//     document.write(i+ ', &nbsp;');
// }