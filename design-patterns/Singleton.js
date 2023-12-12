var Singleton = (function(){

    var instance = null;

    var createInstance = function(){
        var obj = Object.create(null)
        return obj;
    }
    return{
        getInstance: function(){
            if(!instance){
               instance = createInstance();


            }
            return instance;
        }
    }

})();
console.log(Singleton)

var Singleton1 = Singleton.getInstance();
console.log(Singleton)