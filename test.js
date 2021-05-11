const timesTwo = i => i * 2;


 const res = timesTwo(2);
 console.log(res);

//  書き方(シンタックス)について

let arrowFn;
arrowFn = () => 42;
arrowFn = x => 42;
arrowFn = (x) => 42;
arrowFn = (x,y) => 42;
arrowFn = (x,y) => {
    console.log(x+y);
    return x + y;
}

// thisのバインドについて


let normalFn;
normalFn = {
    id: 43,
    counter: function() {
        console.log(this);

        window.setTimeout(() => {
            console.log(this);
        },1000);
    }
};
normalFn.counter()

window.me = 'global'
const outer = function(){
    let me = 'outer'; //lexicalscope

    return {
        me: 'inner',
        say: () => {
            console.log(this.me);
        }
    }
}
outer().say();
