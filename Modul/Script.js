// /* ES6 AKA Ecmascript 2015 */
// // import {login} from './lib.js'

// // login()

// /* let const */
// // var productName = 'Laptop'
// // code polute

// var age = 18

// if(age>=18){
//      var driving = true
// }

// console.log(driving)

// /* Function scope */

// function register() {
//      var username = 'rakesh'
//      var password = 'secret'
// }

// console.log(register)

// /* var / let / const variables */

// var product = 'Laptop'
// var product = 'Mobile'

// console.log(product)

// // const product = 'Laptop'
// // product = 'Mobile'
// console.log(product)

// /* Hoisting */

// // console.log(age)
// // let age = 20

// let nam
// nam = 20
// console.log(nam)

// /* window.product */

// var box = "clothes"
// let boxes = "toys"

// /* change const value using object */

// // const age = {
// //     years: 19,
// // }
// // age.years = 20

// // console.log(age)

// /* Arrow Functions */

// // Arrow functions
// function greet() {
//     console.log('Good morning')
// }

// const addition = (a , b) => {
//     console.log(a + b)
// }

// addition(10, 20)

// /* short method */

// const addition1 = (a) => {
//      console.log(a + a)
// }

// addition1(10);

// /* this keyword */

// console.log(this)

// const shop = {
//      purchase(){
//          console.log(this)
//      },
//  }

//  shop.purchase()

//  const shop1 = {
//      purchase: function(){
//          console.log(this)
//      },
//  }

//  shop1.purchase();

// /* parent context */

// const shop2 = {
//     purchase: () => {
//         console.log(this)
//     },
// }

// shop2.purchase()



// // const myButton = document.querySelector('#myButton')

// // const shop3 = {
// //      price: 100,
// //      buy: function () {
//         //   myButton.addEventListener('click', function () {
//             //    console.log(this)
//             //    console.log('I spent ' + this.price)
// //           })
// //      },
// // }
// // shop3.buy()

// // const myButton1 = document.querySelector('#myButton1')

// // const shop4 = {
// //      price: 100,
// //      buy: function () {
// //           const self = this
// //           myButton1.addEventListener('click', function () {
// //                console.log(this)
// //                console.log('I spent ' + self.price)
// //           })
// //      },
// // }
// // shop4.buy()

// /* Problem solve with arrow function */

// // const myButton2 = document.querySelector('#myButton2')

// // const shop5 = {
// //     price: 100,
// //     buy: function () {
// //         myButton2.addEventListener('click', () => {
// //             console.log(this)
// //             console.log('I spent ' + this.price)
// //         })
// //     },
// // }
// // shop5.buy()


// /* Template Literals AKA(Also Known As) backticks */


// const fstName = 'Anni'
// const lastName = 'Godhani'

// console.log(fstName + ' ' + lastName)
// // `hello
// // how are you`

// const mess = 'hello \n' + 'how are you'
// console.log(mess)

// const messg = `hello
// how are you
// `
// console.log(messg)

// const name1 = 'Rakesh'
// const message1 = `hello ${name1}
// how are you
// `
// console.log(message1);
 
// /* with javascript expression */

// const name2 = 'Rakesh'
// const message = `hello ${5 + 6}
// how are you
// `
// console.log(message)

// // Enhanced object literals
// // computed propery keys
// // Method defination shorthand
// // Property shorthand

// const product1 = {
//      name : "Mobile",
//      price : 100,
// }
// console.log(product1);

// const keyNam = "name"

// const product2 = {
//      [keyNam]: "Mobile",
//      price : 100,
// }
// console.log(product2)


// /* Method Definiation Shorthand */

// const keyName1 = "name"

// const product3 = {
//      buy: function() {
//           console.log("hello")
//      }
// }
// product.buy()

// const keyName = "name"

// const product4 = {
//      buy(){
//           console.log("hello")
//      }
// }
// product.buy()


// /* Property shorthand */

// const accessToken = 'dsjfhkadhskfhk'
// const refreshToken = 'adkjfljdlffdd'

// const users = {
//     accessToken : accessToken,
//     refreshToken :  refreshToken
// }
// console.log(users)

// const use = {
//     accessToken,
//     refreshToken,
// }
// console.log(use)


// /*  Destructuring */

// const usr = {
//     name: 'John Doe',
//     age: 30,
//   }

//   console.log(usr)
//   console.log(usr.name)
//   console.log(usr.age)
  
  
//   const user = {
//        names: 'John Doe',
//        age: 30,
//        lastname:"ksjdhfsajiedfhjksadhfjska"
//    }

//   const { name3 } = user
//   const name4 = user.name3
//   console.log(name4)
  
// //   const { name5 , age , lastname } = user
//   console.log(name2)
//   console.log(age)
//   console.log(lastname)
  
  
//   /* With Alias */
  
//   const { name : firstName, age : numbers } = user
//   console.log(firstName)
//   console.log(numbers)
  
  
//   /* javascript Array */ 
  
//   const data = ['Rakesh', 30, 'Developer']
//   console.log(data[0])
  
  
//   /* Declarative Way */
  
//   const data1 = ['Rakesh', 30, 'Engineer']
// //   let [na, age, professi] = data
//   console.log(na)
//   console.log(age)
//   console.log(professi)
  
//   data1[0]  = "mahesh"
  
//   console.log(name)
  
//   console.log(data1)
  
  
  
//   /* In Use React */
  
//   const data2 = ['Rakesh', 30, 'Engineer']
// //   const [name, age, profession] = data2
  
//   // /* Hooks In React */
//   // /* useState Hooks */
//   const [count, setCount] = useState()