var array = []
console.log(array)

var students = ["Santanu","Surekha","Sunita","Pradeep"]
console.log(students)

var arrayList = [1,2,3,"Santanu","Paikaray",true]

console.log(arrayList)

//push - will add the image at the end of the array

var technologies = ["Angular","Node"]
technologies.push("MongoDB")
technologies.push("Check")
console.log(technologies)

//unshift - will add the elements at the begining of the array

technologies.unshift("javascript")

//pop - will remove elements at the end of the array

technologies.pop()

//shift - will remove elements at the begining

technologies.shift()
console.log(technologies)
delete technologies[1]
console.log(technologies)