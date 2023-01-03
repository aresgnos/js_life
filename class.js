// 생성자 함수 사용
const User = function (name, age) {
  this.name = name;
  this.age = age;
  // this.showName = function() { // 객체 내부에 저장
  //     console.log(this.name);
  // };
};

// 생성자 함수로 상속을 구현(prototype에 저장)
User.prototype.showName = function () {
  console.log(this.name);
};

const mike = new User("Mike", 30);

// class 사용
class User2 {
  // 객체를 만들어주는 생성자 메서드
  constructor(name, age) {
    // 객체를 초기화
    this.name = name;
    this.age = age;
  }
  showName() {
    // prototype에 저장
    console.log(this.name);
  }
}

const tom = new User("Tom", 30);

// 상속
// extends 사용
class Car {
  constructor(color) { // {} 빈 객체 생성
    this.color = color;
    this.wheels = 4;
  }

  // class에서 함수는 prototype에 저장
  drive() {
    console.log("drive...");
  }
  stop() {
    console.log("STOP!");
  }
};

// Benz는 Car를 상속한다.
class Benz extends Car {
    // 오버라이딩
    // 자식 생성자는 무조건 부모 생성자를 호출해줘야 한다. (super 사용)
    constructor(color) { // 동일한 인자를 받아줘야함.
        super(color); // 항상 부모 class를 상속받아야함.
        this.navigation = 1;
    }
    park() {
        console.log("PARK");
    }
    // 메소드 오버라이딩
    // = 동일한 이름의 메서드가 있으면 덮어쓰기 된다.
    stop() {
        super.stop(); // 부모의 class의 메서드를 사용
        console.log("OFF");
    }
}

// const z1 = new Benz("red");

