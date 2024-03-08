// // 1. ACP METHOD 

// // // 1. Alert 
// {
//     alert("Hello Aniruddh")
//     window.alert("this is javascript")
// }

// {
//     let Ani
//     Ani = false

//     alert(Ani ? "Nagative User" : "Positive User")
// }

// {
//     alert("Aniruddh Godhani")
// }

// // 2. Prompt
// {
//     const Message = prompt()
//     document.write(Message)
// }

// {
//     let userName = prompt("Enter Your Name:")

//     if (userName !== null && userName !== "") {
//         alert("Hello, " + userName + "Welcome....")
//     }
//     else {
//         alert("You didn't enter a name.....")
//     }
// }

// {
//     let userName = prompt("Enter Your Name:");

//     alert(userName ? "Hello, " + userName + "Welcome....." : "You didn't enter a name......");

// }

// // 3. Confirm
// {
//     let message = confirm("this is javascript?")

//     document.write(message)
// }

// {
//     let userConfirmation = confirm("Do you want to proceed with the action?")

//     if (userConfirmation) {
//         alert("Action confirmed.....")
//     }
//     else {
//         alert("Action canceled......")
//     }
// }

// {
//     let userConfirmation = confirm("Do you want to proceed with the action?")

//     alert(userConfirmation
//         ? "Action confirmed....."
//         : "Action canceled....."
//     )
// }


// // 2. **************** variable useing var() in javascript *************************
// {
//     var box = "LiveScript"
//     console.log(box)

//     var Names = "food"
//     var names = "Javascript"
//     console.log(Names)

//     var number1 = 15
//     var number2 = 2
//     console.log(number1 ** number2)

//     var box1 = "toys"
//     var box2 = "cloths"
//     var box3 = 45

//     console.log(box1)
//     console.log(box2)
//     console.log(box3)
// }

// /*******New Html Element Add In Though Javascript *********/
// {
//     var newelement = document.createElement("h1")
//     newelement.textContent = "hello world"
//     document.body.appendChild(newelement)

//     var newelement = document.createElement("marquee", Option)
//     newelement.textContent = "Aniruddh Godhani"
//     document.body.appendChild(newelement)

//     var newelement = document.createElement("pre")
//     newelement.textContent = `how are you!
//      hi./kzndcb`
//     document.body.appendChild(newelement)
// }

// // JavaScript is case-sensitive. So y and Y are different variables
// {
//     let y = "hi"
//     let Y = 5

//     console.log(y)
//     console.log(Y)
// }

// {
//     let A = "Anni"
//     let a = 22

//     console.log(A)
//     console.log(a)
// }

// {
//     let K = "Kartik"
//     let k = 24

//     console.log(K)
//     console.log(k)
// }

// /* Declaration let() */

// /* Block-Scope Variables */
// {
//     let box1 = "Truck"
//     box1 = "Bus"
//     console.log(box1)
// }

// {
//     let number5 = 30
//     console.log(number5)
// }

// {
//     let number4 = 40
//     console.log(number4)
// }

// {
//     let number3 = 60
//     console.log(number3)
// }

// /* Declaration const() */
// {
//     const emma1 = "this"
//     console.log(emma1)
// }

// {
//     const emma2 = "that"
//     console.log(emma2)
// }

// /* string with quotes */
// {
//     let x = "wor'ld"
//     let y = 'wor"ld'
//     let z = "wor\"ld"
//     let zz = 'wor\'ld'
//     let zzz = 'hello \n world'
//     let zzzz = "he\tllo"
//     console.log(zzzz)
//     document.write(x + "<br>" + y + "<br>" + z)
//     console.log(y + "<br>")
// }


// // 3. /*****  Array Methods ********/

// // /* Array length properties */
// {
//     let arry = ["option", "car", bus, 41, "Bike", "truck"]
//     console.log(arry.length)
// }

// {
//     let arry1 = ["Anni", "Gopal", "Yash", 1, "Kartik", "Jonties", 22]
//     console.log(arry1.length)
// }

// {
//     let arry2 = ["Nidhhi", "Exta", "Aesha", 22, "Mansi", "Hasti", 24, 567]
//     console.log(arry2.length)
// }

// // /* The join() method also joins all array elements into a string. */
// {
//     let arry1 = ["Anni", "Yash", "Kartik", "Gopal", "Hari"]
//     let arry2 = arry1.join(" + ")
//     console.log(arry2)
// }

// {
//     let arry1 = ["Anni", "Yash", "Kartik", "Gopal", "Hari", "Darshan"]
//     let arry2 = arry1.join(" ")
//     console.log(arry2)
// }

