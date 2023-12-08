var sample = (function(){
    console.log('This is a sample function')
    return 1;
})()
console.log(sample)

var output = (function(){
    var name = "Santanu";
    var getName = function(){
        return name;

    }
    return getName()
})()
console.log(output)

var getName = function(){

 console.log('This is getname function outside  IIF')
}

getName()

var name ="Santanu"
var getName =  function(){
    console.log('This is getName function outsideIIF'+' ' + name)
}
getName()