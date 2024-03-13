{
a = 'anni'
console.log(a)
}

// 'use strict'

{
    function Product(name, price) {
        this.name = name
        this.price = price
    }

    function Food(name, price) {
        Product.call(this, name, price)
        this.category = 'food'
    }

    console.log(new Product('cheese').name)
    console.log(new Food('cheese', 50).price)
}

{
    const person = {
        fullName: function (city, country) {
            return this.firstName + " " + this.lastName + "," + city + "," + country
        }
    }

    const person1 = {
        firstName: "Anni",
        lastName: "Godhani"
    }

    const person2 = {
        firstName: "Kartik",
        lastName: "Gangani"
    }
    console.log(person.fullName.call(person1, "Surat", "India"))
    console.log(person.fullName.call(person2, "Surat", "India"))
}