// {
//     let arry1 = ["Anni", "Yash", "Kartik", "Gopal", "Hari", "Jonties", "Chirag", "Janak"]
//     let arry2 = arry1.join(" * ")
//     console.log(arry2)
// }

// // /* Popping in javascript Array */
// {
//     const fruits = ["Banana", "Orange", "Apple", "Mango"]
//     document.getElementById("demo").innerHTML = fruits

//     document.getElementById("demo-1").innerHTML = fruits.pop()

//     console.log(fruits)

//     console.log(fruits.length)
// }

// {
//     let name = ["Anni", "Gopal", "Kartik", "Vijay", "Yash", "Janak"]

//     let Name = name.pop()

//     console.log("Array:", name)
//     console.log("Removed Element:", Name)

// }

// /* Pushing in javascript Array */

// /* The push() method adds a new element to an array (at the end) */
// {
//     const fruits2 = ["Banana", "Orange", "Apple", "Mango"]

//     document.getElementById("demo").innerHTML = fruits2

//     fruits2.push("Kiwi")

//     document.getElementById("demo-1").innerHTML = fruits2

//     console.log(fruits2)
// }

// {
//     const Namee = ["Anni", "Yash", "Kartik", "Vijay", "Gopal"]

//     document.getElementById("demo").innerHTML = Namee.push("Chirag")

//     document.getElementById("demo-1").innerHTML = Namee.length

//     console.log(Namee)
// }

// // /* JavaScript Array shift() */
// {
//     let arry3 = ["option", "car", bus, 41, "Bike", "truck"]
//     let arry4 = arry3.shift()
//     let arry5 = arry3.shift()
//     console.log(arry4)
//     console.log(arry3)
//     console.log(arry5)
// }

// {
//     const Name4 = ["Anni", "Yash", "Kartik", "Vijay", "Gopal", "Chirag"]
//     console.log(Name4)

//     document.getElementById("demo").innerHTML = Name4.shift()
//     console.log(Name4)

//     document.getElementById("demo-1").innerHTML = Name4.shift()
//     console.log(Name4)
// }

// /*  JavaScript Array unshift() */
// {
//     let arryy = ["option", "car", bus, 41, "Bike", "truck"]
//     arryy.unshift("OneAuthor")
//     console.log(arryy)
// }

// // /* The unshift() method returns the new array length */
// {
//     const name5 = ["Yash", "Vijay", "Hari", "Kartik", "Chirag"]
//     document.getElementById("demo").innerHTML = name5.unshift("Anni")
//     console.log(name5)

//     document.getElementById("demo-1").innerHTML = name5.unshift("Gopal")
//     console.log(name5)

// }

// /*  Changing Elements */
// {
//     const fruits6 = ["Banana", "Orange", "Apple", "Mango"]
//     console.log(fruits6)

//     fruits6[9] = "Kiwi"
//     console.log(fruits6)
// }

// {
//     const name6 = ["Anni", "Yash", "Gopal", "Chirag", "Vijay", "Hari"]
//     console.log(name6)

//     name6[7] = "Jontes"
//     console.log(name6)
// }

// /* JavaScript Array add element */
// {
//     const name7 = ["Yash", "Anni", "Gopal", "Kartik", "Vijay", "Hari"]
//     document.getElementById("demo").innerHTML = name7

//     name7[name7.length] = "Varun"
//     document.getElementById("demo-1").innerHTML = name7
//     console.log(name7)
// }

// {
//     const name7 = ["Yash", "Anni", "Gopal", "Kartik", "Vijay", "Hari"]
//     document.getElementById("demo").innerHTML = name7

//     name7[name7.length] = "Varun"
//     name7[name7.length] = "Chirag"
//     document.getElementById("demo-1").innerHTML = name7
//     console.log(name7)
// }

// /* JavaScript Array delete() */
// {
//     let fruits = ["apple", "banana", "orange", "grape", "mango"]
//     fruits.splice(0, 2)
//     console.log("Array:", fruits)
// }

// {
//     let names = ["Anni", "Yash", "Kartik", "Gopal", "Vijay", "Hari"]
//     names.splice(2, 2)
//     console.log("Array:", names)
// }

// /* Merging (Concatenating) Arrays */
// {
//     let arry11 = ["javascript", "c", "c++", "python", "html", "css"]
//     let arry22 = ["option", "car", bus, 41, "Bike", "truck"]
//     let arry33 = ["boostrap", "tailwind", "reactjs", "nextjs"]

//     let arry44 = arry11.concat(arry33, arry22)

//     console.log(arry44)
// }

