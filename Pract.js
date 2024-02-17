// primitive string 

let S1 = "Hello"
let S2 = 'World'
let S3 = `Hello World`

console.log(S1);
console.log(S2);
console.log(S3);


// string as object 

let S4 = new String("Aniruddh")

console.log(S4);

let S5 = S4.split("");
console.log(S5);

//  String length.

let S6 = "WHAT ARE MOST SIMPLE."
console.log(S6.length);


//  String charAt() 

let S7 = "MOST Populer FOOd."
let S8 = S7.charAt(6)
console.log(S8);


// String slice() return New String 

let String9 = "Noty Boy."
let String10 = String9.slice(6)
let String11 = String9.slice(-10)
let String12 = String9.slice(-5, -12)
let String13 = String9.slice(6, 8)
let String14 = String9.slice(-3, 14)
let String15 = String9.slice(4, -9)

console.log(String10)
console.log(String11)
console.log(String13)
console.log(String14)
console.log(String15)

// String substring() return New String 

let String16 = "Happy Girl."
let String17 = String16.substring(10)
let String18 = String16.slice(12)
let String19 = String16.substring(-10)
let String20 = String16.slice(-13)
let String21 = String16.substring(10, 30)
let String22 = String16.substring(2, -20)
let String23 = String16.substring(-10, 8)

console.log(String17)
console.log(String18)
console.log(String19)
console.log(String20)
console.log(String21)
console.log(String22)
console.log(String23)

// String replace()

let String24 = "WHAT ARE MOST SIMPLE Guy's."
let String25 = String24.replace("MOST", "The")

console.log(String25)

// String replaceAll()

let String27 = "Simple Guy's Is Very Simple."
let String28 = String27.replaceAll("Simple", "Boring")
console.log(String28)


// String toUpperCase()

let String30 = "aniruddh godhani"
let String31 = String30.toUpperCase()
console.log(String31)


//  String toLowerCase()

let String32 = "ANIRUDDH GODHANI"
let String33 = String32.toLowerCase()
console.log(String33)


//  String concat()

let String34 = "Hello"
let String35 = "How Are You!"
let String36 = String34.concat(" " + String35)
console.log(String36)


// String trim()

let String38 = "  This is most common lecture!  "
console.log(String38.length)

let String39 = String38.trim()
console.log(String39)
console.log(String39.length)


//  String trimStart()

let String40 = "  This is most common lecture!  "
console.log(String40.length)

let String41 = String40.trimStart()
console.log(String41)
console.log(String41.length)


//  String trimEnd() 

let String42 = "   This is most common lecture!   "
console.log(String42)
console.log(String42.length)

let String43 = String42.trimEnd()
console.log(String43)
console.log(String43.length)


//  String padStart() 

let String44 = "This is Common langauage!"
console.log(String44)
console.log(String44.length)

let String45 = String44.padStart(5, "1")
console.log(String45)

let Number1 = "500"
let Number2 = Number1.padStart(3, 0)
console.log(Number2)


// String padEnd() 

let Number3 = "2002"
let Number4 = Number1.padEnd(4, 0)
console.log(Number4);
console.log(typeof (Number4));

let Number5 = parseFloat(Number4)
console.log(Number5);
console.log(typeof (Number5));


//  String charCodeAt() 

let String46 = "This is most CoMmon!"
let String47 = String46.charCodeAt(15)
console.log(String47)


// String split() 

let String48 = "Aniruddh Godhani."
console.log(String48)
let String49 = String48.split("")
console.log(String49)


//  String includes() , true and false 

let String50 = "Aniruddh Godhani"
console.log(String50)
let String51 = String50.includes("a")
console.log(String51)

//Q-1 Declare an empty array;

let newarry = []
console.log(newarry)

// Q-2 Declare an array with more than 5 number of elements

let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(a)

// Q-3 Find the length of your array

let v = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('length is' + ' ' + v.length)

// Q-4 Get the first item, the middle item and the last item of the array

let A = [1, 2, 3, 4, 5, 6, 7]
let G = A[0]
let V = A[Math.floor(A.length / 2)]
let Ka = A[A.length - 1]
  
console.log("G :", G)
console.log("V :", V)
console.log("Ka :", Ka)

// Q-5 Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

let N = [1, 'apple', true, { key: 'value' }, [2, 4, 6], null, undefined]
let J = N.length

console.log("N :", N)
console.log("Length :", J)

// Q-6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// Print the array using console.log()
// Print the number of companies in the array
// Print the first company, middle and last company
// Print out each company

let Companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

console.log("Array :", Companies)
console.log("Number of companies :", Companies.length)

let first = Companies[0]
let middle = Companies[Math.floor(Companies.length / 2)]
let last = Companies[Companies.length - 1]

console.log("First :", first)
console.log("Middle :", middle)
console.log("Last :", last)

// Q-7 Change each company name to uppercase one by one and print them out
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

console.log("Company Names in Uppercase:")
itCompanies.forEach((company, index) => {
    let uppercasedCompany = company.toUpperCase()
    console.log(`Company ${index + 1}: ${uppercasedCompany}`)
})

let sentence = itCompanies.join(', ') + ' are big IT companies.'
console.log("Array as a Sentence:", sentence)

// Q-8 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// Filter out companies which have more than one 'o' without the filter method

let itCompanie = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

