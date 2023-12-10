console.log(this) // this points to global Object

function a(){
    console.log(this) //this keyword is still going to point toglobal object
}
a();

var b = function(){
    console.log(this)// This still points to global object
}

b()

function sample(){
    console.log(this)
    this.newVariable="Santanu"
}
sample()

console.log(newVariable)
