/* Javascript Array */

let newarry = [1, false, "string"]
console.log(newarry)
console.log(newarry.length)

let newarry2 = ["Apple", "Banana", "Watermelon", , "Lichi"]
console.log(newarry2)
console.log(newarry2[4])
console.log(Object.keys(newarry2))
console.log(newarry2.length)

newarry2.length = 10
console.log(newarry2)
console.log(Object.keys(newarry2))

newarry2[0] = "Graps"
console.log(newarry2)

let newstring = newarry2.toString()
console.log(newstring)
console.log(typeof (newstring))


// // Array length properties
// // Accessing the First Array Element
// // Accessing the Last Array Element
// // Adding Array Elements
// // Converting Arrays to Strings

// /*
// Array indexes start with 0:
// [0] is the first array element
// [1] is the second 
// [2] is the third ...
// */


// /* The length property provides an easy way to append new elements to an array without using the push() method.*/


// /*****  Array Methods ********/

// /* Array length properties */

let arry = ["option-1", "gamit", false, 1, "skill", "development"]
console.log(arry)
console.log(arry[0])
console.log(arry[5])
arry.push("frontend")
console.log(arry)
arry.pop()
arry.pop()
arry.pop()
console.log(arry)

arry[0] = "one"

console.log(arry)

// /* The length property provides an easy way to append new elements to an array without using the push() method.*/



// /* The join() method also joins all array elements into a string. */

{
    let arry1 = ["option-1", "gamit", false, 1, "skill", "development"]
    let arry2 = arry1.join("+")
    console.log(arry2)
    console.log(typeof (arry2))
}

// /* Popping in javascript Array */

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"]
    document.getElementById("demo").innerHTML = fruits

    document.getElementById("demo-1").innerHTML = fruits.pop()

    console.log(fruits)

    console.log(fruits.length)
}

// /* The pop() method returns the value that was "popped out" */

{
    const fruits1 = ["Banana", "Orange", "Apple", "Mango"]

    document.getElementById("demo").innerHTML = fruits1

    document.getElementById("demo-1").innerHTML = fruits1.pop()
    document.getElementById("demo-2").innerHTML = fruits1.pop()
    document.getElementById("demo-3").innerHTML = fruits1.pop()

    console.log(fruits1)
}


// /* Pushing in javascript Array */

// /* The push() method adds a new element to an array (at the end) */

{
    const fruits2 = ["Banana", "Orange", "Apple", "Mango"]

    document.getElementById("demo").innerHTML = fruits2

    fruits2.push("Kiwi")

    document.getElementById("demo-1").innerHTML = fruits2

    console.log(fruits2)
}

{
    const fruits3 = ["Banana", "Orange", "Apple", "Mango"]

    document.getElementById("demo").innerHTML = fruits3.push("Kiwi")

    document.getElementById("demo-1").innerHTML = fruits3.length
}

// /* Shifting Elements */

// /* JavaScript Array shift() */

// /* The shift() method removes the first array element and "shifts" all other elements to a lower index */

{
    let arry3 = ["option-1", "gamit", false, 1, "skill", "development"]
    let arry4 = arry3.shift()
    let arry5 = arry3.shift()
    console.log(arry4)
    console.log(arry3)
    console.log(arry5)
}

// /*  The shift() method returns the value that was "shifted out" */

{
    const fruits4 = ["Banana", "Orange", "Apple", "Mango"]
    console.log(fruits4)
    document.getElementById("demo").innerHTML = fruits4.shift()
    document.getElementById("demo-1").innerHTML = fruits4
    document.getElementById("demo-2").innerHTML = fruits4
    document.getElementById("demo-3").innerHTML = fruits4
}

// /*  JavaScript Array unshift() */
// /* The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements */

{
    let arryy = ["option-1", "gamit", false, 1, "skill", "development"]
    arryy.unshift("OneAuthor")
    console.log(arryy)
}

// /* The unshift() method returns the new array length */

