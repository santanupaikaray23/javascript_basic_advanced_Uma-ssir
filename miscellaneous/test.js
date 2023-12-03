function sayHello(name){
    return function(){
        return "Hello" + name;

    }
}
console.log=sayHello('Happy')
console.log(message)

// Inner Function having access to the outer function varaible is called closer.
