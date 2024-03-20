// // 1. Display Alert in JavaScript

// {
//     alert("Aniruddh Godhani")
// }

// // 2. Display Confirmation box using JavaScript

// {
//     var result = confirm("Butterfly... Butterfly...")

//     if (result == true) {
//         alert("Where Are you Going... Where Are you Going... ")
//     }

//     else {
//         alert("Out on Gardan... Out on Gardan...")
//     }
// }

// // 3. Display Prompt box using JavaScript

// {
//     function show() {

//         var userInput = prompt("Please enter your name");

//         if (userInput !== null) {
//             alert("Hello, " + userInput + "!")
//         }
//     }

//     show()
// }

// // 13. Retrieve Today’s Date in JavaScript

// {
//     function date() {
//         let now = new Date()

//         console.log(`Today is`, now)
//     }
//     date()
// }

// // 14. Reverse array javascript

// {
//     let array = [22, 24, 26, 30, 25, 20]
//     console.log("Original Array:", array)

//     array.reverse()
//     console.log("Reverse Array:", array)
// }

// // 15. JavaScript concate or merge two Arrays

// {
//     let arry11 = ["Anni", "Yash", "Kartik", "Gopal", "Vijay", "Jontes"]
//     let arry22 = ["Aesha", "Ekta", "Nidhi", "Mansi", "Monika"]
//     let arry44 = arry11.concat(arry22)
//     console.log(arry44)
// }

// // 16. Reverse String in JavaScript

// {
//     function reverseString(str) {
//         return str.split('').reverse().join('')
//     }

//     console.log(reverseString("Aniruddh Godhani"))
// }

// // 18. if else statement in JavaScript

// {
//     var a = 22

//     if (a % 2 == 0) {
//         document.write("A Num Is Even")
//     }
//     else {
//         document.write("A Num Is Odd")
//     }
// }

// // 19. Insert element in array javascript

// {
//     const Name = ["Anni", "Yash", "Kartik", "Vijay", "Gopal"]

//     document.getElementById("demo").innerHTML = Name.push("Chirag", "Vishal")

//     console.log(Name)
// }

// // 21. getElementsByClassName() method in JavaScript

// {
//     document.getElementById('box-1').innerHTML = "Hallo Good Morning EveryOne..."
//     const model = document.getElementsByClassName('box')
//     console.log(model)
// }

// // 22. getElementByTagName() method in JavaScript

// {
//     const element = document.getElementsByTagName('h1')
//     function addText() {
//         for (let i = 0; i < element.length; i++) {
//             element[i].innerHTML = "ANIRUDDH GODHANI..."
//             element[i].style.color = "red"
//         }
//     }
//     addText()
// }

// // 45. Display Message every 3 second using Javascript

// {
//     function time() {
//         let datetime = new Date().toLocaleTimeString()
//         console.log(`Current Time is ${datetime}`)
//     }

//     time()
//     setInterval(time, 3000)
// }

// // 44. Change the page colour in Every 5 sec in JavaScript

// {
//     function changeColor() {

//         var randomColor = '#' + Math.floor(Math.random() * 12345678).toString(16)

//         document.body.style.backgroundColor = randomColor
//     }

//     setInterval(changeColor, 1000)
// }

// {
//     function changeColor1() {
//         var randomColor = '#' + Math.floor(Math.random() * 22242628).toString(18)

//         document.body.style.backgroundColor = randomColor
//     }
//     setInterval(changeColor1, 5000)
// }

// // 43. Change background colour of div javascript

// {
//     function changeColor3() {
//         var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
//         document.getElementById('myDiv').style.backgroundColor = randomColor
//     }
//     setInterval(changeColor3, 1000)
// }

// // 38. Convert Celsius Value to Farenheit Value in JavaScript

// {
//     function Celsius(v) {
//         return (v * 9 / 5) + 32
//     }

//     let result4 = Celsius(22)
//     console.log(result4)
// }

// // 39. javascript get today’s date

// {
//     let Date9 = new Date()
//     console.log(Date9)
// }


// // 54. Break and Continue in JavaScript

// {
//     for (let counter = 0; counter <= 100; counter++) {
//         if (counter == 44) {
//             break
//         }
//         console.log(counter)
//     }
// }

