/** js is an oop language . 
 * everything in js is object with it's properties and methods. 
 * we cerate classes to create an object. 
 * A class : is like an object constructor or a blueprint for creating objects. 
 * The class defines attributes and the behavior of the object. 
 * creating an object from a class is called class instantiation  
 * 
 */

// defining a classes : 

class ClassName {
  // code goes here 
}

// class instantiation : is creating an object from the class 

class Person { // created person class 
  // code goes here 
}

const person = new Person() // created person object ... we instantiate an object from a class 
console.log (person)

// class constructor is a builtin function which allows as to create a blueprint of our object 

class User{
  constructor (firstName, lastName){
    console.log(this)
    this.firstName = firstName
    this.lastName = lastName
  }  
}
const user = new User( 'Prince', 'Hope')
console.log(user)

class Users {
  constructor(email, password){
    console.log(this)
    this.email = email
    this.password = password
  }
}

const user1 = new Users('tesfayeleuel91@gmail.com', 'password')
const user2 = new Users('tesfayeleuel@gmail.com', 'Password')
const user3 = new Users('zablonGafat@gmail.com', 'password')
console.log(user1)
console.log(user2)
console.log(user3)

// person with more properties 

class Persons {
  constructor (firstName, lastName, age, country, city){
    console.log(this)
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
}
const person2 = new Persons ('prince', 'hope', '24','Ethiopia', 'Dessie')
console.log(person2)

// class methods 

class Student {
  constructor(firstName, lastName, email, password){
    console.log(this)
    this.firstName = firstName 
    this.lastName = lastName
    this.email = email
    this.password = password
  }
  getFullName () {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
}
const student1 = new Student ('prince' , 'hope', '24','tesfayeleuel91@gmail.com' , 'password' )
const student2 = new Student ('juliana' , 'rope', 'julichris91@gmail.com' , 'password' )

console.log(student1.getFullName())
console.log(student2.getFullName())

//getter : allow us to access a value from the object. 

class Students {
  constructor(firstName, lastName, email, password){
    console.log(this)
    this.firstName = firstName 
    this.lastName = lastName
    this.email = email
    this.password = password
  }
  getFullName () {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  
  get getEmail () {
    return this.email
  }
}
const student3 = new Students ('prince' , 'hope','tesfayeleuel91@gmail.com' , 'password' )
console.log(student3.getEmail)

// setter method : allows us to modify the value of certain properties 

class Fruits {
  constructor (name, taste) {
    console.log(this)
    this.name = name
    this.taste = taste
  }
  set setName (name) {
    this.name = name
  }
}
const fruits = new Fruits ('lemon', 'bitter')
fruits.setName = 'orange'
console.log(fruits.name)