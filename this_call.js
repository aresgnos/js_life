// call
// 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있다.
const mike = {
    name: "Mike"
};

const tom = {
    name: "Tom"
};

function showThisName() {
    console.log(this.name); // 여기서 this는 window
}

// showThisName();
// // 함수를 호출하면서 call 사용, this로 사용할 객체를 넘겨줌
// showThisName.call(mike);
// showThisName.call(tom);

// update
// 객체의 정보를 새로운 데이터로 업데이트해줌
function update(birthYear, job) {
    this.birthYear = birthYear;
    this.job = job;
}

// update.call(mike, 1999, 'singer');
// console.log(mike);

// apply
// call과 같으나, 매개변수를 배열로 받는다.
// 상단 코드와 같음
update.apply(mike, [1999, 'singer']);
console.log(mike);

// 최소값, 최대값
// const minNum = Math.min(3, 10, 1, 6, 4);
// const maxNum = Math.max(3, 10, 1, 6, 4);

// 상단과 같음
const nums = [3, 10, 1, 6, 4];
// const minNum = Math.min(...nums); // 스프레드 연산자
// const maxNum = Math.max(...nums);

// apply 사용
const minNum = Math.min.apply(null, nums); // 두번째 매개변수로 배열을 전달하면 차례대로 인수로 사용
// = const minNum = Math.min.apply(null, [3, 10, 1, 6, 4]); // apply는 배열형태
const maxNum = Math.max.call(null, ...nums);
// = const maxNum = Math.max.call(null, 3, 10, 1, 6, 4); // call은 그대로

console.log(minNum);
console.log(maxNum);

// bind
// 함수의 this 값을 영구히 바꾼다.
const user = {
    name: "Mike",
    showName: function() {
        console.log(`hello, ${this.name}`);
    }
};

user.showName();
let a = user.showName;
a(); // this를 잃어버림
a.call(user); // this로 사용할 user를 넣어줌
a.apply(user);

let b = a.bind(user);
b();