{
    const fruits5 = ["Banana", "Orange", "Apple", "Mango"]
    document.getElementById("demo").innerHTML = fruits5.unshift("Lemon")
    document.getElementById("demo-1").innerHTML = fruits5
}

// /*  Changing Elements */

{
    const fruits6 = ["Banana", "Orange", "Apple", "Mango"]
    console.log(fruits6)

    fruits6[10] = "Kiwi"
    console.log(fruits6)
}

// /* JavaScript Array add element */

{
    const fruits7 = ["Banana", "Orange", "Apple", "Mango"]
    document.getElementById("demo").innerHTML = fruits7

    fruits7[fruits7.length] = "Kiwi"
    document.getElementById("demo-1").innerHTML = fruits7
    console.log(fruits7)
}

// /* JavaScript Array delete() */

// /* Array elements can be deleted using the JavaScript operator delete. */

// /* Using delete leaves undefined holes in the array. */

// /* Use pop() or shift() instead. */

{
    let arrya = ["option-1", "gamit", false, 1, "skill", "development"]
    console.log(arrya)
    console.log(arrya.length)
    delete arry[4]
    console.log(arrya)
    console.log(arrya.length)

    arrya.length = 20
    console.log(arrya)

    arrya[16] = "skillQode"
    console.log(arrya)
}

// /* Merging (Concatenating) Arrays */

{

    let arry11 = ["javascript", "c", "c++", "python", "html", "css"]
    let arry22 = ["kotlin", "dart", "nodejs", "php", "wordpress"]
    let arry33 = ["boostrap", "tailwind", "reactjs", "nextjs"]

    let arry44 = arry11.concat(arry33, arry22)

    console.log(arry44)

}

// /* The concat() method does not change the existing arrays. It always returns a new array */

// /* Splicing and Slicing Arrays */

// /* JavaScript Array splice() */

// // splice(start)
// // splice(start, deleteCount)
// // splice(start, deleteCount, item1)
// // splice(start, deleteCount, item1, item2)
// // splice(start, deleteCount, item1, item2, /* …, */ itemN)

{
    let ar = ["Ani", "Vijay", "Kartik", "Hari", "Varun", "Chirag"]
    console.log(ar)

    let arr = ar.splice(3, 3, "Gopal", "Vivek")
    console.log(arr)
    console.log(ar)

}

// /* JavaScript Array slice() */

// // slice()
// // slice(start)
// // slice(start, end)

{
    let a1 = [45, 89, 21, 2, 57, 23]
    console.log(a1)

    let a2 = a1.slice(0, 3)
    console.log(a2)
    console.log(a1)
}

// /*  Array.isArray */

{
    console.log(Array.isArray(17))
}

/*  javascript Sorting Array */

{
    let ary1 = ["Ani", "Kartik", "Vijay", "Hari", "Varun", "Gopal"]
    console.log(ary1)

    let ary2 = ary1.sort()
    console.log(ary2)
}

// /*  Reversing array */

{
    let arr1 = ["Gopal", "Vijay", "Janak", "Anii", "Nimesh", "Chirag"]
    console.log(arr1)

    let arr2 = arr1.reverse()
    console.log(arr2)
}

// /*  Number Sort */

{
    let ay1 = [189, 45, 56, 128, 10, 150]
    console.log(ay1)

    let numbersorted = ay1.sort((a, b) => a - b)
    console.log(numbersorted)
}

// /*  javascript array map() */

{
    const number1 = [56, 798, 345, 35]
    console.log(number1)
    const number2 = number1.map(myFunction)

    const number3 = number2.sort((a, b) => a - b)

    console.log(number2)

    function myFunction(value) {
        return value * 2
    }
}


/* JavaScript Array slice() */

{

    let flatmap = [1, 2, 3, 4]

    let flatmap1 = flatmap.flatMap((num) => num === 3 ? [1, 1] : 2)

    console.log(flatmap1)
}

/* Javascript Array flat() */