// {
//     let arry11 = ["Anni", "Yash", "Kartik", "Gopal", "Vijay", "Jontes"]
//     let arry22 = ["Aesha", "Ekta", "Nidhi", "Mansi", "Monika"]
//     let arry44 = arry11.concat(arry22)
//     console.log(arry44)
// }

// /* JavaScript Array splice() */
// {
//     let ar = ["Ani", "Vijay", "Kartik", "Hari", "Varun", "Chirag"]
//     console.log(ar)

//     let arr = ar.splice(3, 5, "Gopal", "Vivek")
//     console.log(arr)
//     console.log(ar)
// }

// {
//     let ar = ["Ani", "Vijay", "Kartik", "Hari", "Varun", "Chirag"]
//     console.log(ar)

//     let arr = ar.splice(2, 2, "Aesha", "Ekta")
//     console.log(arr)
//     console.log(ar)
// }

// /* JavaScript Array slice() */
// {
//     let a1 = [45, 89, 21, 2, 57, 23, 44]
//     console.log(a1)

//     let a2 = a1.slice(0, 5)
//     console.log(a2)
//     console.log(a1)
// }

// {
//     let a1 = ["Anni", "Aesha", "Yash", "Riya", "Kartik", "Nisha"]
//     console.log(a1)

//     let a2 = a1.slice(0, 4)
//     console.log(a2)
//     console.log(a1)
// }

// /*  Array.isArray */
// {
//     console.log(Array.isArray(17))
// }

// {
//     let fruits = ["apple", "banana", "orange"]
//     let numbers = [1, 2, 3, 4]

//     console.log("Is 'fruits' an array?", Array.isArray(fruits))
//     console.log("Is 'numbers' an array?", Array.isArray(numbers))
// }

// /*  javascript Sorting Array */
// {
//     let ary1 = ["Ani", "Kartik", "Vijay", "Hari", "Varun", "Gopal"]
//     console.log(ary1)

//     let ary2 = ary1.sort()
//     console.log(ary2)
// }

// {
//     let numbers = [120, 5, 8, 2, 7, 22, 24, 340]
//     numbers.sort(function (a, b) {
//         return a - b
//     })
//     console.log("Sorted Array:", numbers)
// }

// /*  Reversing array */
// {
//     let arr1 = ["Gopal", "Vijay", "Janak", "Anii", "Yash", "Nimesh", "Chirag"]
//     console.log(arr1)

//     let arr2 = arr1.reverse()
//     console.log(arr2)
// }

// {
//     let ay1 = [189, 45, 56, 128, 10, 150, 22, 8]
//     console.log(ay1)

//     let ay = ay1.reverse()
//     console.log(ay)
// }

// /*  javascript array map() */
// {
//     const number1 = [56, 798, 345, 35]
//     console.log(number1)
//     const number2 = number1.map(myFunction)

//     const number3 = number2.sort((a, b) => a - b)

//     console.log(number2)

//     function myFunction(value) {
//         return value * 2
//     }
// }

// {
//     let numbers = [1, 2, 3, 4, 5];
//     let squaredNumbers = numbers.map(function (number) {
//         return number * number
//     })

//     console.log("Original Array:", numbers)
//     console.log("Squared Numbers Array:", squaredNumbers)
// }

// /* JavaScript Array slice() */
// {
//     let Namee = ["Anni", "Yash", "Aesha", "Riya", "Nidhi", "Ekta", "Kartik"]
//     let slicedNamee = Namee.slice(0, 4)
//     console.log("Array:", Namee)
//     console.log("Namee Array:", slicedNamee)
// }

// {
//     let colors = ["red", "green", "blue", "yellow", "purple"]
//     let selectedColors = colors.slice(0, 3)
//     console.log("Original Colors Array:", colors)
//     console.log("Selected Colors Array:", selectedColors)
// }

// /* Javascript Array flat() */
// {
//     let flatmap = [1, 2, 3, 4]
//     let flatmap1 = flatmap.flatMap((num) => num === 3 ? [1, 2] : 2)
//     console.log(flatmap1)
// }

// {
//     let flatarray = [10, 20, [22, 33, [44, 55, [66, 77]]]]
//     let flatmap2 = flatarray.flat(3)
//     console.log(flatmap2)
// }

// /* javascript array filter() */
// {
//     let filterarry = ["Anni", "Nikunj", "Vijay", "Gopal", "Yash", "Hari", "Janak"]
//     let filterarry2 = filterarry.filter((word) => word.length < 5)
//     console.log(filterarry2)
//     let filterarry3 = filterarry2.sort()
//     console.log(filterarry3)
// }

