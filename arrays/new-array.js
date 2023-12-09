var array = new Array(4);
array[0] = "Santanu"
array[1] = "Paikaray"
array[2] = "Sidhanta"
array[3] = "Sipun"
console.log(array)
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])

var fruits = new Array("Orange","Apple","Banana","Guava");
var vegetables =  new Array("Potato", "Tomato", "Egg plant", "Drunstick")

var mix = fruits.concat(vegetables);
console.log(mix)

//join

var movies = ["Avatar","Good will Hunting","Vanilla Sky", "Rabne Banadi Joidi"]
var MovieString = movies.join(",")
console.log(MovieString)
console.log(typeof MovieString)