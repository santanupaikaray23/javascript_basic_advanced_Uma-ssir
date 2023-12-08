var objectWithNull =  Object.create(null)

var obj={
    name:'Santanu'
}
var objectWithPrototype = Object.create(obj)

console.log(objectWithNull)
console.log(objectWithPrototype)

var person =  Object.create(null);

person.firstName = "Santanu"
person.lastName = "Paikaray"
person.isAdmin = true,
person.address = Object.create(null)

person.array = ["red","blue","yellow",1,2,3,{},[], function(){}]

person.getDetailsv=function(){
    return this.firstName;

}
console.log(person)