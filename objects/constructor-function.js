function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName =lastName
    this.getFullName = function(){
        return this.firstName+ ' ' +this.lastName
    }
   

}

var StuObj = new Student('Santanu','Paikaray');
console.log(StuObj)