function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function()
{
    return this.firstName+ ' ' + this.lastName
}
function Student(age){
    this.age=age
}

Student.prototype.getAge = function(){
    return this.age
}

Student.prototype = new Person();