// {
//     let u = 1

//     while (u <= 100) {
//         if (u % 5 === 0) {
//             u++
//             continue
//         }

//         document.write(u + " ")
//         u++
//     }
// }

// // 53. Reload page JavaScript

// {
//     function reloadPage() {
//         location.reload()
//     }
// }

// // 55. JavaScript Conditional Operator

// {
//     let aggriment = 0
//     let age = aggriment == 0 ? "Login" : "Logout"
//     console.log(age)
// }

// // 56. Example of this KeyWord in JavaScript

// {
//     const anni = {
//         name: 'Ekta',
//         age: 22,
//         city: 'Surat',
//         country: 'India',
//         ani() {

//             console.log('Hallo My Name Is', this.name, 'I Am', this.age, 'Years Old And I am Live In', this.city + ',', this.country)
//         }
//     }
//     anni.ani()
// }

// // 62. How to sort array value using sort() method in JavaScript

// {
//     var word = ["Nidhi", "Gopal", "Yash", "Vijay", "Shradha", "Anni", "Hari", "Trusha", "Chirag", "Pinal", "Kartik", "Ekta", "Jontis", "Dhruvil", "Hasti", "Aesha", "Monika", "Riya"]

//     word.sort(function (a, v) {
//         var LetterA = a.charAt(0)
//         var LetterV = v.charAt(0)

//         if (LetterA < LetterV) {
//             return -1
//         }
//     })

//     console.log(word)
// }

// // 46. JavaScript get max value in array of objects

// {
//     const arrayOfObj = [
//         { value: 101 },
//         { value: 20 },
//         { value: 60 },
//         { value: 87 },
//         { value: 220 },
//         { value: 30 },
//         { value: 8 },
//         { value: 50 }
//     ];

//     const max = Math.max(...arrayOfObj.map(obj => obj.value))
//     console.log(max)
// }

// // 48. Find index of Largest value in An Array in JavaScript
// {
//     function findIndexOfLargest(arr) {
//         if (arr.length === 0) {
//             return -1
//         }

//         let maxValue = arr[0]
//         for (let i = 1; i < arr.length; i++) {
//             if (arr[i] > maxValue) {
//                 maxValue = arr[i]
//             }
//         }

//         return arr.indexOf(maxValue)
//     }

//     const array = [10, 5, 20, 8, 15, 22]
//     const largestIndex = findIndexOfLargest(array)
//     console.log("Index of the largest value:", largestIndex)
// }

// // 51. JavaScript Check an object is an array or not

// {
//     const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     const ani = ['Anni', 'Aesha', 'Yash', 'Vijay', 'Nidhi', 'Kartik', 'Ekta']
//     const anni = { name: 'Ekta', age: 22, city: 'Surat', country: 'India' }
//     console.log(Array.isArray(array))
//     console.log(Array.isArray(ani))
//     console.log(Array.isArray(anni))
// }

// // 47. Sort and Reverse an array of Objects using JavaScript

// {
//     const arrayOfObjects = [
//         { Name: 'Yash', age: 24 },
//         { Name: 'Ani', age: 22 },
//         { Name: 'Kartik', age: 25 },
//         { Name: 'Aesha', age: 23 },
//         { Name: 'Ekta', age: 22 },
//         { Name: 'Gopal', age: 26 },
//         { Name: 'Nidhi', age: 21 },
//         { Name: 'Monika', age: 20 }
//     ]

//     arrayOfObjects.sort((a, b) => a.age - b.age)

//     console.log("Sorted array:", arrayOfObjects)
// }

// {
//     const arrayOfObj = [
//         { Name: 'Yash', age: 24 },
//         { Name: 'Ani', age: 22 },
//         { Name: 'Kartik', age: 25 },
//         { Name: 'Aesha', age: 23 },
//         { Name: 'Ekta', age: 22 },
//         { Name: 'Gopal', age: 26 },
//         { Name: 'Nidhi', age: 21 },
//         { Name: 'Monika', age: 20 }
//     ]
//     arrayOfObj.reverse()

//     console.log("Reversed array:", arrayOfObj)
// }

// // 6. JavaScript Validation Examples

// {
//     function validateForm() {
//         var username = document.getElementById("username").value
//         if (username == "") {
//             alert("Username must be filled out")
//             return false
//         }
//     }
// }

