// 함수와 this
function func() {
    if(window === this) {
        console.log("window === this");
    }
}

func();

// 메소드와 this
var o = {
    func: function() {
        if(o === this) {
            console.log("o === this");
        }
    }
}

o.func();

// 생성자와 this

// 전역변수 선언
var funcThis = null;

function Afunc () {
    funcThis = this;
    console.log("this", this); // window
}

// 함수를 호출
var o1 = Afunc();
if(funcThis === window) {
    console.log("funcThis === window");
}

// 생성자를 만들어 o2라는 객체에 담음.
// 새로 생성되는 객체가 this가 됨. (=생성될 객체)
var o2 = new Afunc();
if(funcThis === o2) {
    console.log("funcThis === o2");
}

// apply와 this
var a = {};
var b = {};
function Bfunc() {
    switch(this) {
        case a:
            // this는 a
            console.log("a");
            break;
        case b:
            console.log("b");
            break;
        case window:
            // this는 window
            console.log("window");
            break;
    }
}
Bfunc();
Bfunc.apply(a);
Bfunc.apply(b);

