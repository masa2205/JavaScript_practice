// クロージャーの定義

// クロージャーは、関数と、その関数が宣言されたレキシカルスコープの組み合わせです。
let increment = (function (){

    let counter = 0; //Lexical Scope

    return function () {
        counter += 1;
        console.log(counter)
    }
})();

increment(); //1
increment(); //2
increment(); //3


function addStringFactory(tail) {
    function contact(str) {
        return str + tail;
    }
    return contact;
}

let addAs = addStringFactory('AAAAAA');
let addBs = addStringFactory('BBBBBB');