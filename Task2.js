// 1. Display Alert in JavaScript

// {
//     alert("Aniruddh Godhani")
// }

// // 2. Display Confirmation box using JavaScript

// {
//     var result = confirm("Butterfly... Butterfly...")

//     if (result == true) {
//       alert("Where Are you Going... Where Are you Going... ")
//     } 

//     else {
//       alert("Out on Gardan... Out on Gardan...")
//     }
//   }

//   // 3. Display Prompt box using JavaScript

//   {
//   function show() {

//   var userInput = prompt("Please enter your name");

//     if (userInput !== null) {
//       alert("Hello, " + userInput + "!")
//     } 
//   }

//   show() 
// }

// 13. Retrieve Today’s Date in JavaScript

{
    function date() {
        let now = new Date()

        console.log(`Toaday is`, now)
    }
    date()
}

// 14. Reverse array javascript

let array = [22, 24, 26, 30, 25, 20]
console.log("Original Array:", array)

array.reverse()
console.log("Reverse Array:" , array);
