let myObj = {
    id: 2,
    printId(){
        console.log(this.id);
    }
}

myObj.printId();

const sayFoo = function(){
    console.log(this['foo'])
}

foo = 'foo';

const mySecondObj = {
    foo: "I'min the obj",
    sayFoo
}

sayFoo()
mySecondObj.sayFoo()

function MyObj(id){
    this.id = id;
}

MyObj.prototype.printId = function(id){
    console.log(this.id);
}

// const newInstance = new MyObj(5);

class MyClass {
    constructor(id){
        this.id = id;
    }
    
    printId(id){
        console.log(this.id)
    }
}
const newInstance = new MyObj(5);