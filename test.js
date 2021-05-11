function greet(id1,id2,id3) {
    console.log(arguments)
    let slicedArray = [].slice.call(arguments);
    let hi = `Hi,${this.name}`
    console.log(slicedArray);
}

let obj = {name: "Tom"};

const arry = [1,2,3,4];
console.log(Math.min.apply(null,arry))

let myObj = {
    id: 42,
    print() {

        setTimeout( () => {
            console.log(this.id);
        }, 1000);
    }
}
myObj.print()