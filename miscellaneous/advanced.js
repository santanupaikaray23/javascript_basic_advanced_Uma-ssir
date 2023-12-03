function arraySum(data){
    var sum=0;
    for(var i=0; i<data.length; i++){
        if(typeof data[i]=='number'){
            sum = sum + data[i]
        }
        if(Array.isArray(data[i])){
            sum = sum +arraySum(data[i])
        }
    }
    return sum;

}
console.log(arraySum([1,2,3,'Santanu',[4,'santanu,4']]))

console.table([
    {name:"Santanu",age:38},
    {name:"Paikaray",age:34},
    {name:"Lucky",age:7}

])
console.log("Hello %o your ID is %s",{name:"santanu"},1234)