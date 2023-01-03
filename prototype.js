// 공통된 property는 따로 빼서 객체를 만든다.
const car = {
  wheels: 4,
  drive() {
    console.log("drive...");
  },
};

const bmw = {
  color: "red",
  navigation: 1,
};

const benz = {
  color: "black",
};

const audi = {
  color: "blue",
};

// car는 bmw의 prototype이 된다.
// = bmw는 car의 상속을 받는다.
bmw.__proto__ = car;
// benz.__proto__ = car;
// audi.__proto__ = car;

// 상속은 이어질 수 있다.
const x5 = {
  color: "white",
  name: "x5",
};

// car까지 다 상속받음.
x5.__proto__ = bmw;

//---------------------------------------------------------
// 생성자 함수 사용

// 이렇게 하면 color를 바꿀 수 있다.
// const Bmw = function (color) {
//   this.color = color;
// };

// closer 이용
// 이렇게 하면 초기 세팅 값으로 고정됨. = 색상 바꿀 수 X
const Bmw = function(color) {
    const c = color;
    this.getColor = function() { // 생성될 당시의 context를 기억 (closer)
        console.log(c);
    };
}

// __proto__ 대신
// .prototype으로 설정
// 중복 코드를 줄일 수 있다.
// Bmw.prototype.wheels = 4;
// Bmw.prototype.drive = function () {
//   console.log("drive...");
//   Bmw.prototype.navigation = 1;
//   Bmw.prototype.stop = function () {
//     console.log("STOP!");
//   };
// };

// 상단 코드를 깔끔하게
// constructor가 사라지기 떄문에 따로 지정해줘야함.
// 그러나, constructor가 언제나 수정될 수 있다.
Bmw.prototype = {
    constructor: Bmw,
    wheels: 4,
    drive() {
        console.log("drive...");
    },
    navigation: 1,
    stop() {
        console.log("STOP!")
    }
};

const x1 = new Bmw("red");
const x2 = new Bmw("black");

// 항상 이렇게 해줄 수 없으니 .prototype 사용
// x1.__proto__ = car;
// x2.__proto__ = car;

// instanceof = 해당 객체가 그 생성자로부터 생성된 것인지 반환
// x1의 생성자(construcor) === Bmw
console.log(x1.constructor === Bmw);
console.log(x2.getColor());
