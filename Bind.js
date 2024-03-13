{
const student1 = {
    name: "Jack",
    grade: "5",
    introduction: function () {
        console.log(this.name + "studies in grade" + this.grade + ".")
    },
}

const student2 = {
    name: "Jimmy ",
    grade: " 6",
}

let result = student1.introduction.bind(student2)

result()
}

{
    const person = {
        firstName: "Ekta",
        lastName: "Vasoya",
        fullName: function () {
            return this.firstName + " " + this.lastName
        }
    }

    const person1 = {
        firstName: "Aesha",
        lastName: "Limbasiya",
    }

    let fullName = person.fullName.bind(person)
    Name = person.fullName.bind(person1)
    console.log(fullName())
    console.log(Name())
}

{
	const car = {
		brand: 'Lamborghini',
	}

	const printDetail = function (model, topSpeed) {
		console.log(`${this.brand} ${model} has a 
		top speed of ${topSpeed} mph`)
	}

	const lamboPrintDetail = printDetail.bind(car)
	lamboPrintDetail('Diablo VTTT', 222)

	const reventonPrintDetail 
		= printDetail.bind(car, 'Reventon', 220)

	reventonPrintDetail()
}