// // 7. Textbox required validation in javascript

// {
//     function validateForm() {
//         var textboxValue = document.getElementById("textbox").value
//         if (textboxValue.trim() === "") {
//             alert("Textbox must not be empty")
//             return false
//         } else {
//             alert("Textbox value: " + textboxValue)
//         }
//     }
// }

// // 8. Email validation in JavaScript

// {
//     function validateEmail() {
//         var email = document.getElementById("email").value
//         var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//         if (!emailRegex.test(email)) {
//             alert("Invalid email address")
//             return false
//         } else {
//             alert("Valid email address: " + email)
//         }
//     }
// }

// // 9. Letter Validation in JavaScript

// {
//     function validateText() {
//         var text = document.getElementById("text").value;
//         var letterRegex = /^[A-Za-z]+$/;
//         if (!letterRegex.test(text)) {
//             alert("Input must contain only letters");
//             return false;
//         } else {
//             alert("Valid input: " + text);
//         }
//     }
// }

// // 10. Number Validation in JavaScript

// {
//     function validateNumber() {
//         var number = document.getElementById("number").value;
//         var numberRegex = /^[0-9]+$/;
//         if (!numberRegex.test(number)) {
//             alert("Input must contain only numbers");
//             return false;
//         } else {
//             alert("Valid input: " + number);
//         }
//     }
// }

// // 11. Letter and Number Validation in JavaScript

// {
//     function validateText() {
//         var text = document.getElementById("text").value
//         var alphanumericRegex = /^[a-zA-Z0-9]+$/
//         if (!alphanumericRegex.test(text)) {
//             alert("Input must contain only letters and numbers")
//             return false
//         } else {
//             alert("Valid input: " + text)
//         }
//     }
// }

// // 12. IP Address Validation in JavaScript


// // 60. JavaScript Bind Arrays Value into Dropdown list

// {
//     var Values = ["Name", "Anni", "Yash", "Vijay", "Nikunaj", "Aesha", "Ekta", "Nidhi", "Monika"]

//     function bindArrayToDropdown(array) {
//         var dropdown = document.getElementById("dropdown")
//         dropdown.innerHTML = " "
//         for (var i = 0; i < array.length; i++) {
//             var option = document.createElement("option")
//             option.text = array[i]
//             option.value = array[i]
//             dropdown.add(option)
//         }
//     }
//     bindArrayToDropdown(Values)
// }

// // 58. JavaScript Set dropdown value on Button Click

// // 57. JavaScript Validation API

// // 52. Display Table Number in JavaScript

// {
//     var table = document.getElementById("myTable")
//     var caption = document.createElement("caption")
//     caption.textContent = "Table 1"
//     table.appendChild(caption)
// }

// // 41. JavaScript Animation example

// {
//     var id = null
//     function myMove() {
//         var elem = document.getElementById("myAnimation")
//         var pos = 0

//         clearInterval(id)
//         id = setInterval(frame, 20)
//         function frame() {

//             if (pos == 400) {
//                 clearInterval(id)
//             }
//             else {
//                 pos++
//                 elem.style.top = pos + 'px'
//                 // elem.style.left = pos + 'px'
//                 elem.style.right = pos + 'px'
//                 // elem.style.bottom = pos + 'px'
//             }
//         }
//     }
// }

// // 31. Checkbox validation using JavaScript (javascript checkbox
// //      checked)

// {
//     var itemForm = document.getElementById('itemForm');
//     var checkBoxes = itemForm.querySelectorAll('input[type="checkbox"]');
//     document.getElementById('submit').addEventListener('click', getData);

//     function getData() {
//         let selectedColors = []
//         checkBoxes.forEach(item => {
//             if (item.checked) {
//                 selectedColors.push(item.value)
//             }
//         })

//         if (selectedColors.length < 4) {
//             alert("Minimum Four colors you have to pick..")
//         } else {
//             console.log("Selected colors:", selectedColors)
//             alert("Successfully submitted..")
//         }
//     }
// }


// 1, 2, 3, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 18, 19, 21, 22, 31, 38, 39, 41, 43, 44, 45, 46, 47, 48, 51, 52, 53, 54, 55, 56, 60, 62