var students = ["Santanu","Sidhanta","Sipun","Sapdeep"]

// for (var i=0; i<students.length; i++){
//     console.log(students[i])

// // }
// students.forEach(function(item){
//          console.log(item)
// })

// students.forEach(function(item, index){
//     console.log(index,item)

// })

for (var i="2"; i<students.length; i++){
    if(students[i] === "Sandeep"){
        delete students[i]
    }else{
        console.log(i, students[i])
    }
}

students.forEach(function(item, index){
    if(item === "santanu"){
        delete item
    }else{
        console.log(index.item)
    }
})