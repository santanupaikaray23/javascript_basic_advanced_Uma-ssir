var os = ["windows","mac","linux"]
var output1 = os.forEach(function(item){
    return item;
})
console.log(output1)

os.map(function(item){
    console.log(item)
})