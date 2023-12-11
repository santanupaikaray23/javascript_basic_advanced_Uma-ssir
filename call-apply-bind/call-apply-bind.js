// var person1 = {firstName:"Santanu", lastName:"Paikaray"}
// var person2 = {firstName:"Sidhanta", lastName:"Paikaray"}
// var person3 = {firstName:"Sandeep", lastName:"Paikaray"}
// var person4 = {firstName:"Sipun", lastName:"Paikaray"}

// function getName(message,city){
//     return message + ' from ' + city + + ' to ' + this.firstName+ ' ' + this.lastName

// }

// var bindMesage  = getName.bind(person1)('Hello','Boston')
// console.log(bindMesage)

// var bindMesage  = getName.bind(person2)
// console.log(bindMesage('Hello','Boston'))

// var callMessage = getName.call(person3, 'Hello', 'Santanu')
// console.log(callMessage)

// var applyMessage = getName.apply(person4,['Hello', 'Santanu'])
// console.log(applyMessage)

function sample(){
    a=10

    this.a = 2
}
sample()
var a =5;

console.log(this.a)
