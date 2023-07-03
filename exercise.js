// exercise level 1 : 
// 1. create an animal class. The class has name , age , color , legs properties and create different methods . 

class Animal {
    constructor (name, age, color, legs){
        console.log(this)
        this.name = name
        this.age = age 
        this.color = color
        this.legs = legs
    }
}

const animal = new Animal ('Jaguar', '4', 'Black', 'Four')
console.log(animal)

//Create a Dog and Cat child class from the Animal Class.

class Dog extends Animal {
 
}
const dog = new Animal ('Dog','10', 'white' ,'Four')
console.log(dog)

// exercise level 3 
// Create a class called PersonAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount {
    constructor(firstName, lastName, incomes, expenses, totalIncome, totalExpense, accountInfo, addIncome ,addExpense, accountBalance){
        console.log(this)
            this.firstName = firstName
            this.lastName = lastName
            this.incomes = incomes
            this.expenses = expenses
            this.totalExpense = totalExpense
            this.totalIncome = totalIncome
            this.accountInfo = accountInfo
            this.addIncome = addIncome
            this.addExpense = addExpense
            this.accountBalance = accountBalance
    }
}

const personAccount = new PersonAccount ('Prince', 'Hope', '$2000', '$500' , '@700')
console.log(personAccount)
