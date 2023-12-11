var person = {
    firstName: "Santanu",
    lastName: "Paikaray",
    City: "Bhubaneswar"
}
console.log(person)

person.age = 38;

console.log(person)

delete person.age;
console.log(person)

// With preventExtension we can edit and delete the properties but can't add new properties

var preventObject = {
    name:"santanu",
    city:"Puri",
    age:27
}
Object.preventExtensions(preventObject)

preventObject.email="santanu@gmail.com"
preventObject.name="Santanu"
delete preventObject.age;

console.log(preventObject)

// Object.seal()
// // ------------------
// We can adit the properties but we can't add new properties or can't delete existing properties.

var sealObject = {
    name:"Admin",
    city:"Bhubaneswar",
    age:40
}

Object.seal(sealObject);

sealObject.email="Adam@colson.com"
sealObject.name="Santanu"
delete sealObject.age;

console.log(sealObject);

var freezeObject = {
    name: "Santanu",
    city: "Bhubaneswar",
    age: 40
}

Object.freeze(freezeObject);
freezeObject.email="santanu@gamil.com"
freezeObject.name="Check"
delete freezeObject.age;

console.log(freezeObject);