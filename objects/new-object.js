var person = new Object();
console.log(person)

person ["firstname"] = "Santanu";
person ["lastname"] = "Paikaray";

console.log(person);

var firstnameProperty = "firstname";
console.log(person[firstnameProperty])
console.log(person["lastname"])

person.city = "Bhubaneswar"
console.log(person.city)

person.address=new Object();
person.address.street = "1st name"
person.address.state = "Odisha"

console.log(person)

person.hobbies = ["cricket","Basketball","  Nenflix"]