function checkAndFilter(companyName) {
    let found = false
    let filteredCompanie = []

    for (let i = 0; i < itCompanie.length; i++) {
        let company = itCompanies[i]

        if (company.toLowerCase() === companyName.toLowerCase()) {
            found = true
        }

        let count = 0
        for (let j = 0; j < company.length; j++) {
            if (company[j].toLowerCase() === 'o') {
                count++
            }
        }

        if (count <= 1) {
            filteredCompanie.push(company)
        }
    }

    if (found) {
        return `${companyName} exists in the array.`
    }

    else {
        return `${companyName} is not found in the array.`
    }
}

let companyNameToCheck = 'Microsoft'
let result = checkAndFilter(companyNameToCheck)
console.log(result)

console.log("Filtered Companies:", companyNameToCheck)

// Q-9 Sort the array using sort() method

{
    let ary1 = ["Ani", "Kartik", "Vijay", "Hari", "Varun", "Gopal"]
    console.log(ary1)

    let ary2 = ary1.sort()
    console.log(ary2)
}

// Q-10 Reverse the array using reverse() method

{
    let arr1 = ["Gopal", "Vijay", "Janak", "Anii", "Nimesh", "Chirag"]
    console.log(arr1)

    let arr2 = arr1.reverse()
    console.log(arr2)
}

// Q-11 Slice out the first 3 companies from the array

let name1 = ["Gopal", "Vijay", "Janak", "Anii", "Nimesh", "Chirag"]
let K = 3
console.log(name1)
const result1 = name1.slice(0, 3)
console.log(result1)

// Q-12 Slice out the last 3 companies from the array

let name2 = ["Gopal", "Vijay", "Janak", "Anii", "Nimesh", "Chirag"]
console.log(name2)
const result2 = name2.slice(-3)
console.log(result2)

// Q-13 Slice out the middle IT company or companies from the array
// Remove the first IT company from the array
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
// Remove all IT companies

let itCompani = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

function checkCompanyExists(companyName) {
    if (itCompanies.includes(companyName)) {
        return `${companyName} exists in the array.`
    }
    else {
        return `${companyName} is not found in the array.`
    }
}

let companyName = 'Microsoft'
let result3 = checkCompanyExists(companyName)
console.log(result3)

let filteredCompanies = []
for (let i = 0; i < itCompanies.length; i++) {
    let company = itCompani[i]
    let count = 0
    for (let j = 0; j < company.length; j++) {
        if (company[j].toLowerCase() === 'o') {
            count++
        }
    }

    if (count <= 1) {
        filteredCompanies.push(company)
    }
}
console.log("Filtered Companies:", filteredCompanies)

let middleIndex = Math.floor(itCompanies.length / 2)
let middleCompanies = itCompanies.slice(middleIndex, middleIndex + 1)
console.log("Middle IT Company:", middleCompanies)

itCompani.shift()
console.log("Array after removing the first IT company:", itCompani)

itCompani.splice(middleIndex, 1)
console.log("Array after removing the middle IT company:", itCompani)

itCompani.pop()
console.log("Array after removing the last IT company:", itCompani)

itCompani = []
console.log("Array after removing all IT compani:", itCompani)




// 1. Write a function that returns the square of a number 1 to 20

{
    function Square(number) {
        return number * number
    }

    for (let i = 1; i <= 20; i++) {
        console.log(Square(i))
    }

}

// 2. Write a function to convert Celsius to Fahrenheit

{
    function Celsius(v) {
      return (v * 9/5) + 32
    }
    let result4 = Celsius(22)
    console.log(result4)
}

// 3. Write a function to find the area of a given Rectangle

{
    function rect(l, w) {
        return l * w
    }
    console.log(rect(20, 13))
}

// 4. Write a function to reverse a number

{
    function rever() {
        for(let j = 10; j >= 1; j--)
        console.log(j)
    }
}
rever()

// 5. Count the number of Vowels in the String

// {
//     function k(stg) {
//         let vowel = 'aAeEiIoOuU'
//     }
// }

function Vowels(str) {
	const vowels = "aeiouAEIOU"
	return str.split("").reduce(function (count, char) {
		return vowels.indexOf(char) !== -1 ? count + 1 : count
	}, 0)
}
const result5 = Vowels("Hello, World!")
console.log("Number of vowels :", result5)


function countVowels(str) {
    
    str = str.toLowerCase()
 
    var vowels = ['a', 'e', 'i', 'o', 'u']
 
    var count = 0
  
    for (var i = 0; i < str.length; i++) {
      
      if (vowels.indexOf(str[i]) !== -1) {
        count++
      }
    }
  
    return count
  }
  
  var inputString = "Hello, Aniruddh Godhani"
  var resultt = countVowels(inputString)
  
  console.log("Number of vowels :", resultt)
  

// 6. Write a function to calculate simple interest based on the principal amount

{
    function simple(p , r , t) {
     let interest = (p * r * t)/100
     return interest
    }
    console.log(simple(3000 , 4 , 3))
}

// 7. Write a function to generate a random number

{
    function random(m , n) {
        return Math.floor(Math.random() * (m - n + 1)) + n
    }
    console.log(random(1 , 100))
}

// 8. Write a JavaScript program to display the current day and time in the following format.
 
{
    function date() {
        let now = new Date()
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        let day = weekday[now.getDay()]
        let hours = now.getHours()
        let minutes = now.getMinutes()

        console.log(day , hours,":",minutes)
    }
    date()
}

// 9. Write a JavaScript function that returns a passed string with letters in alphabetical order.

{
    function order(s) {
        return s.split('').sort().join('')
    }
    console.log("Aniruddh = " , order("Aniruddh"))
}

// 10. Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.