// {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
//     let evenNumbers = numbers.filter(function (number) {
//         return number % 2 === 0
//     })
//     console.log("Original Numbers Array:", numbers)
//     console.log("Even Numbers Array:", evenNumbers)
// }

// /* javascript array fill method */
// {
//     let fillarray = [46, 89, 101, 122, 45]
//     console.log(fillarray)

//     let fillarray2 = fillarray.fill("None", 4)
//     console.log(fillarray2)
// }

// {
//     let myArray = new Array(22, 33, 44, 55, 66, 77, 88, 99, 100);
//     myArray.fill(2, 3);
//     console.log("Partially Filled Array:", myArray);
// }

// /* javascript array copywithin() method */
// {
//     const alfa = ["A", "B", "C", "D", "E", "F"]
//     const newcopy = alfa.copyWithin(0, 3, 4)
//     console.log(newcopy)

//     console.log([1, 2, 3, 4, 5, 6].copyWithin(0, 2))

//     console.log([1, 2, 3, 4, 5, 6, 7].copyWithin(2, 3, 5))

//     console.log([7, 6, 5, 4, 3, 2, 1].copyWithin(1, 3))
// }

// /* javascript valueof() method */
// {
//     const fruitss = ["Banana", "Orange", "Lemon", "Apple", "Mango", "watermelon", "kiwi", "Olive"]
//     const newfruits = fruitss.valueOf()
//     document.write(newfruits)
// }

// /*  JavaScript Multidimensional Array */
// {
//     const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
//     console.log(data)
// }

// {
//     const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
//     let data1 = data[1][1]
//     console.log(data1)
// }

// /* Add an Element to a Multidimensional Array */
// {
//     let studentsData = [['Riya', 22], ['Mansi', 25]]
//     studentsData.push(['Nidhi', 24])
//     let data = studentsData[1][1]

//     console.log(studentsData)
//     console.log(data)
// }

// {
//     let studentsData = [['Aesha', 24], ['Ekta', 26]]
//     studentsData[1][2] = 'hello'
//     console.log(studentsData)
// }

// /* 4. JavaScript Function and Function Expressions */

// // Basic Function..... 
// {
//     function print() {
//         console.log("Hello Function")
//     }
//     console.log(2 * 22)
// }

// {
//     function printt() { }
//     console.log("Hello Function")
// }

// {
//     function print() {
//         console.log("Hello Aniruddh")
//         console.log(2 / 20)
//     }
//     print()
// }

// /* Function Return */
// {
//     function multiply(a, b) {
//         console.log(a)
//         return a * b
//     }
//     console.log(multiply(10, 10))
// }

// {
//     function add(a, b) {
//         return a + b
//     }
//     console.log(add(22, 45))
//     console.log(add(23, 10))
//     console.log(add(24, 56))
// }

// {
//     function add() {
//         return `WelCome To Functin.....`
//     }
//     console.log(add())
//     console.log(add())
//     console.log(add())
// }

// /* Function Expressions */
// {
//     let x = function (num) { return num * num }
//     console.log(x(10))

//     let y = x(3)
//     console.log(y)
// }

// {
//     let x = function (num) { return num / num }
//     console.log(x(22))

//     let y = x(2)
//     console.log(y)
// }

// {
//     let x = function (num) { return num * num + num - num / num }
//     console.log(x(140))

//     let y = x(23)
//     console.log(y)
// }

// /* Arrow Function With Arguments */
// {
// function pri()
// {
//     return console.log("Hello Aniruddh");
// }
// pri()

// let z = () => console.log("Hello Arrow Function");

// z()

// let a = () => console.log(2 * 7)

// a()
// }

// {
//     let gender = "female"

//     let k =(gender=="male")?() => console.log("You Are Male"):() => console.log("YOU ARE FEMALE")

//     k()
// }

// {
// const addRegular = function (a, b) {
//     return a - b
//   }
//   console.log(addRegular(5, 3))

//   const addArrow = (a, b) => a + b
//   console.log(addArrow(5, 22))
// }

// /* JavaScript CallBack Function */
// {
//     greet('Aniruddh', callMe)

//     function callMe() {
//         console.log('I am Here')
//     }

//     function greet(name, callback) {
//         console.log('Hi' + ' ' + name)
//         callback()
//     }
// }

// {
//     function perf(a, b, callback) {
//         const result = callback(a, b)
//         console.log(`The Result is: ${result}`)
//     }

//     function add(a, b) {
//         return a + b
//     }

//     function multiply(a, b) {
//         return a * b
//     }

//     perf(45, 23, add)
//     perf(5, 234, multiply)
// }