{
    let flatarray = [10, 20, [22, 33, [44, 55, [66, 77]]]]
    let flatmap2 = flatarray.flat(3)
    console.log(flatmap2)
}

 /* javascript array filter() */

{

    let filterarry = ["Anni", "Nikunj", "Vijay", "Gopal", "Hari", "Janak"]
    let filterarry2 = filterarry.filter((word) => word.length < 5)
    console.log(filterarry2)

    let filterarry3 = filterarry2.sort()
    console.log(filterarry3)

}

 /*  javascript array fill method */

{
    let fillarray  = [46 , 89 , 101 , 122 , 45]
    console.log(fillarray)

    let fillarray2 = fillarray.fill("None" , 1)
    console.log(fillarray2)
}

 /* javascript array copywithin() method */

{
    const alfa = ["A", "B", "C", "D", "E", "F"]
    const newcopy = alfa.copyWithin(0, 3, 4)
    console.log(newcopy)

    console.log([1, 2, 3, 4, 5 , 6].copyWithin(0, 2))

    console.log([1, 2, 3, 4, 5 , 6 , 7].copyWithin(2, 4 , 5))

    console.log([7,6,5,4,3,2,1].copyWithin(2, 3))
    // [1, 2, 3, 3, 4]
}

/* javascript valueof() method */

{
    const fruitss = ["Banana", "Orange", "Lemon", "Apple", "Mango", "watermelon", "kiwi", "Olive"]
    const newfruits = fruitss.valueOf()
   document.write(newfruits)
}

 /*  javascript flat() method */

// {
//     const numm = [1, 2, 3, [4, [5, 6, [7, 8, 9]]]]
//     const newarray1 = numm.flat()
//     const newarray2 = numm.flat(2)
//     const newarray3 = numm.flat(3)
//     const newarray4 = numm.flat(4)
//     console.log(newarray1)
//     console.log(newarray2)
//     console.log(newarray3)
//     console.log(newarray4)
// }

 /*  JavaScript Multidimensional Array */
 
 /* A multidimensional array is an array that contains another array. */
 
 {
    // multidimensional array
    const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]]
    console.log(data)
}

/* Access Elements of an Array */

{
   const data = [[1, 2, 3], [1, 9, 4], [4, 5, 6]]
   let data1 = data[1][1]
   console.log(data1)
}

/* Add an Element to a Multidimensional Array */

{
    // Adding Element to the Outer Array

    let studentsData = [['Anni', 22], ['Gopal', 25]]
    studentsData.push(['Kartik', 24])

    let data = studentsData[1][1] 

    console.log(studentsData)
    console.log(data)
}

{
    // Adding Element to the Inner Array
    {
        // using index notation
        let studentsData = [['Vijay', 24], ['Janak', 26],]
        studentsData[1][2] = 'hello'
    
        console.log(studentsData)
    }

    {
        // using push()
        let studentsData = [['Chirag', 28], ['Hari', 24],]
        studentsData[1].push('hello')

        console.log(studentsData)
    }
      
    {
        // the Array's splice() method to add an element at a specified index.

        let studentsData = [['Kishan', 23], ['Nikunj', 25]]

        // adding element at 1 index
        studentsData.splice(0, 2 , ["peter"  , 58])

        console.log(studentsData)
    }

    /*  Remove an Element from a Multidimensional Array */

    {
        // remove the array element from outer array
        let studentsData = [['Vishal', 24], ['Ekta', 23]]
        studentsData.pop()

        console.log(studentsData)
    }

    {
        // remove the element from the inner array
        let studentsData = [['Jemisha', 22], ['Saki', 23]]
        studentsData[1].pop()

        console.log(studentsData)   // [["Jemisha" , 22], ["Saki" , 23]]
    }

    {
       // the splice() method to remove an element at a specified index.
        let studentsData = [['Vishakha', 25], ['Nidhi', 24]]

        // removing 1 index array item
        studentsData.splice(0,1)
        console.log(studentsData)
    }
}