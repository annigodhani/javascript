/* Javascript Object */

const dataobject = {}
console.log(dataobject)

const dataObject1 = {
  key1: "javascript",
  key2: "reactjs"
}

console.log(dataObject1)

console.log(dataObject1.key1)

console.log(dataObject1.key2)

console.log(dataObject1["key1"])

console.log(dataObject1["key2"])


const dataObject3 = {
  name: "vasu",
  gender: "male",
  address: "Twintower",
  marks: {
    maths: 35,
    english: 90
  }
}

console.log(dataObject3.marks.maths)

console.log(dataObject3["marks"])

console.log(dataObject3["marks"]["maths"])

const dataObject4 = {
  array: [1, 2, 3, 4, 5, 6, [111, 222]],
  array2: [11, 22, 33, 44, 55, 66],
}

console.log(dataObject4.array)
console.log(dataObject4.array[6][0])


const Array1 = [
  {
    id: 1,
    item: "apple",
    catagories: "fruits"
  },

  {
    id: 2,
    item: "banana",
    catagories: "fruits"
  },

  {
    id: 3,
    item: "graps",
    catagories: "fruits"
  },

  {
    id: 4,
    item: "mango",
    catagories: "fruits"
  },

  {
    id: 5,
    item: "watermelon",
    catagories: "fruits"
  }

]

console.log(Array1[0].id)


{
  let list1 = [
    {
      No1: "Moto",
      price: "$229",
      category: "mobile"
    },

    {
      No2: "Apple",
      price: "$449",
      category: "mobile"
    },

    {
      No3: "Poco",
      price: "$109",
      category: "mobile"
    },

    {
      No4: "Samsung",
      price: "$329",
      category: "mobile"
    },

    {
      No5: "Pixel",
      price: "$389",
      category: "mobile"
    },

    {
      Car1: "Chevelle",
      price: "$140000",
      category: "car"
    },

    {
      Car2: "Shelby",
      price: "$91450",
      category: "car"
    },

    {
      Car3: "Mustang",
      price: "$328900",
      category: "car"
    },

    {
      Car4: "Blazer",
      price: "$109945",
      category: "car"
    },

    {
      Car5: "Corvette",
      price: "$119500",
      category: "car"
    },

    {
      Fruit1: "Strawberry",
      price: "$23",
      category: "fruit"
    },

    {
      Fruit2: "Brazil Nut",
      price: "$23",
      category: "fruit"
    },

    {
      Fruit3: "Coconut",
      price: "$23",
      category: "fruit"
    },

    {
      Fruit4: "Fig",
      price: "$38",
      category: "fruit"
    },

    {
      Fruit5: "Persimmon",
      price: "$89",
      category: "fruit"
    },

    {
      Tour1: "Rishikesh",
      price: "$39",
      category: "tour"
    },

    {
      Tour2: "Ladak",
      price: "$38",
      category: "tour"
    },

    {
      Tour3: "Spiti",
      price: "$89",
      category: "tour"
    },

    {
      Tour4: "Goa",
      price: "$29",
      category: "tour"
    },

    {
      Tour5: "Kerala",
      price: "$59",
      category: "tour"
    },

    {
      Treak1: "Kedarkantha",
      price: "$87",
      category: "treak"
    },

    {
      Treak2: "Brahmatal",
      price: "$56",
      category: "treak"
    },

    {
      Treak3: "Tarsar",
      price: "$47",
      category: "treak"
    },

    {
      Treak4: "Nandadevi",
      price: "$32",
      category: "treak"
    },

    {
      Treak5: "Hampta",
      price: "$23",
      category: "treak"
    }

  ]

  let input = prompt("Enter This Name Mobile, Tour, Treak, Fruit, Car For Full List: ")
  let output1 = list1.filter(list1 => list1.category == input)

  console.log(output1)
}